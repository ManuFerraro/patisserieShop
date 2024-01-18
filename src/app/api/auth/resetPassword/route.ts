import { connectDB, disconnectDB } from "@/lib/database/mongoose";
import User from "@/lib/models/user.model";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";





export async function POST(request: Request) {
    try {
       const { token, password } = await request.json() as { token: string, password: string}

       await connectDB()
       const user = await User.findOne({forgotPasswordToken: token, forgotPasswordTokenExpiry: {$gt: Date.now()}});
       if(!user) {
        return NextResponse.json({ error: 'Token inválido! Revise su correo nuevamente'}, {status: 400})
       }

       const salt = await bcryptjs.genSalt(10);
       const hashedPassword = await bcryptjs.hash(password, salt);

       user.password = hashedPassword;
       user.forgotPasswordToken = undefined;
       user.forgotPasswordTokenExpiry = undefined;

       await user.save();
       await disconnectDB();
       
       return NextResponse.json({
        message: "La contraseña ha sido cambiada correctamente",
        success: true
    })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
      
      
}