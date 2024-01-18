"use client";


import { LeftMenuContext } from "@/app/Context/menuLeft";
import { IUserAndToken } from "@/lib/interfaces/User";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";



interface MenuItems {
  item: string,
  link: string,
}

const LeftMenuAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const { state: { toggleMenu }, dispatch } =useContext(LeftMenuContext)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);

  useEffect(() => {
    isOpenMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpenMenu]);

  const menuItemsOn = [
    {
      item: 'Mi Perfil',
      link: '/'
    },
    {
      item: 'Mis compras',
      link: '/'
    },
    {
      item: 'Tienda',
      link: '/'
    },
    {
      item: 'Quienes somos',
      link: '/'
    },
    {
      item: 'Contacto',
      link: '/'
    },
    
  ]
  const menuItemsOff = [
    {
      item: 'Tienda',
      link: '/'
    },
    {
      item: 'Quienes somos',
      link: '/'
    },
    {
      item: 'Contacto',
      link: '/'
    },
    
  ]
  


  const handleLogOut = async()=> {
      const sessionOut = await fetch('/api/auth/logout')
                                .then(res => res.json() as Promise<{
                                  success: boolean, message: string, error: string
                                }>)
      if(sessionOut.success) {
          dispatch({type: 'CLOSE'})
          router.refresh()
      } else {
        return console.log('Ups! Algo salió mal!')
      }
  };

  const handleSesion = () => {
      dispatch({ type: 'CLOSE' });
  };

  return (

   <>

     <main className={`fixed w-screen  inset-y-0  left-0  bg-blurMenu bg-opacity-20 blur-sm   z-80 transform ${
      toggleMenu ? 'translate-x-0' : '-translate-x-full'
    }`}

    >
    </main>
      <nav className={`fixed w-screen sm:w-[320px] h-screen flex flex-col top-0 left-0 justify-between bg-white z-100 transform ${ toggleMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-800 ease-in-out`}
      style={{transition: 'transform 0.6s ease-in-out' }}
      >
        <div className="h-[270px] w-screen sm:w-[100%] mx-auto flex justify-center items-start">
          <div className="h-56 w-72 absolute flex justify-center items-center">
            <Image
              alt="Avatar"
              src="/assets/avatarPerfil.jpg"
              width={100}
              height={100}
              className="object-cover h-20 w-20 rounded-full"
            />
          </div>

          <div
            className="
          h-56
          w-screen
          bg-BgTop
          
          sm:rounded-none
          
          sm:w-80 sm:mx-0
        "
          >
            <div className="h-1/2 w-full flex justify-between items-start px-3 py-4 ">
              <h1 className="text-white "></h1>
              <IoIosCloseCircleOutline className="w-6 h-6 text-white cursor-pointer z-10" onClick={() => dispatch({type: 'CLOSE'})}/>
            </div>

            <div
              className="
            bg-white
            h-1/2
            w-full
            rounded-t-3xl
            flex flex-col
            justify-around
            items-center
            
          "
            >
          
              <div className="w-full h-1/2 flex flex-col justify-center items-center z-20 pt-2">
                <Link href='/login'>
                  <h1 className="text-gray-700 font-bold cursor-pointer  underline" onClick={handleSesion}>Iniciar Sesión</h1>
                </Link>
              </div>

              
            </div>
          </div>
        </div>
        {/* SECOND COL */}
        <div className="w-full h-full flex flex-col pt-10 sm:pt-5">
            <div className="w-full h-5/6 flex justify-center items-center">
                <div className='w-[150px]  h-[280px]  grid grid-col-1'>
                  {
                  
                    menuItemsOff.map((items: MenuItems) => (
                      <div key={items.item} className="w-full h-[50px]  flex justify-center items-center">
                        <p className="text-[15px] font-bold cursor-pointer">{items.item}</p>
                      </div>
                    ))
                  }                    
                </div>
            </div>
            <div className="w-full h-1/6  flex justify-center items-center">
                <p className='text-[14px] text-blue-500  hidden cursor-pointer' onClick={handleLogOut}>Cerrar sesión</p>
            </div>
        </div>
        <div className="w-full h-[350px] ">
            <div  className="w-full h-full flex justify-center items-center bg-BgTop">
                <p className="w-[100px] text-center font-bold text-white">TERESA BARBERENA</p>
            </div>
        </div>
      </nav>
      </>
     
  );
};

export default LeftMenuAuth
