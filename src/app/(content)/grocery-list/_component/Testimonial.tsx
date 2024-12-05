"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "I love shopping at this grocery store! the wide variety of fresh produce and friendly staff make every visit enjoyable and convenient",
    image: "/images/grocery-list/testimonial-1.png",
  },
  {
    id: 1,
    quote:
      "I love shopping at this grocery store! the wide variety of fresh produce and friendly staff make every visit enjoyable and convenient",
    image: "/images/grocery-list/bakery.png",
  },
  // Add more testimonials as needed
];

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-[#8BC34A] py-16">
      <div className="container relative mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev > 0 ? prev - 1 : testimonials.length - 1,
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev < testimonials.length - 1 ? prev + 1 : 0,
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Testimonial Content */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 text-2xl leading-relaxed text-white">
            {testimonials[currentSlide]?.quote}
          </p>

          <div className="mx-auto mb-6 h-24 w-24">
            <img
              src={testimonials[currentSlide]?.image}
              alt="Testimonial"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
