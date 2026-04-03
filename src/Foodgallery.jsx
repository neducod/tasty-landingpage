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
        <section className='p-6 hidden'>
            <section class="carousel" aria-label="Gallery">
                <ol class="carousel__viewport">
                    <li id="carousel__slide1"
                        tabindex="0"
                        class="carousel__slide">
                            <img src={FirstImage} alt="" className='w-full'/>
                        <div class="carousel__snapper">
                            <a href="#carousel__slide4"
                            class="carousel__prev">Go to last slide</a>
                            <a href="#carousel__slide2"
                            class="carousel__next">Go to next slide</a>
                        </div>
                    </li>
                    <li id="carousel__slide2"
                        tabindex="0"
                        class="carousel__slide">
                            <img src={SecondImage} alt="" />
                        <div class="carousel__snapper"></div>
                        <a href="#carousel__slide1"
                            class="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide3"
                            class="carousel__next">Go to next slide</a>
                    </li>
                    <li id="carousel__slide3"
                        tabindex="0"
                        class="carousel__slide">
                            <img src={ThirdImage} alt="" />
                        <div class="carousel__snapper"></div>
                        <a href="#carousel__slide2"
                            class="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide4"
                            class="carousel__next">Go to next slide</a>
                    </li>
                    <li id="carousel__slide4"
                        tabindex="0"
                        class="carousel__slide">
                            <img src={FourthImage} alt="" />
                        <div class="carousel__snapper"></div>
                        <a href="#carousel__slide3"
                            class="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide1"
                            class="carousel__next">Go to first slide</a>
                    </li>
                </ol>
                <aside class="carousel__navigation">
                    <ol class="carousel__navigation-list">
                    <li class="carousel__navigation-item">
                        <a href="#carousel__slide1"
                        class="carousel__navigation-button">Go to slide 1</a>
                    </li>
                    <li class="carousel__navigation-item">
                        <a href="#carousel__slide2"
                        class="carousel__navigation-button">Go to slide 2</a>
                    </li>
                    <li class="carousel__navigation-item">
                        <a href="#carousel__slide3"
                        class="carousel__navigation-button">Go to slide 3</a>
                    </li>
                    <li class="carousel__navigation-item">
                        <a href="#carousel__slide4"
                        class="carousel__navigation-button">Go to slide 4</a>
                    </li>
                    </ol>
                </aside>
            </section>
        </section>

            {/*  *
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
            {/*  */}
        </>
    )
}

export default FoodGallery;