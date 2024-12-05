"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronDown, Heart, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Explore() {
  const exploreItems = [
    {
      name: "Healthy",
      image: "/Images/explore/healthy-recipes.jpg",
    },
    {
      name: "Vegan",
      image: "/Images/explore/vegan-options.jpg",
    },
    {
      name: "Low Carbon",
      image: "/Images/explore/low-carb-meals.jpg",
    },
  ];

  return (
    <div className="bg-[#F8F9FB] py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-4xl font-bold text-gray-700">Explore</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className="mb-6"
        >
          {exploreItems.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="rounded-xl bg-[#8BC34A] p-6 text-white">
                <h3 className="mb-4 text-3xl font-semibold">{item.name}</h3>
                <div className="mb-4 flex items-center gap-4">
                  <button className="rounded-full bg-[#FFC107] px-4 py-2 text-sm text-black">
                    View Details
                  </button>
                  <Heart className="h-6 w-6" />
                  <div className="flex gap-1">
                    <Star className="h-6 w-6 fill-current" />
                    <Star className="h-6 w-6 fill-current" />
                  </div>
                </div>
                <button className="flex items-center gap-2 rounded-full border border-white px-4 py-2">
                  + Breakfast <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
