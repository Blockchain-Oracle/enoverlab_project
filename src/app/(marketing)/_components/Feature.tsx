"use client";

import BlurFade from "@/components/ui/blur-fade";
import FeatureCard, { type FeatureCardProps } from "./FeatureCard";

// import { featureCardProperties } from "./FeatureCard";
import { CarouselFeature } from "./CarouselFeature";
import NewsLetter from "./NewsLetter";

const featureCardProperties: FeatureCardProps[] = [
  {
    title: "Avocado Toast",
    description: "Fresh & Tangy egg Toast with cucumber, tomato, and avocado",
    image: "/Images/Features/cucumber-humus.png ",
    time: "7 minutes",
    type: "recipe",
  },
  {
    title: "Chicken Stir Fry",
    description: "Cucumber & Hummus Open Face Sandwich",
    image: "/Images/Features/tonggy-egg.png",
    time: "10 minutes",
    type: "ingredients",
  },
  {
    title: "Rainbow Fruit Salad",
    description: "Rainbow Fruit Salad Recipe",
    image: "/Images/Features/rainbow-fruit.png",
    time: "10 minutes",
    type: "instructions",
  },

  {
    title: "Oil-Fashion",
    description: "Oil-fashion sweet potato casserole",
    image: "/Images/Features/oil-potatoe.png",
    time: "5 minutes",
    type: "instructions",
  },

  {
    title: "Pizza made with plantain",
    description: "Pizza made with plantain",
    image: "/Images/Features/pizza.png",
    time: "10 minutes",
    type: "recipe",
  },

  {
    title: "Weightloss Smoothie",
    description: "Weightloss Smoothie Recipe",
    image: "/Images/Features/weight-loss.png",
    time: "30 minutes",
    type: "recipe",
  },

  {
    title: "Cereal Smoothie Bowl",
    description: "Cereal Smoothie Bowl with milk and berries",
    image: "/Images/Features/smoothie.png",
    time: "5 minutes",
    type: "recipe",
  },

  {
    title: "Oven Roasted sweet potatoes",
    description: "Oven Roasted sweet potatoes with plantain",
    image: "/Images/Features/roasted-potatoes.png",
    time: "25 minutes",
    type: "recipe",
  },

  {
    title: "Homemade Hamburger",
    description: "Homemade Hamburger",
    image: "/Images/Features/home-buger.png",
    time: "5 minutes",
    type: "recipe",
  },
];
export default function Feature() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-5">
      <div className="flex flex-col items-start justify-center gap-4 sm:items-center">
        <h1 className="text-4xl font-bold text-green sm:text-center sm:text-[50px]">
          Featured Recipes
        </h1>
        <p className="max-w-[800px] text-muted-foreground sm:text-center">
          Discover our Featured Recipes, carefully curated to inspire your meals
          with vibrant flavors and balanced nutrition. From quick weeknight
          dinners to healthy snacks, these recipes are designed to fit every
          lifestyle and taste.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/Images/Features/Rectangle 204.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        />
        <div className="block sm:hidden">
          <CarouselFeature>
            {featureCardProperties.map((card) => (
              <FeatureCard key={card.image} {...card} />
            ))}
          </CarouselFeature>
        </div>
        <ul className="hidden gap-6 py-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {featureCardProperties.map((card, idx) => (
            <BlurFade
              key={card.image}
              delay={0.15 + idx * 0.1}
              inView
              className="h-full"
            >
              <FeatureCard {...card} />
            </BlurFade>
          ))}
        </ul>
      </div>

      {/**newsLetter */}
      <div>
        <NewsLetter />
      </div>
    </section>
  );
}
