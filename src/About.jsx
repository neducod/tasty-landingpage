import { useState } from 'react'
import './App.css'

import AboutImage from './assets/hamburger-french-fries-cheeseburger-chicken-sandwich-veggie-burger-french-fries-cc8702cccfa196ec13aaa2f54cec5173.png'

function AboutSection (){
    return(
        <>
        <div className='flex sm:hidden lg:hidden flex-col gap-6 p-6 justify-center items-center    relative w-ful mb-60'>
            {/* ?\FOR SMALLER SCREEN */}
            <div className='flex flex-col gap-4 font-bold  absolute top-30 left-0 w-full z-10 text-white text-center pt-5'>
                <h2 className='text-3xl'>About Tasty <span className='text-red-600 font-bold italic underline decoration-wavy decoration-orange-400'>Foods</span></h2>
                <div className='flex flex-col gap-4 pb-2'>
                    <p className='text-black'>Explicabo tempore magni a aliquam necessitatibus molestias odio facere. Ipsa, unde animi adipisci, incidunt nam officiis vitae recusandae dolore nisi necessitatibus exercitationem.</p>
                    <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                <div className='flex gap-2 flex-col justify-center pl-8 text-black'>
                    <div className='flex  gap-4 flex-row items-center'>
                        <div className='bg-red-500 text-white w-8 h-8 rounded-t-full rounded-b-full rounded-l-full rounded-r-full text-center flex items-center justify-center'>
                            <p>1</p>
                        </div>
                        <p>Delicious and healthy foods</p>
                    </div>
                    <div className='flex gap-4 flex-row items-center'>
                        <div className='bg-red-500 text-white w-8 h-8 rounded-t-full rounded-b-full rounded-l-full rounded-r-full text-center flex items-center justify-center'> 
                            <p>2</p>
                        </div>
                        <p>Best price and Offers</p>
                    </div>
                    <div className='flex gap-4 flex-row items-center'>
                        <div className='bg-red-500 text-white w-8 h-8 rounded-t-full rounded-b-full rounded-l-full rounded-r-full text-center flex items-center justify-center'>
                            <p>3</p>
                        </div>
                        <p>Made with fresh ingredients</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center gap-4'>
                    <button className='bg-yellow-400 text-center w-30 rounded-2xl h-12 relative text-black text-sm font-semibold'>Order Now</button>
                    <button className='bg-white text-center w-30 rounded-2xl h-12 relative text-black text-sm font-semibold border-black border-2'>Read More</button>
                </div>
                
            </div>

            <div className='blur-[2px]'>
                <img src={AboutImage} alt="" className='w-full h-auto object-cover z-10' />
                {/* <div>background color</div> */}
            </div>

        </div>
        <div className='hidden sm:block'>
            {/* FOR LARGER SCREEN */}
            <div className='sm:flex sm:flex-row sm:gap-10 sm:p-18 sm:justify-center sm:items-center '>
                <div>
                    <img src={AboutImage} alt="" className='w-5xl'/>
                </div>
                <div className='sm:font-bold sm:w-full sm:flex sm:justify-center sm:items-center sm:gap-6 sm:flex-col'>
                    <h2 className='sm:text-3xl'>About Tasty <span className='text-red-600 font-bold italic underline decoration-wavy decoration-orange-400'>Foods</span></h2>
                    <div className='sm:flex sm:flex-col sm:gap-4 sm:pb-6'>
                        <p className='text-black'>Explicabo tempore magni a aliquam necessitatibus molestias odio facere. Ipsa, unde animi adipisci, incidunt nam officiis vitae recusandae dolore nisi necessitatibus exercitationem.</p>
                        <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className='sm:flex sm:flex-col sm:gap-6 sm:justify-between text-black'>
                        <div className='sm:flex sm:flex-row sm:items-center sm:gap-6'>
                            <div className='bg-red-500 text-white w-8 h-8 rounded-t-full rounded-b-full rounded-l-full rounded-r-full text-center flex items-center justify-center'>
                                <p>1</p>
                            </div>
                            <p>Delicious and healthy foods</p>
                        </div>
                        <div className='sm:flex sm:flex-row sm:items-center sm:gap-6'>
                            <div className='bg-red-500 text-white w-8 h-8 rounded-t-full rounded-b-full rounded-l-full rounded-r-full text-center flex items-center justify-center'>
                                <p>2</p>
                            </div>
                            <p>Best price and Offers</p>
                        </div>
                        <div className='flex flex-row items-center gap-6'>
                            <div className='bg-red-500 text-white w-8 h-8 rounded-t-full rounded-b-full rounded-l-full rounded-r-full text-center flex items-center justify-center'>
                                <p>3</p>
                            </div>
                            <p>Made with fresh ingredients</p>
                        </div>
                    </div>
                    <div className='sm:flex sm:flex-row sm:justify-start items-start text-left sm:gap-10'>
                        <button className='bg-yellow-400 text-center w-30 rounded-2xl h-12 relative text-black text-sm font-semibold cursor-pointer'>Order Now</button>
                        <button className='bg-white text-center w-30 rounded-2xl h-12 relative text-black text-sm font-semibold border-black border-2 cursor-pointer'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSection;