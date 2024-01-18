import { connectDB, disconnectDB } from "@/lib/database/mongoose";
import { IUserAndToken } from "@/lib/interfaces/User";
import User from "@/lib/models/user.model";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { NextResponse } from "next/server";




export async function GET() {
 
    try {
      const nextCookies = cookies(); // Get cookies object
      const existe = nextCookies.has("token");
      if (existe) {
        const token = nextCookies.get("token")?.value || ""; // Find cookie
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as {
          id: string;
          username: string;
          email: string;
        };

        await connectDB();
        const user: IUserAndToken = await User.findById({
          _id: decodedToken.id,
        }).select("-password");

        await disconnectDB();
        
        return NextResponse.json({
          message: "User found",
          success: true,
          user,
        });
      } else {
        return NextResponse.json({ error: "Token not exist", status: 404, success: false });
      }
    } catch (error) {
      return NextResponse.json({ 
        error: "User not found",
        status: 404,
        success: false,
       });
    }
  }

