import Link from 'next/link'
import React from 'react'

const ValidationEmailPage = () => {
  return (
    <main className='absolute top-[230px] sm:top-[230px]  left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full z-10'>
         <section className='absolute border top-[40px] w-[100%] sm:w-full h-[500px] mx-auto bg-white  flex flex-col justify-start sm:justify-center items-center pt-[60px] sm:pt-0'>
              <div className='bg-BgTop h-[100px] flex flex-col justify-center items-center p-5'>
                <h1 className='text-white text-xl font-bold'>¡Gracias por registrarte!</h1>
                <p className='text-white text-center font-serif'>Hemos enviado un correo electrónico de verificación. Por favor, verifica tu cuenta.</p>
              </div>
              <Link href='/' >
              <button className='bg-BgTop text-white mt-2 w-[140px] h-12 rounded-sm'>Ir al Inicio</button>
              </Link>
         </section>
    </main>
  )
}

export default ValidationEmailPage