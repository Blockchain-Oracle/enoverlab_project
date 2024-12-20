"use client";
import { CarouselFeature } from "@/app/(marketing)/_components/CarouselFeature";
import FeatureCard, {
  featureCardProperties,
} from "@/app/(marketing)/_components/FeatureCard";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FeaturedRecipe() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-green">
        Featured Recipe
      </h1>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {FeaturesProperties.map((feature, index) => (
          <FeatureRecipeButton
            name={feature.name}
            key={feature.name}
            className={`h-full w-full rounded-full px-7 ${feature.className}`}
          />
        ))}
      </div>

      <div className="mt-12 block sm:hidden">
        <CarouselFeature>
          {featureCardProperties.map((card) => (
            <FeatureCard key={card.image} {...card} />
          ))}
        </CarouselFeature>
      </div>
      <div className="mt-12 hidden gap-6 py-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
}

const FeaturesProperties: { name: string; className?: string }[] = [
  {
    name: "5 Ingredients",
    className: "bg-green",
  },
  {
    name: "Budget",
  },
  {
    name: "Quick",
  },
  {
    name: "Weekend",
  },
  {
    name: "Date Night",
  },
  {
    name: "Diet",
  },
  {
    name: "Fruit",
  },
  {
    name: "Holidays/Vacation",
  },
  {
    name: "Methods",
  },
  {
    name: "Budgets",
  },
  {
    name: "Kid Favourite",
  },
  {
    name: "Seasons",
  },
  {
    name: "Sweets",
  },
  {
    name: "Vegetable",
  },
];

export const FeatureRecipeButton = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => {
  return (
    <Button variant="outline" className={className}>
      {name}
    </Button>
  );
};
