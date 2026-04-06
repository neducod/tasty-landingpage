import { useState } from 'react'
import './App.css'


import HeroImage from './assets/hamburger-veggie-burger-fast-food-chicken-sandwich-burger-png-transparent-images-65e3cdfb7ab9f99453dd73a05e4c21e9.png'

function HeroSection(){
    return(
        <>
            <section className='flex sm:hidden lg:hidden flex-col gap-6 p-6 justify-center items-center    relative w-full'>
                <div className='flex flex-col gap-4 font-bold  absolute top-30 left-0 w-full z-10 text-white text-center pt-5'>
                    <h1 className='text-3xl'>Welcome to <br /> our Tasty <span className='text-red-600 font-bold italic underline decoration-wavy decoration-orange-300'>Foods</span></h1>
                    <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima laborum veritatis atque placeat ducimus. Nulla incidunt, est</p>
                    <div className='flex flex-row justify-center gap-4'>
                        <button className='bg-red-600 text-center w-30 rounded-2xl h-12 relative text-white text-sm font-semibold'>Order Now</button>
                        <button className='bg-white text-center w-30 rounded-2xl h-12 relative text-black text-sm font-semibold border-black border-2'>Book a Table</button>
                    </div>
                </div>
                <div className='blur-[2px]'>
                    <img src={HeroImage} alt="hero-image" className='w-full h-auto object-cover z-10' />
                </div>
            </section>

            <section className='hidden sm:flex sm:flex-row sm:p-2 sm:justify-center sm:items-center'>
                <div className='sm:flex sm:flex-col sm:gap-4'>
                    <h1 className=' text-left text-3xl font-bold'>Welcome To <br /> Our Tasty <span className='text-red-600 font-bold italic underline decoration-wavy decoration-orange-300'>Foods</span></h1>
                    <p className='w-140'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima laborum veritatis atque placeat ducimus. Nulla incidunt, est perferendis quidem eius fugit facil Lorem ipsum dolor sit amet consectetur </p>
                    <div className='flex flex-row  gap-4'>
                        <button className='bg-white text-center w-30 rounded-2xl h-12 relative text-black text-sm font-semibold border-black border-2 cursor-pointer'>Order Now</button>
                        <button className='bg-red-600 text-center w-30 rounded-2xl h-12 relative text-white text-sm font-semibold cursor-pointer'>Book a Table</button>
                    </div>
                </div>
                {/* 
                className='cursor-pointer'
                */}
                <div>
                    <img src={HeroImage} alt="hero-image" className='w-140' />   
                </div>
            </section>
        </>
    )
}


export default HeroSection