import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function CarouselFeature({ children }: { children: React.ReactNode[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    let autoplay: NodeJS.Timeout;

    if (!isPaused) {
      autoplay = setInterval(() => {
        api.scrollNext();
      }, 3000);
    }

    return () => {
      if (autoplay) {
        clearInterval(autoplay);
      }
    };
  }, [api, isPaused]);

  return (
    <div
      className="mx-auto w-full max-w-xs"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {children.map((child, index) => (
            <CarouselItem key={index}>{child}</CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex justify-center gap-2">
          <CarouselPrevious className="relative left-0 top-0 -translate-y-0 rounded-full transition-colors hover:bg-green hover:text-white" />
          <CarouselNext className="relative right-0 top-0 -translate-y-0 rounded-full transition-colors hover:bg-green hover:text-white" />
        </div>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
