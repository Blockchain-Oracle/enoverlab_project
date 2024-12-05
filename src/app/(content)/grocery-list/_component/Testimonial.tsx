'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "I love shopping at this grocery store! the wide variety of fresh produce and friendly staff make every visit enjoyable and convenient",
    image: "/images/grocery-list/testimonial-1.png",
  },
  {
    id: 1,
    quote: "I love shopping at this grocery store! the wide variety of fresh produce and friendly staff make every visit enjoyable and convenient",
    image: "/images/grocery-list/bakery.png",
  }
  // Add more testimonials as needed
]

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="bg-[#8BC34A] py-16">
      <div className="container mx-auto px-4 relative">
        {/* Navigation Buttons */}
        <button 
          onClick={() => setCurrentSlide(prev => prev > 0 ? prev - 1 : testimonials.length - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={() => setCurrentSlide(prev => prev < testimonials.length - 1 ? prev + 1 : 0)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Testimonial Content */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white text-2xl mb-8 leading-relaxed">
            {testimonials[currentSlide].quote}
          </p>
          
          <div className="w-24 h-24 mx-auto mb-6">
            <img
              src={testimonials[currentSlide].image}
              alt="Testimonial"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
