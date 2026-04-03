import { useState } from 'react'
import './App.css'

import ThirdImage from './assets/thirdfood.jpeg'
import FourthImage from './assets/fourthfood.jpeg'
import FifthImage from './assets/Haitian Spaghetti.jpeg'


function FoodNews (){
    return(
        <>
        <section className='flex justify-center items-center flex-col p-6 gap-6 mb-10 mt-10'>
            <div className='flex justify-center items-center flex-col'>
                <h2 className='font-bold text-3xl text-center'>Our Lastest Food <span className='text-red-500 font-bold italic underline decoration-wavy decoration-orange-300 pt-5 pb-5'>News</span></h2>
                <p className='text-center p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus odio dignissimos quae dicta quos porro autem, pariatur error nesciunt consectetur,</p>
            </div>

            <div className='flex justify-center items-center flex-col gap-12'>
                <div className='bg-white border-black border-2 rounded-2xl p-6 shadow-2xl'>
                    <p>Image</p>
                    <div className='flex flex-col gap-2'>
                        <h4>Lorem ipsum dolor sit amet,?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reiciendis!</p>
                        <a href="#" className='p-2 text-red-600 underline font-bold text-sx'>Read More</a>
                    </div>
                </div>
                <div className='bg-white border-black border-2  rounded-2xl p-6 shadow-2xl'>
                    <p>Image</p>
                    <div className='flex flex-col gap-2'>
                        <h4>Lorem ipsum dolor sit amet,?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reiciendis!</p>
                        <a href="#" className='p-2 text-red-600 underline font-bold text-sx'>Read More</a>
                    </div>
                </div>
                <div className='bg-white border-black border-2  rounded-2xl p-6 shadow-2xl'>
                    <p>Image</p>
                    <div className='flex flex-col gap-2'>
                        <h4>Lorem ipsum dolor sit amet,?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reiciendis!</p>
                        <a href="#" className='p-2 text-red-600 underline font-bold text-sx'>Read More</a>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}


export default FoodNews;