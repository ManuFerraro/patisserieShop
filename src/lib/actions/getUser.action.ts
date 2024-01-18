"use server";

import { cookies } from "next/headers";
import { IUserAndToken } from "../interfaces/User";

export const dataUserByToken = async (): Promise<{
  user: IUserAndToken | undefined;
  error: string;
  message: string;
  success: boolean;
}> => {
  const nextCookies = cookies();
  const token = nextCookies.get("token")?.value || "";

  /* const response = await fetch("http://localhost:3000/api/auth/me", {
    method: "GET",
    headers: { Cookie: `token=${token}` },
  });
  const data = await response.json(); */
  return { user: undefined, error: "", message: "", success: true };
};

// export const isUserLoged = async () => {
//     try {
//         const nextCookies = cookies(); // Get cookies object
//         const existe = nextCookies.has("token");
//         if (existe) {
//           return true;
//         }
//         return false;
//     } catch (error) {
//         console.log('Error by UserToken')
//     }
// }
