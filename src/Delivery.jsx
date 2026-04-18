import { useState } from 'react'
import './App.css'

import MockImage from './assets/packers-movers-relocation-packaging-and-labeling-logistics-delivery-man-2b7f92a571cb607728c072173534fcd2.png'

function DeliverySection (){
    return(
        <>
        <div className='flex flex-col gap-4 p-6 sm:hidden'>
            {/* FOR SMALLER SCREENS */}
            <div>
                <h3 className='text-3xl pl-4 pb-4'>Choose your <br /> favourtie food</h3>
                <p className='p-4 italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sit error perspiciatis minus quam necessitatibus tempore laudantium placeat laborum quaerat corrupti at deserunt autem.</p>
            </div>
            <div>
                {/* IMAGE OF A BIKE MAN */}
                <img src={MockImage} alt="" className='w-80'/>
            </div>
            <div className='flex justify-end items-end gap-4'>
                <h3 className='text-3xl'>Order Online <br /> and Get Fast <br /> Delivery</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, tempora pariatur illum dolor adipisci iste voluptatibus iure</p>
            </div>
        </div>


        <div className='hidden sm:block sm:bg-gray-300'>
            {/* FOR LARGER SCRREN */}
            <div className='flex justify-center items-center gap-10 p-20'>
                <div className='flex gap-10 flex-col'>
                    <h3 className='text-4xl font-bold'>Choose your <br /> favourtie food</h3>
                    <p className='w-90 italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sit error perspiciatis minus quam necessitatibus tempore laudantium placeat laborum quaerat corrupti at deserunt autem, iure illum excepturi.</p>
                </div>
                <div>
                    <img src={MockImage} alt="" />
                </div>
                <div className='flex flex-col justify-end items-end gap-4'>
                    <h3 className='text-4xl font-bold'>Order Online <br /> and Get Fast <br /> Delivery</h3>
                    <p className='text-right w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, tempora pariatur illum dolor adipisci iste voluptatibus iure</p>
                </div>
            </div>
        </div>
        </>
    )
}


export default DeliverySection;