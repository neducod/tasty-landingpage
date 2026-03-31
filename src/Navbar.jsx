import { useState } from 'react'
import './App.css'


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
            <nav>
                {/* FOR SMALLER SCREEN SIZES */}
                <div>
                    <h1>Tasty <span>FOODS</span></h1>
                </div>
                <div>
                    {/* HAMBURGER ICON */}
                </div>
                <div>
                    <button>Order Now</button>
                </div>
            </nav>
        
        </>
    )
}


export default Navbar;