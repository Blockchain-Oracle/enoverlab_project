"use client";

import BlurFade from "@/components/ui/blur-fade";
import FeatureCard from "./FeatureCard";

import { FeatureCardProperties } from "./FeatureCard";
import { CarouselFeature } from "./CarouselFeature";
import NewsLetter from "./NewsLetter";

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
            {FeatureCardProperties.map((card) => (
              <FeatureCard key={card.image} {...card} />
            ))}
          </CarouselFeature>
        </div>
        <ul className="hidden gap-6 py-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {FeatureCardProperties.map((card, idx) => (
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
