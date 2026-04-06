import { useState } from 'react'
import './App.css'

import { PiHamburgerBold } from "react-icons/pi";
import { GiFrenchFries } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { LuSandwich } from "react-icons/lu";

function Header(){
    return(
        <>
            <section className='bg-gray-100 flex flex-row gap-4 justify-center items-center relative max-w-6xl mx-auto px-4 py-8 sm:hidden'>
                {/* aSMALLER SCREEN */}
                <div className='flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-6'>
                    <div className='overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:scale-[1.02]' >
                        <PiHamburgerBold />
                        <p>Hamburger</p>
                    </div>
                    <div className='overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:scale-[1.02]'>
                        <GiFrenchFries />
                        <p>French fries</p>
                    </div>
                    <div className='overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:scale-[1.02]'>
                        <GiFullPizza />
                        <p>Pizza</p>
                    </div>
                    <div className='overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:scale-[1.02]'>
                        <GiSlicedBread />
                        <p>Bread</p>
                    </div>
                    <div className='overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:scale-[1.02]'>
                        <RiDrinks2Fill />
                        <p>Drinks</p>
                    </div>
                    <div className='overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:scale-[1.02]'>
                        <LuSandwich />
                        <p>Sandwish</p>
                    </div>
                </div>
            </section>
            <section className='hidden bg-gray-100 sm:flex flex-row gap-4 justify-center items-center relative  px-4 py-8'>
                {/* larger screen   max-w-6xl mx-auto*/}
                <div className='sm:flex sm:gap-10 sm:justify-center sm:items-center'>
                    <div className='sm:flex sm:justify-center sm:items-center sm:flex-col'>
                        <PiHamburgerBold />
                        <p className='text-center'>Hamburger</p>
                    </div>
                    <div className='sm:flex sm:justify-center sm:items-center sm:flex-col'>
                        <GiFrenchFries />
                        <p>French fries</p>
                    </div>
                    <div className='sm:flex sm:justify-center sm:items-center sm:flex-col'>
                        <GiFullPizza />
                        <p>Pizza</p>
                    </div>
                    <div className='sm:flex sm:justify-center sm:items-center sm:flex-col'>
                        <GiSlicedBread />
                        <p>Bread</p>
                    </div>
                    <div className='sm:flex sm:justify-center sm:items-center sm:flex-col'>
                        <RiDrinks2Fill />
                        <p>Drinks</p>
                    </div>
                    <div className='sm:flex sm:justify-center sm:items-center sm:flex-col'>
                        <LuSandwich />
                        <p>Sandwish</p>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Header;