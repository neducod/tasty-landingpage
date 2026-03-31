import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import FooterSection from './Footer'
import FoodNews from './Foodnews'
import TestimonialSec from './Testimonial'
import FoodGallery from './Foodgallery'
import ShopSection from './Shop'
import DeliverySection from './Delivery'
import AboutSection from './About'
import PromoSection from './Promo'
import Header from './Header'
import HeroSection from './Hero'
import Navbar from './Navbar'

import { FaBars } from 'react-icons/fa'; 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Header/>
      <PromoSection/>
      <AboutSection/>
      <DeliverySection/>
      <ShopSection/>
      <TestimonialSec/>
      <FoodNews/>
      <FoodGallery/>
      <FooterSection/>
    </>
  )
}

export default App
