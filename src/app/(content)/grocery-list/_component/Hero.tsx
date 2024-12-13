export default function Hero() {
  return (
    <section className="relative mt-6 sm:mt-12 h-[300px] sm:h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/Images/grocery-list/Grocery list Hero.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green/40" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto h-full px-4">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-4xl font-bold text-white px-2">
            Create a Shopping list
          </h1>
          <p className="mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-white px-4">
            Sign Up to create a grocery list from favourite recipes and order
            groceries
          </p>
        </div>
      </div>
    </section>
  );
}
