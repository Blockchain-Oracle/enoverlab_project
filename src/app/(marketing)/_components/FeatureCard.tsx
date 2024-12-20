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

export type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
  time: string;
  type: "ingredients" | "instructions" | "recipe";
};

export const featureCardProperties: FeatureCardProps[] = [
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
    <Card className="flex h-[450px] w-full flex-col overflow-hidden">
      <div className="relative h-48 w-full flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="flex-shrink-0">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-shrink-0">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4 text-green" />
          <span className="text-sm">{time}</span>
          <Separator orientation="vertical" className="h-4" />
          <CookingPot className="h-4 w-4 text-blue-500" />
          <span className="text-sm">{type}</span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto justify-around">
        <div className="relative w-full">
          <Dock
            magnification={60}
            distance={100}
            className="w-full justify-center gap-x-7"
          >
            <DockIcon className="w-[100px] p-3 text-center text-muted-foreground">
              <div className="flex items-center justify-center">
                <Share2 className="h-6 w-6 text-green" />
              </div>
              <span className="text-sm">Share</span>
            </DockIcon>
            <Separator orientation="vertical" className="h-12" />
            <DockIcon className="w-[100px] p-3 text-center text-muted-foreground">
              <div className="flex items-center justify-center">
                <Edit2 className="h-6 w-6 text-blue-500" />
              </div>
              <span className="text-sm">Edit</span>
            </DockIcon>
            <Separator orientation="vertical" className="h-12" />
            <DockIcon className="w-[100px] p-3 text-center text-muted-foreground">
              <div className="flex items-center justify-center">
                <Trash2 className="h-6 w-6 text-red-500" />
              </div>
              <span className="text-sm">Delete</span>
            </DockIcon>
          </Dock>
        </div>
      </CardFooter>
    </Card>
  );
}
