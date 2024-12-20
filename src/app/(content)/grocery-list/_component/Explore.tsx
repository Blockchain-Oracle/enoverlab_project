"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronDown, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Explore() {
  const exploreItems = [
    {
      name: "Healthy",
      description: "Discover nutritious and delicious recipes",
      image: "/Images/explore/healthy-recipes.jpg",
      rating: 4.8,
    },
    {
      name: "Vegan",
      description: "Plant-based meals for everyone",
      image: "/Images/explore/vegan-options.jpg",
      rating: 4.9,
    },
    {
      name: "Low Carbon",
      description: "Eco-friendly meal choices",
      image: "/Images/explore/low-carb-meals.jpg",
      rating: 4.7,
    },
  ];

  return (
    <section className="bg-[#F8F9FB] py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
            Explore
          </h2>
          <button className="hidden sm:flex items-center gap-2 text-green hover:text-green/80 
            transition-colors text-sm sm:text-base">
            View All Categories
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-12 sm:pb-14"
        >
          {exploreItems.map((item, index) => (
            <SwiperSlide key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-green to-green/90 p-4 sm:p-6 
                  text-white h-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl sm:text-3xl font-semibold">
                      {item.name}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                        transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                    </motion.button>
                  </div>

                  <p className="text-sm sm:text-base text-white/90">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(item.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-white/20 text-white/20"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-white/90">
                      {item.rating}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 rounded-full bg-[#FFC107] px-4 py-2.5 text-sm 
                        sm:text-base font-medium text-gray-900 hover:bg-[#ffb300] 
                        transition-colors shadow-sm"
                    >
                      View Details
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 rounded-full 
                        border border-white/30 px-4 py-2.5 text-sm sm:text-base 
                        hover:bg-white/10 transition-colors"
                    >
                      + Add to Plan
                      <ChevronDown className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile View All Button */}
        <div className="mt-4 sm:hidden flex justify-center">
          <button className="w-full max-w-xs py-3 text-green border border-green/20 
            rounded-full hover:bg-green/5 transition-colors text-sm flex items-center 
            justify-center gap-2"
          >
            View All Categories
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
