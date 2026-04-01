import { useState } from 'react'
import './App.css'

import MockImage from './assets/Screenshot 2026-04-01 at 18.03.42.png'

function DeliverySection (){
    return(
        <>
        <div className='flex flex-col gap-4 p-6'>
            {/* FOR SMALLER SCREENS */}
            <div>
                <h3 className='text-3xl pl-4 pb-4'>Choose your <br /> favourtie food</h3>
                <p className='p-4 italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sit error perspiciatis minus quam necessitatibus tempore laudantium placeat laborum quaerat corrupti at deserunt autem.</p>
            </div>
            <div>
                {/* IMAGE OF A BIKE MAN */}
                <img src={MockImage} alt="" />
            </div>
            <div className='flex justify-end items-end gap-4'>
                <h3 className='text-3xl'>Order Online <br /> and Get Fast <br /> Delivery</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, tempora pariatur illum dolor adipisci iste voluptatibus iure</p>
            </div>
        </div>


        <div className='hidden sm:block'>
            {/* FOR LARGER SCRREN */}
            <div className='flex gap-10 p-6'>
                <div>
                    <h3>Choose your favourtie food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sit error perspiciatis minus quam necessitatibus tempore laudantium placeat laborum quaerat corrupti at deserunt autem, iure illum excepturi ratione iusto voluptatibus.</p>
                </div>
                <div>
                    {/* IMAGE OF A BIKE MAN */}
                </div>
                <div>
                    <h3>Order Online and Get Fast Delivery</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, tempora pariatur illum dolor adipisci iste voluptatibus iure</p>
                </div>
            </div>
        </div>
        </>
    )
}


export default DeliverySection;