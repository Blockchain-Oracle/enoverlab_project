import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-4 py-12 md:gap-6 md:py-20">
      {/* Bottom curved section mobile */}
      <div className="relative flex h-[80px] w-full items-center justify-center rounded-t-[30px] bg-[#84C52A] sm:mt-16 sm:hidden md:h-[100px] md:rounded-t-[40px]">
        <div className="absolute flex h-[35px] w-full max-w-[85%] items-center rounded-[20px] bg-white px-3 md:h-[45px] md:max-w-[70%] md:rounded-[25px] md:px-4">
          <input
            type="text"
            placeholder="Search for your favorite meal"
            className="w-full text-xs font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm md:text-base"
          />
        </div>
      </div>
      <div className="flex max-w-3xl flex-col items-center px-4 text-center md:items-start md:px-0 md:text-left">
        <h1 className="bg-gradient-to-r from-green to-lime-950 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-6xl">
          Indulge in <br />
          <span className="bg-gradient-to-r from-green to-lime-400 bg-clip-text text-transparent">
            Culinary Excellence
          </span>
        </h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground md:mt-6 md:text-lg md:leading-8">
          We bring to life your best meal ideas and give recipe recommendations
        </p>
        <div className="mt-6 flex gap-4 md:mt-10">
          <Link href="/recipe">
            <Button className="rounded-full bg-gradient-to-r from-green to-lime-400 px-8 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-gradient-to-r hover:from-lime-400 hover:to-green md:px-12 md:py-3 md:text-base">
              Todays recipe
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative mt-6 md:mt-8">
        <div className="relative">
          {/* Base ellipse background */}
          <div className="animate-float">
            <Image
              src="/Images/ellipse.png"
              alt="Background ellipse"
              width={300}
              height={600}
              className="relative z-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
            />
          </div>

          {/* Phone overlaid on ellipse */}
          <div className="absolute inset-0 animate-float">
            <Image
              src="/Images/phone.png"
              alt="Phone interface"
              width={300}
              height={600}
              className="relative z-10 h-auto w-[150px] object-contain sm:w-[200px] md:w-[250px] lg:w-[300px]"
            />
          </div>

          {/* Floating food elements */}
          <div className="absolute -right-6 top-0 z-20 animate-float-delay-1 sm:-right-8 md:-right-12 lg:-right-16">
            <Image
              src="/Images/burger.png"
              alt="Burger"
              width={80}
              height={80}
              className="w-[40px] sm:w-[50px] md:w-[65px] lg:w-[80px]"
            />
          </div>
          <div className="absolute -left-6 top-1/3 z-20 animate-float-delay-2 sm:-left-8 md:-left-12 lg:-left-16">
            <Image
              src="/Images/watermelon.png"
              alt="Watermelon"
              width={60}
              height={60}
              className="w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px]"
            />
          </div>
          <div className="absolute -right-3 bottom-1/4 z-20 animate-float-delay-3 sm:-right-4 md:-right-6 lg:-right-8">
            <Image
              src="/Images/donut.png"
              alt="Donut"
              width={70}
              height={70}
              className="w-[35px] sm:w-[45px] md:w-[60px] lg:w-[70px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom curved section desktop */}
      <div className="relative mt-8 hidden h-[80px] w-full items-center justify-center rounded-t-[30px] bg-[#84C52A] sm:mt-16 sm:flex md:h-[100px] md:rounded-t-[40px]">
        <div className="absolute flex h-[35px] w-full max-w-[85%] items-center rounded-[20px] bg-white px-3 md:h-[45px] md:max-w-[70%] md:rounded-[25px] md:px-4">
          <input
            type="text"
            placeholder="Search for your favorite meal"
            className="w-full text-xs font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm md:text-base"
          />
        </div>
      </div>
    </section>
  );
}
