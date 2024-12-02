"use client";
import { WhyChooseUsProperties } from "./WhyChooseUs";

import WhyChooseUs from "./WhyChooseUs";
import ReviewCard, { ReviewCardProperties } from "./ReviewCard";
import { CarouselFeature } from "./CarouselFeature";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
export default function Review() {
  return (
    <section className="container mx-auto mt-10 space-y-20">
      {/**why choose us */}
      <div className="flex flex-col items-start justify-center gap-4 sm:items-center">
        <h3 className="text-xl font-bold text-green sm:text-center sm:text-[50px]">
          Why Choose Us ?
        </h3>
        <ul className="mx-auto grid grid-cols-2 justify-center gap-4 overflow-x-auto md:grid-cols-2 lg:flex lg:flex-nowrap">
          {WhyChooseUsProperties.map((card) => (
            <WhyChooseUs key={card.image} {...card} />
          ))}
        </ul>
      </div>

      {/**what are users saying about us */}
      <div className="flex flex-col items-center justify-center gap-8">
        <h3 className="text-xl font-bold text-green sm:text-center sm:text-[50px]">
          what are users saying about us
        </h3>
        <p className="text-center text-gray-500">
          Here&apos;s what our users are saying about us.
        </p>
        <div>
          <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:gap-8">
            {ReviewCardProperties.map((card) => (
              <ReviewCard key={card.image} {...card} />
            ))}
          </div>

          <div className="block sm:hidden">
            <CarouselFeature>
              {/* Split reviews into pairs and map over them */}
              {Array.from(
                { length: Math.ceil(ReviewCardProperties.length / 2) },
                (_, index) => {
                  const pairStart = index * 2;
                  const currentPair = ReviewCardProperties.slice(
                    pairStart,
                    pairStart + 2,
                  );

                  return (
                    <div key={index} className="grid grid-cols-1 gap-4">
                      {currentPair.map((card) => (
                        <ReviewCard key={card.image} {...card} />
                      ))}
                    </div>
                  );
                },
              )}
            </CarouselFeature>
          </div>
        </div>
      </div>

      {/**our features */}
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
        <div className="flex max-w-[300px] flex-col items-start justify-start space-y-4 sm:max-w-[400px] lg:max-w-[500px]">
          <div className="w-[300px] overflow-hidden transition-all duration-300 hover:scale-105 sm:w-[400px] lg:w-[500px]">
            <Image
              src="/Images/Review/africanMarket.png"
              alt="feature"
              width={500}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>
          <h3 className="items-start text-start text-xl font-bold text-green sm:text-2xl lg:text-3xl">
            Generate the perfect meal plan that suits your schedule.{" "}
          </h3>
        </div>

        <div className="flex flex-col items-start justify-start sm:max-w-[400px] lg:max-w-[500px]">
          <p className="text-start text-sm text-gray-500 sm:text-base lg:text-lg">
            Create a personalized meal plan by considering your schedule and
            preferences. Save time with easy-to-prepare meals and batch cooking.
            Include diverse, nutrient-rich ingredients for a balanced diet that
            fits your lifestyle.
          </p>
          <Link href="/sign-up">
            <Button className="mt-4 bg-green px-8 text-white hover:bg-green/80 sm:mt-6 lg:mt-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
