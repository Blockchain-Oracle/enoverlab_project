"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}

const categories: Category[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    description:
      "Open up to create a grocery list from breakfast recipes and order online",
    image: "/Images/Meal-Planner/breakfast.png",
  },
  {
    id: "lunch",
    title: "Lunch",
    description:
      "Open up to create a grocery list from lunch recipes and order online",
    image: "/Images/Meal-Planner/lunch.png",
  },
  {
    id: "dinner",
    title: "Dinner",
    description:
      "Browse the recipes and create a grocery list from dinner recipes",
    image: "/Images/Meal-Planner/dinner.png",
  },
  {
    id: "weight-loss",
    title: "Weight Loss Plan",
    description:
      "Browse the recipes and create a grocery list from weight loss recipes",
    image: "/Images/Meal-Planner/weight-loss.png",
  },
  {
    id: "vegan",
    title: "Vegan Plan",
    description:
      "Browse the recipes and create a grocery list from vegan recipes",
    image: "/Images/Meal-Planner/vegan.png",
  },
  {
    id: "low-carb",
    title: "Low Carb Plan",
    description:
      "Browse the recipes and create a grocery list from low carb recipes",
    image: "/Images/Meal-Planner/low-crab.png",
  },
  {
    id: "keto",
    title: "Keto Plan",
    description:
      "Browse the recipes and create a grocery list from keto recipes",
    image: "/Images/Meal-Planner/keto.png",
  },
  {
    id: "family",
    title: "Family-Friendly Plan",
    description:
      "Browse the recipes and create a grocery list from family recipes",
    image: "/Images/Meal-Planner/lunch.png",
  },
  {
    id: "mediterranean",
    title: "Mediterranean Plan",
    description:
      "Browse the recipes and create a grocery list from mediterranean recipes",
    image: "/Images/Meal-Planner/mediterranean.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Categories() {
  return (
    <section className="relative py-8">
      <div className="absolute bottom-0 left-0 top-0 hidden w-16 bg-lime-500 md:block" />
      <div className="absolute bottom-0 right-0 top-0 hidden w-16 bg-orange-400 md:block" />

      <div className="container mx-auto max-w-6xl px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg"
            >
              <Link href={`/meal-planner/${category.id}`} className="block">
                <div className="relative aspect-square">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
