import RegisterForm from '@/components/auth/form/RegisterForm'
import React from 'react'

const RegisterPage = () => {
  return (
     <main className='absolute top-[240px] sm:top-[267px]  left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full  z-10'>
       <RegisterForm />
     </main>
  )
}

export default RegisterPage