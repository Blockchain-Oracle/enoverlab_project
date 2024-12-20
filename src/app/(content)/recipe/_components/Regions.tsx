"use client";
import { Button } from "@/components/ui/button";
import FeatureCard, {
  type FeatureCardProps,
} from "@/app/(marketing)/_components/FeatureCard";
import { CarouselFeature } from "@/app/(marketing)/_components/CarouselFeature";
import BlurFade from "@/components/ui/blur-fade";

export default function Regions() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-green">
        Regional Cuisines
      </h1>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {RegionProperties.map((feature, index) => (
          <RegionButton
            name={feature.name}
            key={feature.name}
            className={`h-full w-full rounded-full px-7 ${feature.className}`}
          />
        ))}
      </div>

      <div className="mt-12 block sm:hidden">
        <CarouselFeature>
          {regionFeatureCards.map((card) => (
            <FeatureCard key={card.image} {...card} />
          ))}
        </CarouselFeature>
      </div>
      <div className="mt-12 hidden gap-6 py-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {regionFeatureCards.map((card, idx) => (
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

const RegionProperties: { name: string; className?: string }[] = [
  {
    name: "Igbo",
    className: "bg-green",
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
    title: "Ewa Aganyin",
    description: "Classic Nigerian Ewa Aganyin with smoky flavor and spices",
    image: "/Images/Features/beans.png",
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
  {
    title: "Ofada Rice ",
    description: "locally made Ofada Rice ",
    image: "/Images/Features/ofada-rice.png",
    time: "30 minutes",
    type: "instructions",
  },
  {
    title: "Amala & Gbegiri Soup",
    description: "Amala & Gbegiri Soup ",
    image: "/Images/Features/amala.png",
    time: "30 minutes",
    type: "instructions",
  },
  {
    title: "Moin Moin",
    description: "Amala & Gbegiri Soup ",
    image: "/Images/Features/Moin Moin.png",
    time: "30 minutes",
    type: "instructions",
  },
];
