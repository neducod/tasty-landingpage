import { useState } from 'react'
import './App.css'

import { FaBars } from 'react-icons/fa'; 


function Navbar(){
    return(
        <>
            <nav className='hidden sm:flex sm:gap-6 sm:flex-col'>
                {/* FOR LARGER SCREEN SIZES */}
                <div className='sm:flex gap-10'>
                    <div>
                        <ul className='sm:flex sm:gap-2'>
                            <li>dhdhd</li>
                            <li>nhhd</li>
                            <li>jdjd</li>
                            <li>kdkd</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='sm:flex sm:gap-2'>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Language</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <h1>Tasty <span>FOODS</span></h1>
                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Order Foods</li>
                            <li>Blog</li>
                            <li>Pages</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            {/* Phone icon */}
                        </div>
                        <h4>Send a message</h4>
                        <p>123 456 789</p>
                    </div>
                    <div>
                        {/* ICON PROBABLY FOR MOBILE APP */}
                    </div>
                    <div>
                        <button>Order Now</button>
                    </div>
                </div>
            </nav>
            <nav className='bg-gray-200 p-6 flex justify-center items-center sm:hidden gap-10'>
                {/* FOR SMALLER SCREEN SIZES */}
                <div>
                    <h1 className='text-red-600 font-semibold text-xl'>Tasty <span className='text-black font-semibold text-xl'>FOODS</span></h1>
                </div>
                <div className='flex flex-row'>
                    <button className='bg-red-600 text-center w-30 rounded-2xl h-12 relative text-white text-sm font-semibold' type="button">Order Now</button>
                </div>
                <FaBars className='w-28 h-8' />

            </nav>
        
        </>
    )
}


export default Navbar;