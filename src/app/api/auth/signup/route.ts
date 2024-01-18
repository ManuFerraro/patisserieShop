import { connectDB, disconnectDB } from "@/lib/database/mongoose";
import User from "@/lib/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
import { sendEmail } from "@/lib/helpers/mailer";




export async function POST(request: Request) {
    const { username, email, password } = await request.json();
    try {
       
      await connectDB();
      const userFound = await User.findOne({ email });
      if(userFound) {
        return NextResponse.json({ error: 'El usuario ya existe!', status: 400})
      }
      //HASHEO PASSWORD
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      //CREATE NEW USER
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
      //SAVE USER
      const savedUser = await newUser.save();
      await disconnectDB();

      //SEND VALIDATION EMAIL
      await sendEmail({email, emailType: 'VERIFY', userId: savedUser._id })

      return NextResponse.json({
        message: 'Usuario creado satisfactoriamente',
        success: true,
        status: 200,
        savedUser
      })
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return NextResponse.json({ message: error.message}, {status: 500})
        }
        return NextResponse.error()
    }
}