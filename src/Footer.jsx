import { useState } from 'react'
import './App.css'

function FooterSection (){
    return(
        <>
        <footer className='flex gap-6 p-6 flex-col'>
            <div className='flex flex-col sm:justify-start gap-4 p-2'>
                <div>
                    <h6> <span>Tasty</span> Foods</h6>
                </div>
                <div>
                    <p>Subscription News</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <input type="search" name="" id="" />
                    <button>Subscribe</button>
                </div>
            </div>
            <hr />
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates q.</p>
                    <h6>Book a ride</h6>
                    <p>+ 123 456 789</p>
                    <h6>Opening hours</h6>
                    <p>4:00 AM - 12:00 PM</p>
                </div>
                <div className='flex flex-col'>
                    <ul className='flex flex-col'>
                        <h6>Quick Links</h6>
                        <li>About us</li>
                        <li>Menu</li>
                        <li>Testimonial</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h6>Delivery Branches</h6>
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
                            <p>Address</p>
                            <p>Your numbe rone secret location</p>
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
                            <p>jhwgedyj@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <div>
                    <p>Copyrights @ 2026. All rights reserved</p>
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