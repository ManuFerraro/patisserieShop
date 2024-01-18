import Image from 'next/image'
import React from 'react'

const BannerAuth = () => {
  return (
    <main className='w-screen sm:w-full  z-0 overflow-hidden hidden sm:block'>
      <div className='w-full h-[500px] '>
        <Image 
        src='/assets/BackgroundCake.jpg'
        alt='BackgroudCake'
        width={1000}
        height={500}
        className='w-full h-[700px] object-cover opacity-50'
        />
      </div>
    </main>
  )
}

export default BannerAuth