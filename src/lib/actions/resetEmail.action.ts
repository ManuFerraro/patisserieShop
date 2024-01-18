'use server'

import { NextResponse } from "next/server";
import { connectDB, disconnectDB } from "../database/mongoose"
import { sendEmail } from "../helpers/mailer";
import { IUser } from "../interfaces/User";
import User from "../models/user.model";



export async function resetPasswordWithEmail(email: string): Promise<any> {
    console.log('Recibimo', email)
     try {
        await connectDB();
        const userFound: IUser | null = await User.findOne({ email })
        if(!userFound) {
            return 'El Email ingresado no es válido y/o no estás registrado'
        }
        await disconnectDB();
        await sendEmail({email, emailType: "RESET", userId: userFound._id})    
        return  `Hemos enviado un correro electrónico a ${email} para reestablecer su contraseña`
     } catch (error) {
        throw new Error('UPS! Algo salió mal')
     }
}