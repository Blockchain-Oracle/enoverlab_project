import { Card } from "@/components/ui/card";
import { CardContent, CardHeader } from "@mui/material";
import Image from "next/image";
import FeatureCard, {
  type FeatureCardProps,
} from "@/app/(marketing)/_components/FeatureCard";

export default function Trending() {
  return (
    <section className="container mx-auto bg-green px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {trendingCardProperties.map((card, index) => (
          <TrendingCard key={index} {...card} />
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {featureCardProperties.map((card, index) => (
          <FeatureCard key={index} {...card} />
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

const featureCardProperties: FeatureCardProps[] = [
  {
    title: "Spicy Thai Noodles",
    description:
      "Authentic Thai rice noodles with fresh vegetables and aromatic spices",
    image: "/Images/Features/thai-noodles.png",
    time: "25 minutes",
    type: "recipe",
  },
  {
    title: "Mediterranean Salad",
    description:
      "Fresh Greek salad with feta cheese, olives and homemade dressing",
    image: "/Images/Features/med-salad.png",
    time: "15 minutes",
    type: "ingredients",
  },
  {
    title: "Berry Smoothie Bowl",
    description:
      "Nutritious smoothie bowl topped with fresh berries and granola",
    image: "/Images/Features/smoothie-bowl.png",
    time: "10 minutes",
    type: "instructions",
  },
];
