import { useState } from 'react'
import './App.css'

function TestimonialSec (){
    const Slideshow = () => {
        // 1. Array of slide data (images and captions)
        const slides = [
          {
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
            caption: 'Majestic Mountains',
          },
          {
            url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
            caption: 'Serene Lake House',
          },
          {
            url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80',
            caption: 'Lush Forest Path',
          },
          {
            url: 'https://images.unsplash.com/photo-1434725039720-bb260032939a?w=800&q=80',
            caption: 'Green Valley Sunset',
          },
        ];


        const [currentIndex, setCurrentIndex] = useState(0);

        // 2. Navigation Functions
        const prevSlide = () => {
          const isFirstSlide = currentIndex === 0;
          const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
          setCurrentIndex(newIndex);
        };
      
        const nextSlide = () => {
          const isLastSlide = currentIndex === slides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
        };
      
        const goToSlide = (slideIndex) => {
          setCurrentIndex(slideIndex);
        };



    return(
        <>
         <div className="relative mx-auto max-width-[800px] w-full max-w-4xl overflow-hidden rounded-xl shadow-lg group">
      {/* The Image Slide */}
      <div className="relative animate-fade-in">
        {/* Number text (1/4 etc) */}
        <div className="absolute top-0 left-0 bg-black/40 text-gray-100 text-sm py-2 px-4 rounded-br-lg z-10">
          {currentIndex + 1} / {slides.length}
        </div>
        
        {/* Slide Image */}
        <img 
          src={slides[currentIndex].url} 
          alt={slides[currentIndex].caption} 
          className="w-full h-[450px] object-cover block"
        />
        
        {/* Caption text */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/60 text-white text-lg py-2 px-6 rounded-md text-center max-w-[80%] z-10">
          {slides[currentIndex].caption}
        </div>
      </div>

      {/* Navigation Arrows (Left and Right) */}
      <button 
        className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer p-4 text-white font-bold text-2xl border-none bg-black/30 rounded-r-md transition-all duration-300 hover:bg-black/70 z-20"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button 
        className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer p-4 text-white font-bold text-2xl border-none bg-black/30 rounded-l-md transition-all duration-300 hover:bg-black/70 z-20"
        onClick={nextSlide}
      >
        &#10095;
      </button>
                {/* Navigation Dots/Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                <span
                    key={index}
                    className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                        ? 'bg-white scale-110 shadow-md' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    onClick={() => goToSlide(index)}
                ></span>
                ))}
            </div>
            </div>

        </>
    )
}
}


export default  TestimonialSec;