import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type WhyChooseUsProps = {
  image: string;
  description: string;
};

export const WhyChooseUsProperties: WhyChooseUsProps[] = [
  {
    image: "/Images/why-choose-us/image.png",
    description: "Personalized flexible and customizable regular recipe",
  },
  {
    image: "/Images/why-choose-us/image-1.png",
    description: "Balanced Nutrition",
  },
  {
    image: "/Images/why-choose-us/image-2.png",
    description: "You will save time and money",
  },
  {
    image: "/Images/why-choose-us/image-3.png",
    description: "Community and resources support",
  },
];

export default function WhyChooseUs({ image, description }: WhyChooseUsProps) {
  return (
    <Card className="h-[200px] w-full overflow-hidden sm:h-[300px] sm:w-[300px]">
      <CardContent className="p-0">
        <div className="flex h-[120px] w-full items-center justify-center transition-all duration-300 hover:scale-105 sm:h-[200px] sm:w-[300px]">
          <Image
            src={image}
            alt={description}
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <CardFooter className="flex h-[80px] w-full items-center justify-center bg-green p-2 text-white sm:h-[100px] sm:w-[300px] sm:p-4">
          <p className="text-center text-xs sm:text-base">{description}</p>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
