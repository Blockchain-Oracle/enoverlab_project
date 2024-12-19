import Image from "next/image";

export default function RecipeHero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/Images/Recipe/recipe.png"
            alt="Featured Recipe"
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="mb-6 text-right text-3xl font-bold tracking-tight text-green">
            FIND a quick way to sort your stomach{" "}
          </h2>
          <p>
            We bring to life your best meal ideas and give recipe
            recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
