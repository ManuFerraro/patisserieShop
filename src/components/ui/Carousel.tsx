'use client'
import Image from "next/image"
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Carousel = () => {

  interface SeedCarousel {
    product: string,
    image: string,
    title: string,
    subTitle: string,
    button: string
  }

  // const slides = [
  //   '/assets/eclairs-photo.jpg',
  //   '/assets/buddin-photo.jpg',
  //   '/assets/muphin-photo.jpg',
  // ]

 const slides: SeedCarousel[] = [
  {
    product: 'eclairs',
    image: '/assets/eclairs-photo.jpg',
    title: 'NUEVOS ECLAIRS!',
    subTitle: 'Sabores INCREÍBLES a tu mesa!',
    button: 'VER MÁS',
  },
  {
    product: 'budines',
    image: '/assets/buddin-photo.jpg',
    title: 'Budines!',
    subTitle: 'Sabores INCREÍBLES a tu mesa!',
    button: 'VER MÁS',
  },
  {
    product: 'muphins',
    image: '/assets/muphin-photo.jpg',
    title: 'Muphins!',
    subTitle: 'Sabores INCREÍBLES a tu mesa!',
    button: 'VER MÁS',
  },
 ]

  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if(current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  }

  const nextSlide = () => {
    if(current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }

  return (
    <section className='w-screen'>
      <div className="relative overflow-hidden">
        <div className={`w-[300vw]  flex transition-transform ease-out duration-400`}
        style={{
            transform: `translateX(-${current * 33.3}%)`,
            transition: 'transform 0.8s ease-out'
        }}
        >
                {
                slides.map((slide) => (
                    <Image
                    src={slide.image}
                    alt="Slide"
                    key={slide.title}
                    className="h-[800px] w-screen lg:h-[900px] object-cover"
                    width={2400}
                    height={300}
                    />
                ))
                }
        </div>
        
        <div className="absolute top-12 sm:top-0  w-full h-full flex justify-center items-center">
           {
             slides.map((slide, i) => (
             i === current &&
              <div className="w-[300px] sm:w-[450px] h-[250px] pt-5 flex flex-col  z-10" key={slide.title}>
              <h1 className="text-center text-3xl sm:text-5xl text-white font-bold">{slide.title}</h1>
              <p className="text-center pt-4 text-white text-sm sm:text-2xl">{slide.subTitle}</p>
              <div className="flex justify-center items-center mt-6">
              <button className="w-[100px] h-[35px] sm:w-[140px] sm:h-[50px] text-lg  sm:text-xl bg-BgTop rounded-3xl text-center text-white">VER MÁS</button>
              </div>
           </div>
             ))
           }     
        </div>
        <div className="absolute top-0 w-full h-full justify-between items-center flex text-yellow-400 bg-black bg-opacity-40 pl-2 pr-2 sm:pr-10 sm:px-10 text-3xl sm:text-5xl">
            <button
            onClick={previousSlide}
            >
                <FaArrowCircleLeft />
            </button>
            <button
            onClick={nextSlide}
            >
                <FaArrowCircleRight />
            </button>
        </div>
        <div className="absolute w-full bottom-0 py-8 flex gap-5 justify-center items-center">
            {
                slides.map((s, i) => (
                    <div 
                    onClick={() => {
                        setCurrent(i);
                    }}
                    key={'circle' + i} className={`rounded-full w-4 h-4 cursor-pointer ${
                        i == current ? 'bg-gold' : 'bg-white' 
                    } `}></div>
                ))
            }
          
        </div>
      </div>
    </section>

  )
}

export default Carousel