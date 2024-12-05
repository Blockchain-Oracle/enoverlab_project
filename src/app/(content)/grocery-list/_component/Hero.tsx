export default function Hero() {
  return (
    <section className="relative mt-12 h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/Images/grocery-list/Grocery list Hero.png")',
          backgroundSize: "100% 100%",
        }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green/40" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto h-full px-4">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold text-white">
            Create a Shopping list
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white">
            Sign Up to create a grocery list from favourite recipes and order
            groceries
          </p>
        </div>
      </div>
    </section>
  );
}
