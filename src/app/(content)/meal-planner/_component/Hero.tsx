// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mt-16 min-h-[400px] overflow-hidden bg-lime-500 px-4 py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-0 h-full w-1/2 skew-x-12 transform bg-white/20" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left content */}
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Nourish your life with expertise crafted meal plans that make
              healthy eating effortless
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
                  className="w-full rounded-xl px-6 py-4 pr-16 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-600"
                />
                <motion.button
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-lime-500 p-2 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="h-6 w-6" />
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
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 overflow-hidden rounded-2xl bg-white/10">
                {/* You can add an image here */}
                {/* <Image src="src" alt="alt" width={} height={} /> */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-lime-600/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
