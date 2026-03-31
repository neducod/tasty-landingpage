import { useState } from 'react'
import './App.css'

function PromoSection(){
    return(
        <>
            <section>
                {/* SMALLER SCREENS */}
                <div>
                        <div>
                            <h2>PAsta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                            <p>price</p>
                        </div>
                        <img src="" alt="" />
                </div>
                <div>
                        <div>
                            <h2>PAsta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                            <p>price</p>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>
                            <h2>PAsta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                            <p>price</p>
                        </div>
                        <img src="" alt="" />
                    </div>

            </section>
            <section className='hidden sm:block'>
                {/* LARGER SCREEN */}
                <div className='flex flex-row '>
                    <div>
                        <div>
                            <h2>PAsta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                            <p>price</p>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>
                            <h2>PAsta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                            <p>price</p>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>
                            <h2>PAsta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing eliti</p>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                            <p>price</p>
                        </div>
                        <img src="" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PromoSection;