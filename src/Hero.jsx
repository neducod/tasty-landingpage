import { useState } from 'react'
import './App.css'


function HeroSection(){
    return(
        <>
            <section>
                <div>
                    <h1>Welcome to our Tasty <span>Foods</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima laborum veritatis atque placeat ducimus. Nulla incidunt, est perferendis quidem eius fugit facil</p>
                    <div>
                        <button>Order Now</button>
                        <button>Book a Table</button>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </section>
            <section className='hidden sm:block'>
            <div>
                    <h1>Welcome to our Tasty <span>Foods</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima laborum veritatis atque placeat ducimus. Nulla incidunt, est perferendis quidem eius fugit facil</p>
                    <div>
                        <button>Order Now</button>
                        <button>Book a Table</button>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </section>
        </>
    )
}


export default HeroSection