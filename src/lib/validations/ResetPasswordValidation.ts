import * as z from "zod";

export const resetPasswordValidation = z.object({
 
    password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
    confirmpassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
     
})


.refine(data => data.password === data.confirmpassword, {
  path: ["confirmpassword"],
  message: "Password don't match",
});
