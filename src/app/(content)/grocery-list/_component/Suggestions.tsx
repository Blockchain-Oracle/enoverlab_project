'use client';

import { Star, ShoppingCart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Suggestions() {
  const suggestions = [
    {
      name: "Overnight Oat",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing. Lorem ipsum dolor sit consectetur adipiscing.",
      image: "/Images/grocery-list/Overnight oat.png",
      rating: 5,
      price: "$12.99",
    },
    {
      name: "Homemade Hamburger",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing. Lorem ipsum dolor sit consectetur adipiscing.",
      image: "/Images/grocery-list/Homemade Hameburger.png",
      rating: 5,
      price: "$15.99",
    },
    {
      name: "Chunky Chilled Corn",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing. Lorem ipsum dolor sit consectetur adipiscing.",
      image: "/Images/grocery-list/corn.png",
      rating: 5,
      price: "$10.99",
    },
    {
      name: "Loaded Avocado toast",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing. Lorem ipsum dolor sit consectetur adipiscing.",
      image: "/Images/grocery-list/avocado-toast.png",
      rating: 5,
      price: "$14.99",
    },
    {
      name: "Cashew Nut Salad",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing. Lorem ipsum dolor sit consectetur adipiscing.",
      image: "/Images/grocery-list/cashew-salad.png",
      rating: 5,
      price: "$13.99",
    },
    {
      name: "Grilled Chicken",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing. Lorem ipsum dolor sit consectetur adipiscing.",
      image: "/Images/grocery-list/grilled-chicken.png",
      rating: 5,
      price: "$16.99",
    },
    {
      name: "Red Bread & Jam",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing. Lorem ipsum dolor sit consectetur adipiscing.",
      image: "/Images/grocery-list/bread-jam.png",
      rating: 5,
      price: "$11.99",
    },
    {
      name: "Salmon Burger",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing. Lorem ipsum dolor sit consectetur adipiscing.",
      image: "/Images/grocery-list/salmon-burger.png",
      rating: 5,
      price: "$18.99",
    },
    {
      name: "Taco Salad",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing. Lorem ipsum dolor sit consectetur adipiscing.",
      image: "/Images/grocery-list/taco-salad.png",
      rating: 5,
      price: "$12.99",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-[#F8F9FB] py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-700">
            Suggestions
          </h2>
          <button className="hidden sm:flex items-center gap-2 text-green hover:text-green/80 transition-colors">
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {suggestions.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-3 sm:p-4 shadow-sm hover:shadow-md 
                transition-all duration-300"
            >
              <div className="relative mb-3 sm:mb-4 h-40 sm:h-48 overflow-hidden rounded-xl">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transform transition-transform 
                    duration-300 hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm 
                    px-2 py-1 rounded-full">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-base sm:text-lg font-medium text-green">
                    {item.name}
                  </h3>
                  <span className="text-sm sm:text-base font-medium text-gray-900">
                    {item.price}
                  </span>
                </div>

                <p className="line-clamp-2 text-sm text-gray-500">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 rounded-full bg-green py-2.5 text-sm sm:text-base 
                      text-white hover:bg-green/90 transition-colors"
                  >
                    Shop Now
                  </motion.button>
                  
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center rounded-lg bg-[#FFC244] 
                      p-2 text-white hover:bg-[#ffb820] transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile See All Button */}
        <div className="mt-6 sm:hidden flex justify-center">
          <button className="w-full max-w-xs py-3 text-green border border-green/20 
            rounded-full hover:bg-green/5 transition-colors text-sm flex items-center 
            justify-center gap-2"
          >
            See All Suggestions
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
