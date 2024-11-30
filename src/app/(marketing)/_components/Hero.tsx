import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-4 py-8 md:gap-8 md:py-16">
      {/* Bottom curved section mobile */}
      <div className="relative flex h-[70px] w-full items-center justify-center rounded-t-[25px] bg-[#84C52A] sm:mt-12 sm:hidden md:h-[90px] md:rounded-t-[35px]">
        <div className="absolute flex h-[35px] w-[90%] items-center rounded-[20px] bg-white px-3 md:h-[45px] md:w-[80%] md:rounded-[25px] md:px-4">
          <input
            type="text"
            placeholder="Search for your favorite meal"
            className="w-full text-sm font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none md:text-base"
          />
        </div>
      </div>

      {/* Hero content */}
      <div className="flex w-full flex-col items-center justify-between gap-8 sm:grid sm:grid-cols-2 sm:gap-12">
        <div className="flex max-w-2xl flex-col items-center px-4 text-center sm:items-start sm:px-0 sm:text-left">
          <h1 className="bg-gradient-to-r from-green to-lime-950 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            Indulge in <br />
            <span className="bg-gradient-to-r from-green to-lime-400 bg-clip-text text-transparent">
              Culinary Excellence
            </span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:mt-6 md:text-lg md:leading-8">
            We bring to life your best meal ideas and give recipe
            recommendations
          </p>
          <div className="mt-6 flex gap-4 sm:mt-8">
            <Link href="/recipe">
              <Button className="rounded-full bg-gradient-to-r from-green to-lime-400 px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-gradient-to-r hover:from-lime-400 hover:to-green sm:px-8 md:px-12 md:py-3 md:text-base">
                Todays recipe
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative h-[300px] w-full max-w-[300px] sm:h-[400px] sm:max-w-none md:h-[500px]">
          <div className="relative h-full w-full">
            {/* Base ellipse background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <Image
                src="/Images/Hero/ellipse.png"
                alt="Background ellipse"
                width={300}
                height={600}
                className="relative z-0 w-[200px] animate-pulse sm:w-[250px] md:w-[300px]"
              />
            </div>

            {/* Phone overlaid on ellipse */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <Image
                src="/Images/Hero/phone.png"
                alt="Phone interface"
                width={300}
                height={600}
                className="relative z-10 h-auto w-[200px] animate-float object-contain sm:w-[250px] md:w-[300px]"
                style={{ animationDuration: "3s" }}
              />
            </div>

            {/* Floating food elements */}
            <div
              className="absolute right-[15%] top-[10%] z-20 animate-float sm:right-[20%]"
              style={{ animationDelay: "0.5s", animationDuration: "4s" }}
            >
              <Image
                src="/Images/Hero/burger.png"
                alt="Burger"
                width={80}
                height={80}
                className="w-[50px] sm:w-[65px] md:w-[80px]"
              />
            </div>

            <div
              className="absolute bottom-[10%] left-[15%] z-20 animate-float sm:left-[20%]"
              style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
            >
              <Image
                src="/Images/Hero/fried.png"
                alt="Fried"
                width={70}
                height={70}
                className="w-[45px] sm:w-[60px] md:w-[70px]"
              />
            </div>

            <div
              className="absolute left-[15%] top-1/3 z-20 animate-float sm:left-[20%]"
              style={{ animationDelay: "1s", animationDuration: "3.5s" }}
            >
              <Image
                src="/Images/Hero/watermelon.png"
                alt="Watermelon"
                width={60}
                height={60}
                className="w-[40px] sm:w-[50px] md:w-[60px]"
              />
            </div>

            <div
              className="absolute bottom-1/3 right-[15%] z-20 animate-float sm:right-[20%]"
              style={{ animationDelay: "2s", animationDuration: "4s" }}
            >
              <Image
                src="/Images/Hero/donut.png"
                alt="Donut"
                width={70}
                height={70}
                className="w-[45px] sm:w-[60px] md:w-[70px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curved section desktop */}
      <div className="relative mt-8 hidden h-[80px] w-full items-center justify-center rounded-t-[30px] bg-[#84C52A] sm:mt-12 sm:flex md:h-[90px] md:rounded-t-[35px]">
        <div className="absolute flex h-[40px] w-[90%] items-center rounded-[20px] bg-white px-4 md:h-[50px] md:w-[80%] md:rounded-[25px] md:px-6">
          <input
            type="text"
            placeholder="Search for your favorite meal"
            className="w-full text-sm font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none md:text-base"
          />
        </div>
      </div>
    </section>
  );
}
