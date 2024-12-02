import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ReviewCardProps = {
  image: string;
  name: string;
  review: string;
};

export const ReviewCardProperties: ReviewCardProps[] = [
  {
    image: "/Images/Review/image.png",
    name: "Gladys",
    review:
      "Since I started using this meal planner, my cooking routine has completely transformed. It takes the guesswork out of my day, making grocery shopping simpler and meal prep less stressful. I no longer waste time figuring out what to cook for the week.",
  },
  {
    image: "/Images/Review/image-1.png",
    name: "Eniola",
    review:
      "I've also seen a noticeable improvement in my energy levels and overall health. The meal planner ensures I stick to my fitness and health goals by keeping my meals aligned with my dietary needs, whether it's weight management or muscle building.",
  },
  {
    image: "/Images/Review/image-2.png",
    name: "Rukayat",
    review:
      "I've also seen a noticeable improvement in my energy levels and overall health. The meal planner ensures I stick to my fitness and health goals by keeping my meals aligned with my dietary needs, whether it's weight management or muscle building.",
  },
  {
    image: "/Images/Review/image-3.png",
    name: "Angel",
    review:
      "Not only has it made me more organized, but it's also saved me money. I plan meals that use similar ingredients throughout the week, reducing food waste and preventing impulse buys. It's been a real game-changer for both my budget and health.",
  },
];
export default function ReviewCard({ image, name, review }: ReviewCardProps) {
  return (
    <Card className="overflow-hidden rounded-[45px_100px_45px_45px]">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-[200px] w-full transition-all duration-300 hover:scale-105 md:h-[250px] md:w-1/3 lg:h-[300px]">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-[45px_100px_45px_45px] object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-green md:text-xl lg:text-2xl">
              {name}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-2">
            <p className="text-xs text-muted-foreground md:text-sm lg:text-base">
              {review}
            </p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
