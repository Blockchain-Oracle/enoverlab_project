'use client';

import { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import { motion, AnimatePresence } from 'framer-motion';

export default function Search() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-[#F8F9FB] py-6 sm:py-8 px-4">
      <div className="container mx-auto">
        {/* Main Search Bar and Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
          {/* Search Input */}
          <div className="w-full sm:w-auto sm:min-w-[300px] md:min-w-[400px] lg:w-[500px]">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full rounded-full bg-green/40 px-4 sm:px-6 py-3 sm:py-4 text-base 
                shadow-md focus:outline-none focus:ring-2 focus:ring-green/50 
                transition-all duration-300 placeholder:text-gray-500"
            />
          </div>

          {/* Buttons Container */}
          <div className="flex gap-2 sm:gap-4 w-full sm:w-auto justify-center">
            {/* Filter Button */}
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex h-[46px] sm:h-[52px] flex-1 sm:flex-none sm:min-w-[120px] 
                items-center justify-center gap-2 rounded-full bg-[#FFC244] 
                text-white px-4 sm:px-6 shadow-md hover:bg-[#ffb820] 
                transition-colors duration-300 group"
            >
              <motion.div
                animate={{ rotate: isFilterOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FilterListIcon className="group-hover:scale-110 transition-transform" />
              </motion.div>
              <span className="text-gray-700">Filter</span>
            </button>

            {/* Add Recipe Button */}
            <button 
              className="flex h-[46px] sm:h-[52px] flex-1 sm:flex-none sm:min-w-[140px] 
                items-center justify-center gap-2 rounded-full bg-[#84C52A] 
                text-white px-4 sm:px-6 shadow-md hover:bg-[#75b125] 
                transition-colors duration-300 group"
            >
              <AddIcon className="group-hover:scale-110 transition-transform" />
              <span className="text-gray-100">Add Recipe</span>
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Categories */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-700">Categories</h3>
                    <div className="space-y-1">
                      {['Vegetables', 'Fruits', 'Meat', 'Dairy', 'Beverages'].map((category) => (
                        <label key={category} className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="rounded text-green focus:ring-green" />
                          <span className="text-gray-600">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-700">Price Range</h3>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      className="w-full accent-green"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>$0</span>
                      <span>$100</span>
                    </div>
                  </div>

                  {/* Sort By */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-700">Sort By</h3>
                    <select className="w-full rounded-md border-gray-300 focus:border-green focus:ring-green">
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Popularity</option>
                      <option>Rating</option>
                    </select>
                  </div>
                </div>

                {/* Filter Actions */}
                <div className="mt-6 flex justify-end space-x-3">
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    className="px-4 py-2 bg-green text-white rounded-md hover:bg-green/90 
                      transition-colors shadow-sm"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
