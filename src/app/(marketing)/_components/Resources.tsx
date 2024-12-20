import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { ResourceCardProperties } from "./ResourceCard";
import ResourceCard from "./ResourceCard";

export default function Resources() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 py-8 md:py-12">
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="flex flex-col gap-4 text-center md:max-w-[450px] md:text-left">
          <h3 className="text-2xl font-bold md:text-3xl">Recipes in action</h3>
          <p className="text-base text-gray-600 md:text-lg">
            We bring to life your best meal ideas and give recipe
            recommendations
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-[#84C52A] hover:bg-[#76b125] md:w-auto">
                Watch video
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[850px]">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wBw_RnmCPYc"
                  title="Recipe Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div className="group relative h-[250px] w-[300px] cursor-pointer sm:h-[300px] sm:w-[400px] md:h-[400px] md:w-[500px]">
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="rounded-full bg-white/80 p-3 transition-transform group-hover:scale-110 md:p-4">
                  <Play className="h-6 w-6 text-[#84C52A] md:h-8 md:w-8" />
                </div>
              </div>
              <Image
                src="/Images/Resource/chef.png"
                alt="Chef preparing food"
                fill
                className="object-contain"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[850px]">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wBw_RnmCPYc"
                title="Recipe Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-10 flex flex-col place-content-center">
        <h2 className="text-center text-2xl font-bold text-[#84C52A] md:text-3xl">
          Resources
        </h2>
        <p className="text-center text-base text-gray-600 md:text-lg">
          Lorem Ipsum has been the industry&lsquo;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {ResourceCardProperties.map((resource, index) => (
            <ResourceCard
              key={index}
              image={resource.image}
              title={resource.title}
              description={resource.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
