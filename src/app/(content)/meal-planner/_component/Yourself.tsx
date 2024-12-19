"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock } from "lucide-react";
import { useState } from "react";

interface MealOption {
  id: string;
  name: string;
  image: string;
  time: string;
}

const mealOptions: Record<string, MealOption[]> = {
  breakfast: [
    {
      id: "b1",
      name: "Red Bread & Jam",
      image: "/Images/Meal-Planner/breakfast-1.png",
      time: "4m",
    },
    {
      id: "b2",
      name: "Grilled Chicken",
      image: "/Images/Meal-Planner/breakfast-2.png",
      time: "4m",
    },
    {
      id: "b3",
      name: "Cashew Nut Salad",
      image: "/Images/Meal-Planner/breakfast-3.png",
      time: "4m",
    },
    {
      id: "b4",
      name: "Chunky chill corn",
      image: "/Images/Meal-Planner/breakfast-4.png",
      time: "4m",
    },
  ],
  lunch: [
    {
      id: "l1",
      name: "Red Bread & Jam",
      image: "/Images/Meal-Planner/breakfast-1.png",
      time: "4m",
    },
    {
      id: "l2",
      name: "Grilled Chicken",
      image: "/Images/Meal-Planner/breakfast-2.png",
      time: "4m",
    },
    {
      id: "l3",
      name: "Chunky chill corn",
      image: "/Images/Meal-Planner/breakfast-3.png",
      time: "4m",
    },
    {
      id: "l4",
      name: "Cashew Nut Salad",
      image: "/Images/Meal-Planner/breakfast-4.png",
      time: "4m",
    },
  ],
  dinner: [
    {
      id: "d1",
      name: "Chunky chill corn",
      image: "/Images/Meal-Planner/breakfast-1.png",
      time: "4m",
    },
    {
      id: "d2",
      name: "Grilled Chicken",
      image: "/Images/Meal-Planner/breakfast-2.png",
      time: "4m",
    },
    {
      id: "d3",
      name: "Cashew Nut Salad",
      image: "/Images/Meal-Planner/breakfast-3.png",
      time: "4m",
    },
    {
      id: "d4",
      name: "Red Bread & Jam",
      image: "/Images/Meal-Planner/breakfast-4.png",
      time: "4m",
    },
  ],
  snacks: [
    {
      id: "s1",
      name: "Red Bread & Jam",
      image: "/Images/Meal-Planner/breakfast-1.png",
      time: "4m",
    },
    {
      id: "s2",
      name: "Chunky chill corn",
      image: "/Images/Meal-Planner/breakfast-2.png",
      time: "4m",
    },
    {
      id: "s3",
      name: "Cashew Nut Salad",
      image: "/Images/Meal-Planner/breakfast-3.png",
      time: "4m",
    },
    {
      id: "s4",
      name: "Grilled Chicken",
      image: "/Images/Meal-Planner/breakfast-4.png",
      time: "4m",
    },
  ],
};

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Yourself() {
  const [activeType, setActiveType] = useState("Breakfast");

  return (
    <section className="relative py-8">
      <div className="absolute bottom-0 left-0 top-0 hidden w-16 bg-lime-500 md:block" />
      <div className="absolute bottom-0 right-0 top-0 hidden w-16 bg-orange-400 md:block" />

      <div className="container mx-auto max-w-6xl px-4 md:px-20">
        <motion.h2
          className="mb-6 text-2xl font-semibold text-[#95C753]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Choose your meals yourself!
        </motion.h2>

        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {mealTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`py-3 text-center font-medium transition-colors ${type === activeType ? "bg-[#FFC043] text-white" : "bg-[#FFC043] text-white"}`}
            >
              {type}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
        >
          {mealOptions[activeType.toLowerCase()]?.map((meal) => (
            <motion.div
              key={meal.id}
              variants={itemVariants}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="relative aspect-square">
                <Image
                  src={meal.image}
                  alt={meal.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-3 text-base font-medium text-gray-900">
                  {meal.name}
                </h3>
                <div className="flex items-center justify-between">
                  <button className="rounded-full border border-gray-300 px-4 py-1 text-sm text-gray-600 hover:bg-gray-50">
                    See recipe
                  </button>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{meal.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-gray-100 p-2">
                <span className="font-medium">14</span>
                <span className="block text-sm text-gray-500">Wed</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#95C753]">
                  Your Meal Today
                </h3>
                <div className="text-sm text-gray-600">3hrs</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src="/Images/Meal-Planner/breakfast-1.png"
                    alt="Meal"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm text-gray-600">
                  Bread & Jam, Coffee
                </span>
              </div>
            </div>
            <button className="mt-4 rounded-full border border-gray-300 px-4 py-1 text-sm text-gray-600">
              Details
            </button>
          </div>

          <div className="rounded-xl bg-[#95C753] p-6 text-white">
            <h3 className="mb-4 text-lg font-semibold">Nutrition Content</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>CARBONHYDRATE</span>
                <span>234g</span>
              </div>
              <div className="flex justify-between">
                <span>FATS</span>
                <span>163.9g</span>
              </div>
              <div className="flex justify-between">
                <span>PROTEIN</span>
                <span>273.5g</span>
              </div>
              <div className="border-t border-white/20 pt-3">
                <div className="flex justify-between">
                  <span>Total Calories</span>
                  <span>5436g</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
