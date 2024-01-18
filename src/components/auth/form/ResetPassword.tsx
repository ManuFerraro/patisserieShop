'use client'
import { resetPasswordWithEmail } from '@/lib/actions/resetEmail.action'
import { resetPasswordValidation } from '@/lib/validations/ResetPasswordValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


interface Params {
    token: string;
}


const ResetPassword = ( { token }:Params) => {
    
const [isShow, setIsShow] = useState<boolean>(false)
const [isShowMessage, setisShowMessage] = useState<string>('')
const { register, handleSubmit, formState: { errors }, } = useForm<z.infer<typeof resetPasswordValidation>>({
   resolver: zodResolver(resetPasswordValidation),
   defaultValues: {
     password: '',
     confirmpassword: '',
   },
});

const onSubmit = async(values: z.infer<typeof resetPasswordValidation>) => {
    try {
        const resetPasswordResponse = await fetch('/api/auth/resetPassword', {
            method: 'POST',
            body: JSON.stringify({password: values.password, token: token}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await resetPasswordResponse.json()
    
        if(response.success) {
          setIsShow(true)
          setisShowMessage(response.message)
        } else {
          setisShowMessage(response.error)
        }
        
        
    } catch (error) {
        
    }


}


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      { !isShow ?
        <div className='flex w-[88%]  sm:w-[50%] mx-auto h-[220px] sm:h-[200px] flex-col justify-around items-center mt-[150px]'>
            <p className='text-gold font-bold text-sm text-center'>Ingrese su nueva contraseña</p>
            <input type="password"
            placeholder="Ingrese su nueva contraseña"
            className='w-[340px] sm:w-[400px] h-[40px] sm:h-[43px] outline-none  focus:border-gold focus:ring-0 rounded-md'
            {...register('password')}
            />
             <input type="password"
            placeholder="Confirmar contraseña"
            className='w-[340px] sm:w-[400px] h-[40px] sm:h-[43px] outline-none  focus:border-gold focus:ring-0 rounded-md sm:mt-1'
            {...register('confirmpassword')}
            />
            <button
            className='w-[100px] h-[40px] bg-gold text-white font-bold rounded-sm'
            type='submit'
            >Enviar</button>
        </div>
      :
        <div className='flex w-[90%] sm:w-[50%] mx-auto h-[170px] sm:h-[150px] flex-col justify-around items-center mt-[150px]'>
                <p className='text-gold font-bold text-sm text-center'>{isShowMessage}</p>
                <Link href='/login'>
                <button
                className='w-[140px] h-[40px] bg-gold text-white font-bold rounded-sm'
                type='submit'
                onClick={() => setIsShow(false)}
                >REGRESAR</button>
                </Link>
        </div>
      }
      </form>
  )
}

export default ResetPassword