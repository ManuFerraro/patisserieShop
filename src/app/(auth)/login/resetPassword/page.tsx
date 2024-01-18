import LoginForm from '@/components/auth/form/LoginForm'
import RegisterForm from '@/components/auth/form/RegisterForm'
import ResetPassword from '@/components/auth/form/ResetPassword'
import React from 'react'

const ResetPasswordPage = ({ searchParams }: {searchParams: { token: string }}) => {
      const { token } = searchParams;
      
  return (
     <main className='absolute top-[240px] sm:top-[267px]  left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full  z-10'>
       <ResetPassword token={token} />
     </main>
  )
}

export default ResetPasswordPage