// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-lime-500 min-h-[400px] px-4 py-16 md:py-24 overflow-hidden mt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute right-0 w-1/2 h-full bg-white/20 transform skew-x-12" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Nourish your life with expertise crafted meal plans that make healthy eating effortless
            </motion.h1>

            <motion.div 
              className="max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Create a meal plan at a goal"
                  className="w-full px-6 py-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-600 pr-16"
                />
                <motion.button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-lime-500 rounded-lg text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-white/10 rounded-2xl overflow-hidden">
                {/* You can add an image here */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-lime-600/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
  