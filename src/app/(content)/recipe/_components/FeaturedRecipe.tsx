import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FeaturedRecipe() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-green">
        Featured Recipe
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
        {FeaturesProperties.map((feature, index) => (
          <Card key={index} className="p-4">
            <FeatureRecipeButton
              name={feature.name}
              className="h-full w-full"
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

const FeaturesProperties: { name: string }[] = [
  {
    name: "5 Ingredients",
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
