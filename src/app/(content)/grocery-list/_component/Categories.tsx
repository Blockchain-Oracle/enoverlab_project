export default function Categories() {
  const categories = [
    {
      name: "Vegetables",
      count: 12,
      image: "/Images/grocery-list/vegetable.png",
    },
    {
      name: "Fruits",
      count: 8,
      image: "/Images/grocery-list/fruit.png",
    },
    {
      name: "Meat",
      count: 5,
      image: "/Images/grocery-list/bakery.png",
    },
    {
      name: "Fish",
      count: 4,
      image: "/Images/grocery-list/drinks.png",
    },
    {
      name: "Dairy",
      count: 7,
      image: "/Images/grocery-list/drinks.png",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-semibold">Categories</h2>
        <div className="grid grid-cols-5 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer rounded-[30px] bg-[#F8F9FB] p-6 transition-all hover:shadow-md"
            >
              <div className="mb-6 aspect-square h-48 overflow-hidden rounded-full bg-white p-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="text-center text-[#84C52A]">
                <h3 className="mb-2 text-xl font-medium">{category.name}</h3>
                <span className="text-base text-gray-500">
                  {category.count} items
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
