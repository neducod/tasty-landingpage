import { useState } from 'react'
import './App.css'
import FirstImage from './assets/firstfood.jpeg'
import SecondImage from './assets/secondfood.jpeg'
import ThirdImage from './assets/thirdfood.jpeg'
import FourthImage from './assets/fourthfood.jpeg'
import FifthImage from './assets/Haitian Spaghetti.jpeg'


function FoodGallery (){
    return(
        <>
            <section>
                <div>Food's <span>Gallery</span></div>
                <div className='flex justify-center items-center p-4 flex-col'>
                    <img src={FirstImage} alt="" />
                    <img src={SecondImage} alt="" />
                    <img src={ThirdImage} alt="" />
                    <img src={FourthImage} alt="" />
                    <img src={FifthImage} alt="" />
                </div>
                <div>
                    <a href="#">View More</a>
                </div>
            </section>
        
        </>
    )
}

export default FoodGallery;