import { useState } from 'react'
import './App.css'

function PromoSection(){
    return(
        <>
            <section className='flex flex-col gap-10 p-6'>
                {/* SMALLER SCREENS */}
                    <div className='bg-red-500'>
                        <div className='p-4'>
                            <h2 className='text-white font-bold text-3xl italic'>Pasta</h2>
                            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur</p>
                            <p className='text-white p-2 font-bold'>$10.90</p>
                        </div>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className='bg-blue-950'>
                        <div className='p-4'>
                            <h2 className='text-white font-bold text-3xl italic'>Burger</h2>
                            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur</p>
                            <p className='text-white p-2 font-bold'>$12.90</p>
                        </div>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className='bg-yellow-300'>
                        <div className='p-4'>
                            <h2 className='text-white font-bold text-3xl italic'>Combo</h2>
                            <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p className='text-white text-sm'>Lorem, ipsum dolor sit amet consectetur</p>
                            <p className='text-white p-2 font-bold'>$19.90</p>
                        </div>
                        {/* <img src="" alt="" /> */}
                    </div>
            </section>
            <section className='hidden sm:block'>
                {/* LARGER SCREEN */}
                <div className='flex flex-row '>
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