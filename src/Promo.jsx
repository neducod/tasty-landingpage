import { useState } from 'react'
import './App.css'

import PromoImg from './assets/burger.jpeg'
import PromoSecondimg from './assets/Cheeseburger & Pepsi.jpeg'
import PromothirdImg from './assets/Creamy Cajun Sausage Pasta (One Pot).jpeg'
function PromoSection(){
    return(
        <>
            <section className='flex flex-col sm:flex-row gap-10 sm:gap-0 sm:justify-center sm:items-center p-6 sm:p-26'>
                {/* SMALLER SCREENS */}
                    <div className='bg-red-500 sm:flex sm:flex-row sm:gap-2'>
                        <div className='p-4'>
                            <h2 className='text-white font-bold text-3xl italic'>Pasta</h2>
                            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur</p>
                            <p className='text-white p-2 font-bold'>$10.90</p>
                        </div>
                        <img src={PromothirdImg} alt=""  className='w-10'/>
                    </div>
                    <div className='bg-blue-950 sm:flex sm:flex-row sm:gap-2'>
                        <div className='p-4'>
                            <h2 className='text-white font-bold text-3xl italic'>Burger</h2>
                            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur</p>
                            <p className='text-white p-2 font-bold'>$12.90</p>
                        </div>
                        <img src={PromoImg} alt="" className='w-10'/>
                    </div>
                    <div className='bg-yellow-300 sm:flex sm:flex-row sm:gap-2'>
                        <div className='p-4'>
                            <h2 className='text-white font-bold text-3xl italic'>Combo</h2>
                            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur</p>
                            <p className='text-white p-2 font-bold'>$19.90</p>
                        </div>
                        <img src={PromoSecondimg} alt="" className='w-10' />
                    </div>
            </section>

            <section className='hidden'>
                {/* LARGER SCREEN */}
                <div className='flex flex-row '>
                    <div>
                        <div>
                            <h2>PAsta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                            <p>price</p>
                        </div>
                        <img src={PromoImg} alt="" />
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div>
                        <div>
                            <h2>PAsta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                            <p>price</p>
                        </div>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div>
                        <div>
                            <h2>PAsta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                            <p>price</p>
                        </div>
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PromoSection;