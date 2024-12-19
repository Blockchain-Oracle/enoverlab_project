import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ResourceCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <Card
      className="relative mx-auto h-[200px] w-full max-w-[474px] overflow-hidden border-none bg-inherit shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:h-[240px] md:h-[279px]"
      style={{ borderRadius: "24px" }}
    >
      <div className="grid h-full w-full grid-cols-2">
        <div className="group relative h-full w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/20 to-transparent" />
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ borderRadius: "24px 0 0 24px" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center bg-gradient-to-l from-[#84C52A]/90 to-[#6BA122]/90 p-6 transition-all duration-300">
          <h3 className="mb-3 line-clamp-2 text-xl font-bold tracking-tight text-white transition-all duration-300 hover:text-white/90">
            {title}
          </h3>
          <p className="line-clamp-4 text-sm font-medium leading-relaxed text-white/90">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}

export const ResourceCardProperties: {
  title: string;
  image: string;
  description: string;
}[] = [
  {
    description:
      "Vegetables are nutrient-dense foods that offer a wide range of health benefits, from boosting immune function and promoting heart health to supporting digestion and weight management.",
    image: "/Images/Resource/image.png",
    title: "Vegetables & Benefits",
  },
  {
    description: "Potatoes for low BP",
    image: "/Images/Resource/image-1.png",
    title: "Vegetables & Benefits",
  },
  {
    description: "Dates & Benefits",
    image: "/Images/Resource/image-2.png",
    title:
      "Dates are rich in fiber, antioxidants, vitamins, and minerals like potassium and magnesium. They support digestion, boost energy, promote heart health, improve bone strength, and enhance skin health.",
  },
  {
    title: "Sugarcane & the liver",
    image: "/Images/Resource/image-2.png",
    description:
      "Learn about the surprising benefits of sugarcane for liver health. Rich in antioxidants and natural compounds, sugarcane helps protect and detoxify your liver while providing sustainable energy. Find out how to properly include this sweet treat in your healthy lifestyle.",
  },
];
