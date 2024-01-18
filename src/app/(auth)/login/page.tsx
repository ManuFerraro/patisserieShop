import LoginForm from '@/components/auth/form/LoginForm'
import React from 'react'

const LoginPage = async() => {




  return (
     <main className='absolute top-[240px] sm:top-[267px]  left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full  z-10'>
       <LoginForm />
     </main>
  )
}

export default LoginPage