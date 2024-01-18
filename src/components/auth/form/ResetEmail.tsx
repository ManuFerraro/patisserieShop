'use client'
import { resetPasswordWithEmail } from '@/lib/actions/resetEmail.action'
import { resetEmailValidation } from '@/lib/validations/ResetEmailValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const ResetEmail: FC = () => {
    
const [isShow, setIsShow] = useState<boolean>(false)
const [isShowError, setisShowError] = useState<string>('')
const { register, handleSubmit, formState: { errors }, } = useForm<z.infer<typeof resetEmailValidation>>({
   resolver: zodResolver(resetEmailValidation),
   defaultValues: {
     email: ''
   },
});

const onSubmit = async(values: z.infer<typeof resetEmailValidation>) => {
      try {
        const enviarEmailResponse = await resetPasswordWithEmail(values.email)
        if(enviarEmailResponse) {
          setisShowError(enviarEmailResponse)
          setIsShow(true)
        }
        return enviarEmailResponse;
      } catch (error) {
        console.log(error)
      }
}




  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      { !isShow ?
        <div className='flex w-[90%] sm:w-[50%] mx-auto h-[170px] sm:h-[150px] flex-col justify-around items-center mt-[150px]'>
            <p className='text-gold font-bold text-sm text-center'>Ingrese el Email del que desea recuperar su contraseña</p>
            <input type="email"
            placeholder="Email"
            className='w-[360px] sm:w-[400px] outline-none  focus:border-gold focus:ring-0 rounded-md'
            {...register('email')}
            />
            <button
            className='w-[100px] h-[40px] bg-gold text-white font-bold rounded-sm'
            type='submit'
            >Enviar</button>
        </div>
      :
        <div className='flex w-[90%] sm:w-[50%] mx-auto h-[170px] sm:h-[150px] flex-col justify-around items-center mt-[150px]'>
                <p className='text-gold font-bold text-sm text-center'>{isShowError}</p>
                <button
                className='w-[140px] h-[40px] bg-gold text-white font-bold rounded-sm'
                type='submit'
                onClick={() => setIsShow(false)}
                >Volver a intentar</button>
        </div>
      }
      </form>
  )
}

export default ResetEmail