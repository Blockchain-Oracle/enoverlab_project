'use client';

import { motion } from 'framer-motion';

export default function Categories() {
  const categories = [
    {
      name: "Vegetables",
      count: 12,
      image: "/Images/grocery-list/vegetable.png",
    },
    {
      name: "Fruits",
      count: 8,
      image: "/Images/grocery-list/fruit.png",
    },
    {
      name: "Meat",
      count: 5,
      image: "/Images/grocery-list/bakery.png",
    },
    {
      name: "Fish",
      count: 4,
      image: "/Images/grocery-list/drinks.png",
    },
    {
      name: "Dairy",
      count: 7,
      image: "/Images/grocery-list/drinks.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Categories
          </h2>
          <button className="text-green hover:text-green/80 text-sm sm:text-base transition-colors">
            View All
          </button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group cursor-pointer rounded-[20px] sm:rounded-[30px] bg-[#F8F9FB] p-4 sm:p-6 
                transition-all duration-300 hover:shadow-lg hover:bg-white"
            >
              <div className="relative mb-4 sm:mb-6 aspect-square overflow-hidden rounded-full 
                bg-white p-4 sm:p-6 shadow-sm group-hover:shadow-md transition-shadow">
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full rounded-full object-cover transition-transform 
                    duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 
                  transition-colors rounded-full" />
              </div>

              <div className="text-center">
                <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-medium text-gray-800 
                  group-hover:text-green transition-colors">
                  {category.name}
                </h3>
                <span className="text-sm sm:text-base text-gray-500 group-hover:text-gray-600 
                  transition-colors">
                  {category.count} items
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-6 sm:hidden flex justify-center">
          <button className="w-full max-w-xs py-3 text-green border border-green/20 
            rounded-full hover:bg-green/5 transition-colors text-sm">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
