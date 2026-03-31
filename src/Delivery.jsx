import { useState } from 'react'
import './App.css'

function DeliverySection (){
    return(
        <>
        <div className='flex flex-col gap-4 p-6'>
            {/* FOR SMALLER SCREENS */}
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