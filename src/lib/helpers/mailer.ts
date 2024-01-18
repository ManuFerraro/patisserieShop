import nodemailer from 'nodemailer';

import bcryptjs from 'bcryptjs';
import User from '../models/user.model';


interface Params {
    email: string;
    emailType: string;
    userId: string;
}


export const sendEmail = async({email, emailType, userId}: Params) => {
    try {
        // create a hased token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, 
                {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
        } else if (emailType === "RESET"){
            await User.findByIdAndUpdate(userId, 
                {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
        }

        var transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
              user: "manuelferrarook@gmail.com",
              pass: "shawgytsldcxgddl"
            }
          });
          //ADD TODO IN .ENV FILE----SECRET CREDENTIALS

        const mailOptions = {
            from: 'manuelferrarook@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: emailType === 'VERIFY' ? `<p>Click <a href="asd/login/resetPassword/?token=${hashedToken}">here</a> to verify your email or copy and paste the link below in your browser. <br> asd/login/resetPassword/?token=${hashedToken} </p>`
                : `<p>Click <a href="asd/login/resetPassword/?token=${hashedToken}">here</a> to verify your email or copy and paste the link below in your browser. <br> asd/login/resetPassword/?token=${hashedToken} </p>`
           
        }

        const mailresponse = await transport.sendMail
        (mailOptions);
        return mailresponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}