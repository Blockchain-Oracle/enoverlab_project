export default function Feature() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-5">
      <div className="flex flex-col items-start justify-center gap-4 sm:items-center">
        <h1 className="text-4xl font-bold text-green sm:text-center sm:text-[50px]">
          Featured Recipes
        </h1>
        <p className="max-w-[800px] text-muted-foreground sm:text-center">
          Discover our Featured Recipes, carefully curated to inspire your meals
          with vibrant flavors and balanced nutrition. From quick weeknight
          dinners to healthy snacks, these recipes are designed to fit every
          lifestyle and taste.
        </p>
      </div>
    </section>
  );
}
