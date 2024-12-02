import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

type GroceryByCatrgoryCardProps = {
  image: string[];
  title: string;
};

export const GroceryByCategoryProperties: GroceryByCatrgoryCardProps[] = [
  {
    image: [
      "/Images/Grocery/image.png",
      "/Images/Grocery/image.png",
      "/Images/Grocery/image.png",
    ],
    title: "Fruits",
  },
  {
    image: [
      "/Images/Grocery/image.png",
      "/Images/Grocery/image.png",
      "/Images/Grocery/image.png",
    ],
    title: "Vegetables",
  },
  {
    image: [
      "/Images/Grocery/image.png",
      "/Images/Grocery/image.png",
      "/Images/Grocery/image.png",
    ],
    title: "Meat",
  },
];

export default function GroceryByCatrgoryCard({
  image,
  title,
}: GroceryByCatrgoryCardProps) {
  const cardStyles = {
    1: "rounded-[106px_30px_106px_30px]",
    2: "rounded-[0px_0px_35px_34px]",
    3: "rounded-[106px_0px_106px_30px]",
  };

  // Get index of current card based on title to determine style
  const cardIndex =
    GroceryByCategoryProperties.findIndex((c) => c.title === title) + 1;
  const cardStyle = cardStyles[cardIndex as keyof typeof cardStyles];

  return (
    <Card
      className={`group relative overflow-hidden ${cardStyle} bg-white shadow-lg transition-all duration-300 hover:scale-105`}
    >
      <div
        className={`flex items-center justify-center gap-4 bg-[#FFC244] p-8`}
      >
        {image.slice(0, 3).map((img, index) => (
          <div
            key={`${img}-${title}-${index}`}
            className={`relative h-[120px] w-[120px] transform transition-transform duration-300 group-hover:rotate-12`}
          >
            <Image src={img} alt={title} fill className="object-contain" />
          </div>
        ))}
      </div>

      <CardHeader className={`bg-green p-6`}>
        <h3 className="text-center text-2xl font-semibold text-white">
          {title}
        </h3>
      </CardHeader>
    </Card>
  );
}
