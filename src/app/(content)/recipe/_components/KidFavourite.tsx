import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FeatureCard, {
  type FeatureCardProps,
} from "@/app/(marketing)/_components/FeatureCard";

export default function KidFavourite() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-green">
        Kid Favourite Recipes
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {KidFavouriteProperties.map((recipe, index) => (
          <Card key={index} className="p-4">
            <RecipeButton name={recipe.name} className="h-full w-full" />
          </Card>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {kidFavouriteFeatureCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

const KidFavouriteProperties: { name: string }[] = [
  {
    name: "Pancakes",
  },
  {
    name: "Spaghetti",
  },
  {
    name: "Pizza",
  },
  {
    name: "Chicken Nuggets",
  },
  {
    name: "French Fries",
  },
  {
    name: "Ice Cream",
  },
  {
    name: "Cookies",
  },
  {
    name: "Mac & Cheese",
  },
  {
    name: "Burgers",
  },
];

export const RecipeButton = ({
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

const kidFavouriteFeatureCards: FeatureCardProps[] = [
  {
    title: "Chocolate Chip Cookies",
    description: "Classic chewy cookies with melty chocolate chips",
    image: "/Images/Features/chocolate-cookies.png",
    time: "30 minutes",
    type: "recipe",
  },
  {
    title: "Homemade Pizza",
    description: "Fun and customizable pizza that kids can help make",
    image: "/Images/Features/pizza.png",
    time: "45 minutes",
    type: "ingredients",
  },
  {
    title: "Rainbow Pancakes",
    description: "Colorful and fluffy pancakes perfect for breakfast",
    image: "/Images/Features/pancakes.png",
    time: "20 minutes",
    type: "instructions",
  },
];
