import { useState } from 'react'
import './App.css'

function FooterSection (){
    return(
        <>
        <footer className='flex gap-6 p-6 flex-col bg-gray-300'>
            <div className='flex flex-col sm:justify-start gap-4 p-2'>
                <div>
                    <h6> <span>Tasty</span> Foods</h6>
                </div>
                <div>
                    <p>Subscription News</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <input type="search" name="" id="" className='text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100' placeholder="Enter text here"/>
                    <button className='pl-4 pt-2 pb-2 pr-4 rounded-3xl bg-red-600 text-black font-bold'>Subscribe</button>
                </div>
            </div>
            <hr />
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates q.</p>
                    <h6 className='text-xl'>Book a ride</h6>
                    <p>+ 123 456 789</p>
                    <h6 className='text-xl'>Opening hours</h6>
                    <p>4:00 AM - 12:00 PM</p>
                </div>
                <div className='flex flex-col'>
                    <ul className='flex flex-col'>
                        <h6 className='text-xl'>Quick Links</h6>
                        <li>About us</li>
                        <li>Menu</li>
                        <li>Testimonial</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-xl'>Delivery Branches</h6>
                    <ul className='flex flex-col'>
                        <li>Nigeria</li>
                        <li>Argentina</li>
                        <li>Japan</li>
                        <li>Kenya</li>
                        <li>Canada</li>
                        <li>Uk</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-4 items-center'>
                        <div>1</div>
                        <div>
                            <p className='text-xl'>Address</p>
                            <p>Your number one secret location</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div>2</div>
                        <div>
                            <p>12343232</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div>3</div>
                        <div>
                            <p>yoursecret@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <div>
                    <p className='text-xl'>Copyrights @ 2026. All rights reserved</p>
                </div>
                <div>
                    <ul className='flex gap-2 flex-col'>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <p>Designed and built by <a href="">Josephine 🍒</a></p>
            </div>
        </footer>
        </>
    )
}

export default FooterSection;