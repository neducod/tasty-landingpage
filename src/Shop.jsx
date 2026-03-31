import { useState } from 'react'
import './App.css'

function ShopSection (){
    return(
        <>
        <section className='flex flex-col gap-6 p-4'>
            <div>
                <h2>Our Popular Tasty <span className='text-red-900'>Foods</span> </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex flex-col gap-6 p-4'>
                <div>
                    <button>All</button>
                    <button>Burger</button>
                    <button>Pizza</button>
                    <button>Sandwish</button>
                    <button>hgfhdjn</button>
                    <button>Lorem</button>
                </div>
                <div></div>
            </div>
        </section>
        </>
    )
}


export default ShopSection;