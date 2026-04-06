import { useState } from 'react'
import './App.css'

import { FaBars } from 'react-icons/fa'; 
import { CiPhone } from "react-icons/ci";


function Navbar(){
    return(
        <>
            <nav className='hidden sm:flex sm:gap-4 sm:flex-col'>
                {/* FOR LARGER SCREEN SIZES */}
                <div className='sm:flex sm:flex-row sm:justify-center sm:items-center sm:p-2 sm:gap-90 sm:pt-4'>
                    <div>
                        <ul className='sm:flex sm:gap-8'>
                            <div className='sm:flex'>
                                <li>Phone:</li>
                                <li className='cursor-pointer'>+124 456 789</li>
                            </div>
                            <div className='sm:flex'>
                                <li>Email:</li>
                                <li className='cursor-pointer'>yoursecret@gmail.com</li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <ul className='sm:flex sm:gap-4'>
                            <li className='cursor-pointer'>About Us</li>
                            <li className='cursor-pointer'>Contact Us</li>
                            <li className='cursor-pointer'>Language</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='sm:flex sm:gap-8 sm:flex-row sm:justify-evenly sm:p-2'>
                    <div>
                        <h1 className='text-3xl font-bold'>Tasty  <br /><span className='text-red-500 italic underline decoration-wavy decoration-orange-300'>FOODS</span></h1>
                    </div>
                    <div>
                        <ul className='sm:flex sm:flex-row sm:gap-6'>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Order Foods</li>
                            <li>Blog</li>
                            <li>Pages</li>
                        </ul>
                    </div>
                    <div className='sm:flex sm:justify-center sm:items-center sm:gap-2'>
                        <div>
                            <CiPhone/>
                            {/* Phone icon */}
                        </div>
                        <div>
                            <h4>Send a message</h4>
                            <p>123 456 789</p>
                        </div>
                    </div>
                    <div>
                        {/* ICON PROBABLY FOR MOBILE APP */}
                    </div>
                    <div>
                        <button className='bg-red-600 text-center w-30 rounded-2xl h-12 relative text-white text-sm font-semibold cursor-pointer'>Order Now</button>
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