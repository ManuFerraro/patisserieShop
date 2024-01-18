import * as z from "zod";

export const registerValidation = z.object({
  username: z
   .string()
   .min(1, { message: "Firstname is required" }),
  email: z
   .string()
   .min(1, { message: "Email is required" })
   .email({
    message: "Must be a valid email",
  }),
    confirmemail: z
    .string()
    .min(1, { message: "Confirm Email is required" })
    .email({
    message: "Must be a valid email",
  }),
    password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
    confirmpassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
     
})

.refine(data => data.email === data.confirmemail, {
    path: ["confirmemail"],
    message: "Emails don't match",
  })
  
.refine(data => data.password === data.confirmpassword, {
  path: ["confirmpassword"],
  message: "Password don't match",
});
