import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";

type GroceryByCatrgoryCardProps = {
  image: string[];
  title: string;
};

export const GroceryByCategoryProperties: GroceryByCatrgoryCardProps[] = [
  {
    image: [
      "/Images/Grocery/image.png",
      "/Images/Grocery/image-1.png",
      "/Images/Grocery/image-2.png",
    ],
    title: "Fruits",
  },
  {
    image: [
      "/Images/Grocery/image-3.png",
      "/Images/Grocery/image-4.png",
      "/Images/Grocery/image-5.png",
    ],
    title: "Vegetables",
  },
  {
    image: [
      "/Images/Grocery/image-5.png",
      "/Images/Grocery/image-6.png",
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

// ... keep existing imports and first component ...

export const GroceryCategoryCardPropertites = [
  {
    image: "/Images/GroceryCategories/image.png",
    title: "Fruits",
  },
  {
    image: "/Images/GroceryCategories/image-1.png",
    title: "Vegetables",
  },
  {
    image: "/Images/GroceryCategories/image-2.png",
    title: "Meat",
  },
  {
    image: "/Images/GroceryCategories/image-3.png",
    title: "Meat",
  },
];

export const GroceryCategoryCard = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <Card
      className="relative mx-auto h-[200px] w-full max-w-[474px] overflow-hidden border-none bg-inherit shadow-xl transition-all duration-300 hover:shadow-2xl sm:h-[240px] md:h-[279px]"
      style={{ borderRadius: "140px 0 0 0" }}
    >
      <div className="group relative h-full w-full transform transition-all duration-300 hover:scale-105">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ borderRadius: "140px 0 0 0" }}
          priority
        />
        <div
          className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#84C52A]/90"
          style={{ borderRadius: "140px 0 0 0" }}
        >
          <h3 className="py-4 text-center text-2xl font-semibold text-white transition-transform duration-300 group-hover:scale-105">
            {title}
          </h3>
        </div>
      </div>
    </Card>
  );
};
