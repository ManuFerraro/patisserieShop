import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
     <section className='w-full h-[400px] bg-black bg-opacity-40'>
       <Image 
       src='/assets/encabezado-tienda-ok.jpg'
       alt='Encabezado'
       width={1000}
       height={300}
       className='w-full h-[400px] object-cover bg-black bg-opacity-40'
       />
       <div className='absolute top-[35px] w-full h-[400px] bg-black bg-opacity-40'>

       </div>
     </section>
  )
}

export default page