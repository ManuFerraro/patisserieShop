"use client";

import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginValidation } from "@/lib/validations/LoginValidations";
import Link from "next/link";

interface ILoginForm {
  key: string;
  isActive: boolean;
  type: string;
  nameValues:

    | "email"
 
    | "password"

}

const LoginForm: FC = () => {
  
  const router = useRouter()
  const [focusState, setFocusState] = useState<ILoginForm[]>([
    {
      isActive: false,
      key: "Email",
      type: "email",
      nameValues: "email",
    },
    {
      isActive: false,
      key: "Password",
      type: "password",
      nameValues: "password",
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
  } = useForm<z.infer<typeof loginValidation>>({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [showError, setShowError] = useState<string>('')
  
  const onSubmit = async (values: z.infer<typeof loginValidation>) => {
      try {
        const registerResponse = await fetch('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const registerData = await registerResponse.json();
        if (registerData.error) {
          return setShowError(registerData.error)
        }
        if(registerData.message) {
          return router.push('/');
        }
        
      } catch (error: any) {
        console.log("Signup failed", error.message)
      }
  };

  return (
    <main className="max-w-screen-md h-[600px] sm:h-[400px] mx-auto flex flex-col bg-white bg-opacity-10 overflow-y-hidden">
      <div className="flex justify-center items-center font-semibold text-xl sm:text-2xl text-gold">
       { showError === '' ?  <h1 className="pr-2">LOGIN</h1> : <h1 className="pr-2">{showError}</h1>  }
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 sm:mt-10">
        <section className="w-full h-[230px] mt-5 flex-col ">
          {focusState?.map((fieldName: ILoginForm, index) => {
            return (
              <div
                key={fieldName.key}
                className='flex flex-col w-[50%] h-[70px] mx-auto items-center justify-center mt-5'
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
                  className={`text-xs p-2  rounded-md w-[300px] sm:w-full h-[35px] sm:h-[40px] border border-gray-400 outline-none  focus:border-gold focus:ring-0`}
                  {...register(fieldName.nameValues)}
                  onFocus={() =>
                    handleFocusChange(fieldName.key as keyof ILoginForm)
                  }
                  onBlur={() => handleBlur(fieldName.key as keyof ILoginForm)}
                />
                
                {errors[fieldName.nameValues] && (
                  <span className="text-red-600 text-xs pt-1 pb-5">
                    (*){errors[fieldName.nameValues]!.message}
                  </span>
                )}
               
               
              </div>
              
            );
          })}
            <div className="w-[50%] mx-auto text-center">
              <Link href='/login/resetPassword/resetEmail'>
                <p className="text-sm text-black font-bold cursor-pointer underline">¿Olvidaste tu contraseña?</p>
              </Link>
            </div>
        </section>
        
        <div className="flex justify-center items-center mt-4 sm:mt-0">
          <button
            className="bg-BgTop text-white rounded-lg w-[200px] h-[50px] text-xl font-semibold hover:bg-gold hover: transition-all duration-500 delay-50 "
            type="submit"
            onClick={() => console.log("entro")}
          >
            INICIAR SECCIÓN
          </button>
        </div>
      </form>
    </main>
  );
};

export default LoginForm;