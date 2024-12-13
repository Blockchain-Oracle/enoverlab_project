'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "I love shopping at this grocery store! the wide variety of fresh produce and friendly staff make every visit enjoyable and convenient",
    image: "/Images/grocery-list/Overnight oat.png",
    author: "Sarah Johnson"
  },
  {
    id: 2,
    quote: "I love shopping at this grocery store! the wide variety of fresh produce and friendly staff make every visit enjoyable and convenient",
    image: "/Images/grocery-list/Overnight oat.png",
    author: "Michael Chen"
  },
];

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide(current => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setCurrentSlide(current => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <div className="bg-green py-16">
      <div className="container relative mx-auto px-4">
        {/* Navigation Buttons */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={previous}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 
            hover:bg-white transition-colors duration-200"
        >
          <ChevronLeft className="h-6 w-6 text-green-600" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 
            hover:bg-white transition-colors duration-200"
        >
          <ChevronRight className="h-6 w-6 text-green-600" />
        </motion.button>

        {/* Testimonial Content */}
        <div className="mx-auto max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p className="mb-8 text-xl md:text-2xl leading-relaxed text-white">
                {testimonials[currentSlide].quote}
              </p>

              <div className="mx-auto mb-6 h-24 w-24">
                <img
                  src={testimonials[currentSlide].image}
                  alt={`Testimonial by ${testimonials[currentSlide].author}`}
                  className="h-full w-full rounded-full object-cover ring-4 ring-white/20"
                />
              </div>

              <p className="text-white/90 font-medium">
                {testimonials[currentSlide].author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="group relative p-1"
              >
                <span 
                  className={`block h-2 w-2 rounded-full transition-all duration-200 ease-out
                    ${currentSlide === index 
                      ? "bg-white scale-100" 
                      : "bg-white/50 scale-90 group-hover:scale-100"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}