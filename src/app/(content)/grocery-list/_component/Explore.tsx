'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronDown, Heart, Star } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Explore() {
  const exploreItems = [
    {
      name: 'Healthy',
      image: '/images/explore/healthy-recipes.jpg',
    },
    {
      name: 'Vegan',
      image: '/images/explore/vegan-options.jpg',
    },
    {
      name: 'Low Carbon',
      image: '/images/explore/low-carb-meals.jpg',
    }
  ];

  return (
    <div className="bg-[#F8F9FB] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-700 mb-8">Explore</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className="mb-6"
        >
          {exploreItems.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="bg-[#8BC34A] rounded-xl p-6 text-white">
                <h3 className="text-3xl font-semibold mb-4">{item.name}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <button className="bg-[#FFC107] text-black px-4 py-2 rounded-full text-sm">
                    View Details
                  </button>
                  <Heart className="w-6 h-6" />
                  <div className="flex gap-1">
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <button className="flex items-center gap-2 border border-white rounded-full px-4 py-2">
                  + Breakfast <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
