"use client";

import { Button } from "@/components/ui/button";
import {
  GroceryCategoryCard,
  GroceryCategoryCardPropertites,
} from "./GroceryByCatrgoryCard";
import GroceryByCatrgoryCard, {
  GroceryByCategoryProperties,
} from "./GroceryByCatrgoryCard";

export default function GroceryByCategories() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GroceryByCategoryProperties.map((category) => (
            <GroceryByCatrgoryCard
              key={category.title}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>

        {/* Grocery by categories*/}
        <div className="relative mx-auto w-full max-w-7xl px-4">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: "url('/Images/Features/Rectangle 171.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          />
          <div className="mt-16 py-12 text-center md:py-16">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Grocery by Categories
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-white/90">
              We bring to life your best meal ideas and give recipe
              recommendations
            </p>

            <div className="grid gap-12 sm:grid-cols-2">
              {GroceryCategoryCardPropertites.map((category) => (
                <GroceryCategoryCard
                  key={category.title}
                  image={category.image}
                  title={category.title}
                />
              ))}
            </div>
            <Button className="mt-12 bg-[#84C52A] px-12 py-4">View All</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
