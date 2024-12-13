'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function Plan() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="relative w-full">
      {/* Background Container with Responsive Height */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full overflow-hidden">
        {/* Background Image with Next.js Image */}
        <Image
          src="/Images/grocery-list/plan.png"
          alt="Meal Planning Background"
          fill
          priority
          className="object-cover object-center transform scale-105 
            transition-transform duration-700 hover:scale-110"
          quality={90}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Content Overlay */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center px-4"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-center font-bold text-white leading-tight
            text-4xl sm:text-5xl md:text-6xl"
        >
          <motion.div 
            variants={wordVariants}
            className="mb-2 sm:mb-3 md:mb-4 tracking-wide"
          >
            Makes
          </motion.div>
          <motion.div 
            variants={wordVariants}
            className="mb-2 sm:mb-3 md:mb-4 tracking-wide"
          >
            Meal Planning
          </motion.div>
          <motion.div 
            variants={wordVariants}
            className="tracking-wide"
          >
            Easier
          </motion.div>
        </motion.h2>

        {/* Call to Action Button */}
        <motion.button
          variants={wordVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-green text-white 
            rounded-full text-sm sm:text-base font-medium shadow-lg 
            hover:bg-green/90 transition-colors duration-300"
        >
          Start Planning Now
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
            hidden md:flex flex-col items-center"
        >
          <div className="w-1 h-8 rounded-full bg-white/30">
            <div className="w-full h-1/2 bg-white/80 rounded-full" />
          </div>
          <span className="text-white/80 text-sm mt-2">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
