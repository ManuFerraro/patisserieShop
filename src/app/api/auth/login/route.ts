import { connectDB, disconnectDB } from "@/lib/database/mongoose"
import User from "@/lib/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { IUser } from "@/lib/interfaces/User";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";





export async function POST(request: Request) {
   try {
         const { email, password } = await request.json() as { email: string, password: string}
         
         await connectDB();
         const userFound: IUser | null = await User.findOne({ email })
         if(!userFound) {
            return NextResponse.json({ error: 'El usuario ingresado no es válido', status: 400})
         }
         await disconnectDB(); 
         //Compare Password
         const validPassword = await bcryptjs.compare(password, userFound.password)
         if(!validPassword) {
            return NextResponse.json({ error: 'La contraseña ingresada no es válida', status: 400})
         }
           //CREATE TOKEN DATA
        const tokenData = {
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d'})

        const response = NextResponse.json({
            message: 'Iniciaste sección correctamente',
            success: true,
        })

        //SET COOKIE WITH TOKEN

        response.cookies.set('token', token, {
            httpOnly: true,
        })
        return response;
   } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
        return NextResponse.json({ message: error.message}, { status: 500})
        }
        return NextResponse.error()
   }
}