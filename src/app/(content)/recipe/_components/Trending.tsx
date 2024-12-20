"use client";
import { Card } from "@/components/ui/card";
import { CardContent, CardHeader } from "@mui/material";
import Image from "next/image";

import BlurFade from "@/components/ui/blur-fade";
import { CarouselFeature } from "@/app/(marketing)/_components/CarouselFeature";

export default function Trending() {
  return (
    <section className="container mx-auto bg-green px-4 py-12 md:py-16">
      <div className="block sm:hidden">
        <CarouselFeature>
          {trendingCardProperties.map((card) => (
            <TrendingCard key={card.image} {...card} />
          ))}
        </CarouselFeature>
      </div>
      <div className="hidden gap-6 py-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {trendingCardProperties.map((card, idx) => (
          <BlurFade
            key={card.image}
            delay={0.15 + idx * 0.1}
            inView
            className="h-full"
          >
            <TrendingCard {...card} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

const TrendingCard = ({
  image,
  description,
}: {
  image: string;
  description: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={image}
          alt={description}
          className="h-48 w-full rounded-t-lg object-cover"
          width={500}
          height={500}
        />
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

const trendingCardProperties: { image: string; description: string }[] = [
  {
    image: "/Images/recipe.jpg",
    description: "We bring to life your best meal ideas and give  recipe.",
  },
  {
    image: "/Images/recipe.jpg",
    description: "We bring to life your best meal ideas and give  recipe.",
  },
  {
    image: "/Images/recipe.jpg",
    description: "We bring to life your best meal ideas and give  recipe.",
  },
];

// const featureCardProperties: FeatureCardProps[] = [
//   {
//     title: "Fresh & Tangy egg Toast with cucumber",
//     description:
//       "A refreshing breakfast option with scrambled eggs, cucumber, and tangy flavors",
//     image: "/Images/Features/tonggy-egg.png",
//     time: "25 minutes",
//     type: "recipe",
//   },
//   {
//     title: "Cucumber & Hummus Open Face Sandwich",
//     description:
//       "A healthy and flavorful sandwich with cucumber, hummus, and crispy bread",
//     image: "/Images/Features/cucumber-humus.png",
//     time: "15 minutes",
//     type: "ingredients",
//   },
//   {
//     title: "Rainbow Fruit Salad Recipe",
//     description:
//       "A colorful and nutritious fruit salad with a variety of fruits and a hint of sweetness",
//     image: "/Images/Features/rainbow-fruit.png",
//     time: "10 minutes",
//     type: "instructions",
//   },
//   {
//     title: "Oven Roasted sweet potatoes with plantain",
//     description:
//       "A delicious and healthy side dish with roasted sweet potatoes and plantain",
//     image: "/Images/Features/roasted-potatoes.png",
//     time: "10 minutes",
//     type: "instructions",
//   },
//   {
//     title: "Cereal Smoothie Bowl with milk ",
//     description:
//       "A quick and easy breakfast bowl with cereal, milk, and your choice of toppings",
//     image: "/Images/Features/smoothie.png",
//     time: "10 minutes",
//     type: "instructions",
//   },
//   {
//     title: "Homemade Hamburger ",
//     description:
//       "A quick and easy breakfast bowl with cereal, milk, and your choice of toppings",
//     image: "/Images/Features/home-buger.png",
//     time: "10 minutes",
//     type: "instructions",
//   },
// ];
