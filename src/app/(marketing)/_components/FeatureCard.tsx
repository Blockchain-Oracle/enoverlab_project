"use client";

import Image from "next/image";
import { Clock, CookingPot, Edit2, Share2, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dock, DockIcon } from "@/components/ui/dock";

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
  time: string;
  type: "ingredients" | "instructions" | "recipe";
};

export const FeatureCardProperties: FeatureCardProps[] = [
  {
    title: "Avocado Toast",
    description: "Fresh & Tangy egg Toast with cucumber, tomato, and avocado",
    image: "/Images/Features/cucumber-humus.png ",
    time: "7 minutes",
    type: "recipe",
  },
  {
    title: "Chicken Stir Fry",
    description: "Cucumber & Hummus Open Face Sandwich",
    image: "/Images/Features/tonggy-egg.png",
    time: "10 minutes",
    type: "ingredients",
  },
  {
    title: "Rainbow Fruit Salad",
    description: "Rainbow Fruit Salad Recipe",
    image: "/Images/Features/rainbow-fruit.png",
    time: "10 minutes",
    type: "instructions",
  },

  {
    title: "Oil-Fashion",
    description: "Oil-fashion sweet potato casserole",
    image: "/Images/Features/oil-potatoe.png",
    time: "5 minutes",
    type: "instructions",
  },

  {
    title: "Pizza made with plantain",
    description: "Pizza made with plantain",
    image: "/Images/Features/pizza.png",
    time: "10 minutes",
    type: "recipe",
  },

  {
    title: "Weightloss Smoothie",
    description: "Weightloss Smoothie Recipe",
    image: "/Images/Features/weight-loss.png",
    time: "30 minutes",
    type: "recipe",
  },

  {
    title: "Cereal Smoothie Bowl",
    description: "Cereal Smoothie Bowl with milk and berries",
    image: "/Images/Features/smoothie.png",
    time: "5 minutes",
    type: "recipe",
  },

  {
    title: "Oven Roasted sweet potatoes",
    description: "Oven Roasted sweet potatoes with plantain",
    image: "/Images/Features/roasted-potatoes.png",
    time: "25 minutes",
    type: "recipe",
  },

  {
    title: "Homemade Hamburger",
    description: "Homemade Hamburger",
    image: "/Images/Features/home-buger.png",
    time: "5 minutes",
    type: "recipe",
  },
];

export default function FeatureCard({
  title,
  description,
  image,
  time,
  type,
}: FeatureCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4 text-green" />
          <span className="text-sm">{time}</span>
          <Separator orientation="vertical" className="h-4" />
          <CookingPot className="h-4 w-4 text-blue-500" />
          <span className="text-sm">{type}</span>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <div className="relative">
          <Dock magnification={60} distance={100}>
            <DockIcon className="bg-black/10 p-3 text-muted-foreground dark:bg-white/10">
              <Share2 className="size-full text-green" />
            </DockIcon>
            <Separator orientation="vertical" />
            <DockIcon className="bg-black/10 p-3 text-muted-foreground dark:bg-white/10">
              <Edit2 className="size-full text-blue-500" />
            </DockIcon>
            <Separator orientation="vertical" />
            <DockIcon className="bg-black/10 p-3 text-muted-foreground dark:bg-white/10">
              <Trash2 className="size-full text-red-500" />
            </DockIcon>
          </Dock>
        </div>
      </CardFooter>
    </Card>
  );
}
