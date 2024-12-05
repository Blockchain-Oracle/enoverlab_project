'use client'

import Image from "next/image"

export default function Plan() {
  return (
    <div className="relative h-[400px] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/grocery-list/plan.png')] bg-cover bg-center"
        style={{ filter: 'brightness(0.7)' }}
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-5xl font-bold text-center leading-tight">
          <div>MAkes</div>
          <div>Meal Planning</div>
          <div>Eaisier</div>
        </h2>
      </div>
    </div>
  )
}
