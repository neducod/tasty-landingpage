import { useState } from 'react'
import './App.css'

function FoodNews (){
    return(
        <>
        <section className='flex justify-center items-center flex-col p-6'>
            <div className='flex justify-center items-center flex-col'>
                <h2>Our Lastest Food <span>News</span></h2>
                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus odio dignissimos quae dicta quos porro autem, pariatur error nesciunt consectetur,</p>
            </div>
            <div className='flex justify-center items-center p-2 gap-6 flex-col'>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h4>Lorem ipsum dolor sit amet,?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reiciendis!</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h4>Lorem ipsum dolor sit amet,?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reiciendis!</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h4>Lorem ipsum dolor sit amet,?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reiciendis!</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}


export default FoodNews;