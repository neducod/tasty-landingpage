import { useState } from 'react'
import './App.css'


import SecondFood from './assets/secondfood.jpeg'


function TestimonialSec (){


    return(
        <>
            <section className='flex flex-col gap-10 p-6 bg-gray-300'>
                <div className='flex flex-col gap-4 justify-center items-center p-4'>
                    <h3 className='font-bol text-3xl'>Hear what our customers <span className='text-red-600 font-bold italic underline decoration-wavy decoration-orange-300' >say</span></h3>
                    <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis enim vel distinctio odio nesciunt,</p>
                </div>
                <div className='flex flex-col gap-8 p-6'>
                    <div className='bg-white p-4 rounded-2xl flex flex-col gap-6'>
                        {/* STAR ICONS */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex fuga fugit inventore obcaecati ab est repellat vel blanditiis dignissimos?</p>
                        <div className='flex flex-row gap-40'>
                            <div>
                                <h4 className='font-bold'>John Doe</h4>
                                <p className='text-sm'>Markerter</p>
                            </div>
                            <img src={SecondFood} alt="secondfood" className='w-14 rounded-4xl'/>
                        </div>
                    </div>

                    <div className='bg-white p-4 rounded-2xl flex flex-col gap-6'>
                        {/* STAR ICONS */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex fuga fugit inventore obcaecati ab est repellat vel blanditiis dignissimos?</p>
                        <div className='flex flex-row gap-40'>
                            <div>
                                <h4 className='font-bold'>John Doe</h4>
                                <p className='text-sm'>Markerter</p>
                            </div>
                            <img src={SecondFood} alt="secondfood" className='w-14 rounded-4xl'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default  TestimonialSec;