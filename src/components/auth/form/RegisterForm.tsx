"use client";

import { registerValidation } from "@/lib/validations/RegisterValidation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CustomAlertAuth from "../customs/AlertAuth";

interface FormI {
  key: string;
  isActive: boolean;
  type: string;
  nameValues:
    | "username"
    | "email"
    | "confirmemail"
    | "password"
    | "confirmpassword";
}

const RegisterForm = () => {
  const router = useRouter()
  const [focusState, setFocusState] = useState<FormI[]>([
    {
      isActive: false,
      key: "Username",
      type: "text",
      nameValues: "username",
    },
    {
      isActive: false,
      key: "Email",
      type: "email",
      nameValues: "email",
    },
    {
      isActive: false,
      key: "Confirm Email",
      type: "email",
      nameValues: "confirmemail",
    },
    {
      isActive: false,
      key: "Password",
      type: "password",
      nameValues: "password",
    },
    {
      isActive: false,
      key: "Confirm Password",
      type: "password",
      nameValues: "confirmpassword",
    },
  ]);

  const handleFocusChange = (fieldName: string) => {
    setFocusState((prevFocusState) =>
      prevFocusState.map((field) =>
        field.key === fieldName
          ? { ...field, isActive: true }
          : { ...field, isActive: false }
      )
    );
  };

  const handleBlur = (fieldName: string) => {
    setFocusState((prevFocusState) =>
      prevFocusState.map((field) =>
        field.key === fieldName ? { ...field, isActive: false } : { ...field }
      )
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerValidation>>({
    resolver: zodResolver(registerValidation),
    defaultValues: {
      username: "",
      email: "",
      confirmemail: "",
      password: "",
      confirmpassword: "",
    },
  });
  const [showError, setShowError] = useState<string>('')
  
  const onSubmit = async (values: z.infer<typeof registerValidation>) => {
      try {
        const registerResponse = await fetch('/api/auth/signup', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const registerData = await registerResponse.json() as { message: string, error: string}
        console.log('USER CREADO', registerData.message)
        if (registerData.error) {
          return setShowError(registerData.error)
        }
        if(registerData.message) {
          return router.push('/register/validation')
           
        }
         
      } catch (error: any) {
        console.log("Signup failed", error.message)
      }
  };

  return (
    <main className="max-w-screen-md h-[600px] sm:h-[500px] mx-auto flex flex-col bg-white bg-opacity-10">
      <div className="flex justify-center items-center font-semibold text-2xl text-gold">
       { showError === '' ?  <h1 className="pr-2">REGISTER</h1> : <h1 className="pr-2">{showError}</h1>  }
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-5 sm:pt-0">
        <section className="w-full h-[400px] mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 ">
          {focusState?.map((fieldName: FormI, index) => {
            return (
              <div
                key={fieldName.key}
                className={`flex flex-col items-center  ${
                  index !== 0 && fieldName.key === 'Username' && "sm:items-baseline"
                } ${
                  index === 0
                    ? "sm:col-span-2 sm:justify-center sm:col-end-3"
                    : "sm:col-span-1"
                }  `}
              >
                <p
                  className={`text-xs pl-2 font-bold ${
                    fieldName.isActive ? "text-gold" : "text-gray-500"
                  }`}
                  style={{
                    transform: fieldName.isActive
                      ? "translateY(-20%)"
                      : "translateY(0%)",
                    transition: "transform 3s ease-out",
                  }}
                >
                  {fieldName.key}
                </p>
                <input
                  type={fieldName.type}
                  placeholder={fieldName.key}
                  className={`text-xs p-2  rounded-md w-[300px] sm:w-full ${
                    index === 0 && "sm:w-[349px]"
                  } h-[35px] sm:h-[40px] border border-gray-400 outline-none  focus:border-gold focus:ring-0`}
                  {...register(fieldName.nameValues)}
                  onFocus={() =>
                    handleFocusChange(fieldName.key as keyof FormI)
                  }
                  onBlur={() => handleBlur(fieldName.key as keyof FormI)}
                />
                
                {errors[fieldName.nameValues] && (
                  <span className="text-red-600 text-xs pt-1">
                    (*){errors[fieldName.nameValues]!.message}
                  </span>
                )}
               
               
              </div>
            );
          })}
        </section>
        <div className="flex justify-center items-center mt-9 sm:mt-0">
          <button
            className="bg-BgTop text-white rounded-lg w-[200px] h-[50px] text-xl font-semibold hover:bg-gold hover: transition-all duration-500 delay-50 "
            type="submit"
            onClick={() => console.log("entro")}
          >
            REGISTRARME
          </button>
        </div>
      </form>
    </main>
  );
};

export default RegisterForm;
