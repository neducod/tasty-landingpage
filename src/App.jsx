import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import FooterSection from './Footer'
import FoodNews from './Foodnews'
import TestimonialSec from './Testimonial'
import FoodGallery from './Foodgallery'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <TestimonialSec/>
      <FoodNews/>
      <FoodGallery/>
      <FooterSection/>


    </>
  )
}

export default App
