import { useState } from 'react'
import './App.css'

function AboutSection (){
    return(
        <>
        <div className='p-6'>
            {/* ?\FOR SMALLER SCREEN */}
            <div>
                {/* DIV FOR IMAGE */}
                <img src="" alt="" />
                <div>background color</div>
            </div>
            <div>
                <h2>ABout Tasty Foods</h2>
                <p>Explicabo tempore magni a aliquam necessitatibus molestias odio facere. Ipsa, unde animi adipisci, incidunt nam officiis vitae recusandae dolore nisi necessitatibus exercitationem.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <div>1</div>
                        <p>Delicious and healthy foods</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div>2</div>
                        <p>Best price and Offers</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div>3</div>
                        <p>Made with fresh ingredients</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <button>Order Now</button>
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div className='hidden sm:block'>
            {/* LOR LARGER SCREEN */}
            <div>
                {/* DIV FOR IMAGE */}
                <img src="" alt="" />
                <div>background color</div>
            </div>
            <div>
                <h2>ABout Tasty Foods</h2>
                <p>Explicabo tempore magni a aliquam necessitatibus molestias odio facere. Ipsa, unde animi adipisci, incidunt nam officiis vitae recusandae dolore nisi necessitatibus exercitationem.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <div>1</div>
                        <p>Delicious and healthy foods</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div>2</div>
                        <p>Best price and Offers</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div>3</div>
                        <p>Made with fresh ingredients</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <button>Order Now</button>
                    <button>Read More</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSection;