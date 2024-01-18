import Image from 'next/image'
import React from 'react'

export default function Loading(){
  return (
   <main className='absolute w-screen h-screen top-0 bg-white z-80'>
    <section className='absolute top-[380px] left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full z-100'>
     <div className='relative w-full flex justify-center items-center '>
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <Image
            src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
            className='rounded-full h-28 w-28'
            alt='loading...'
            width={100}
            height={100}
            />
      </div>
    </section>
   </main>
  )
}
