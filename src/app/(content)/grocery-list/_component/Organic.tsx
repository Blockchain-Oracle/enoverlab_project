'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Organic() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-medium text-gray-700 text-center mb-8">
        Fresh Flavourful Organic Food
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left side - Image */}
        <div className="relative">
          <img
            src="/images/grocery-list/organic-farmer.png"
            alt="Organic farmer with fresh vegetables"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-4">
          {/* Green info box */}
          <div className="bg-[#8BC34A] text-white p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-medium mb-2">Healthy grocery list</h2>
            <p>
              Vegetables are nutrient-dense foods that offer a wide range of health
              benefits, from boosting immune function and promoting heart health to
              supporting digestion and weight management.
            </p>
          </div>

          {/* Accordion items */}
          {[1, 2, 3, 4, 5].map((item, index) => (
            <button
              key={index}
              className="w-full bg-gray-100 p-4 rounded-lg flex justify-between items-center"
              onClick={() => setOpenIndex(index)}
            >
              <span className="text-gray-700 text-lg">Healthy grocery list</span>
              <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
