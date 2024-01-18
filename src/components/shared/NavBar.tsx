'use client'
import { LeftMenuContext } from "@/app/Context/menuLeft";
import { useContext, useEffect, useState } from "react"
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";




const NavBar = () => {

  const [isShow, setIsShow] = useState(false)
  const { state: { toggleMenu }, dispatch } =useContext(LeftMenuContext)
  
  
  const handleScroll = () => {
    if(window.scrollY > 900) {
      setIsShow(true)
    } else if (window.scrollY == 0) {
      setIsShow(false)
    }
  };
  
  const handleDispatch = () => {
       dispatch({type: 'OPEN'})
  }
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` w-full z-50 h-[200px]  ${ isShow ? 'fixed top-0 bg-white' : 'absolute '}`} 
    style={{ transform: isShow ? 'translateY(-10%)' : 'translateY(0%)',
    transition: 'transform 3s ease-out'}}>
    <div className='mx-auto max-w-screen-xl w-full'>
     <section className='h-full flex justify-between mt-8 '>
        <div className='w-1/5 flex justify-center pr-3 sm:pr-0'>
           <button className={`text-3xl w-full h-full flex justify-center sm:justify-end items-start pt-5 ${ isShow ? 'text-black' : 'text-white'}`} onClick={handleDispatch}><IoMenu /></button>
        </div>
        <div className='w-3/5 flex flex-col justify-start items-center gap-2'>
          <div className=' w-[300px] text-center'>
             <h1 className={`text-4xl font-bold cursor-pointer ${isShow ? 'text-black' : 'text-white'}`}>TERESA BARBERENA</h1>
          </div>
          <div className=' w-[500px] h-[50px] hidden sm:flex justify-center mt-4'>
              <ul className={`w-full flex text-sm justify-around ${ isShow ? 'text-black' : 'text-white'}`}>
                <li className="cursor-pointer">Tienda</li>
                <li className="cursor-pointer">Quiénes somos</li>
                <li className="cursor-pointer">Contacto</li>
              </ul>
          </div>
        </div>
        <div className='w-1/5 flex pl-7 sm:pl-0 sm:ml-0 pt-5'>
           <div className="w-[45px] h-full hidden sm:flex justify-start items-start ">
              <button className={`text-2xl  ${ isShow ? 'text-black' : 'text-white'}`}><FaUser /></button>
           </div>
           <div className="w-full h-full pt-[2px] pl-2 sm:pl-0 sm:pt-[1px]">
              <button className={`text-2xl   ${ isShow ? 'text-black' : 'text-white'}`}><IoBag /></button>
           </div>
        </div>
     </section>
    </div>
    </nav>
  )
}

export default NavBar