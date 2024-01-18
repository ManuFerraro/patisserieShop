
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const NavBarAuth = () => {
  return (
    <nav className='w-full  z-50 h-[200px]'>
    <div className='mx-auto max-w-screen-xl w-full '>
     <section className='h-full flex justify-between mt-8'>
        <div className='w-1/6  pt-5  sm:pt-5 text-center'>
           <button className='text-3xl text-black'><IoMenu /></button>
        </div>
        <div className='w-4/6 flex flex-col justify-start items-center gap-2'>
          <div className=' w-[300px] text-center'>
             <h1 className='text-4xl font-bold cursor-pointer text-black'>TERESA BARBERENA</h1>
          </div>
          <div className=' w-[500px] h-[50px] hidden sm:flex justify-center mt-4'>
              <ul className='w-full flex text-sm justify-around text-black'>
                <li className="cursor-pointer">Tienda</li>
                <li className="cursor-pointer">Quiénes somos</li>
                <li className="cursor-pointer">Contacto</li>
              </ul>
          </div>
        </div>
        <div className='w-1/6 flex justify-left ml-4 sm:ml-0 sm:justify-left pt-6'>
           <div className="hidden px-2 sm:px-3 sm:block">
              <button className='text-xl text-black'><FaUser /></button>
           </div>
           <div>
              <button className='text-xl text-black'><IoBag /></button>
           </div>
        </div>
     </section>
    </div>
    </nav>
  )
}

export default NavBarAuth