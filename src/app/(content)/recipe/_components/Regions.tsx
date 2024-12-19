import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FeatureCard, {
  type FeatureCardProps,
} from "@/app/(marketing)/_components/FeatureCard";

export default function Regions() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-green">
        Regional Cuisines
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {RegionProperties.map((region, index) => (
          <Card key={index} className="p-4">
            <RegionButton name={region.name} className="h-full w-full" />
          </Card>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {regionFeatureCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

const RegionProperties: { name: string }[] = [
  {
    name: "Igbo",
  },
  {
    name: "Yoruba",
  },
  {
    name: "Hausa",
  },
  {
    name: "Calabar",
  },
  {
    name: "Badagry",
  },
  {
    name: "Nupe",
  },
  {
    name: "Fulani",
  },
  {
    name: "Ikire",
  },
  {
    name: "Continental",
  },
];

export const RegionButton = ({
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

const regionFeatureCards: FeatureCardProps[] = [
  {
    title: "Jollof Rice",
    description: "Classic Nigerian Jollof rice with smoky flavor and spices",
    image: "/Images/Features/jollof-rice.png",
    time: "45 minutes",
    type: "recipe",
  },
  {
    title: "Egusi Soup",
    description: "Traditional West African soup made with ground melon seeds",
    image: "/Images/Features/egusi-soup.png",
    time: "60 minutes",
    type: "ingredients",
  },
  {
    title: "Pounded Yam",
    description: "Smooth and stretchy pounded yam served with choice of soup",
    image: "/Images/Features/pounded-yam.png",
    time: "30 minutes",
    type: "instructions",
  },
];
