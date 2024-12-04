"use client";
import GroceryByCatrgoryCard, {
  GroceryByCategoryProperties,
} from "./GroceryByCatrgoryCard";

export default function GroceryByCategories() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GroceryByCategoryProperties.map((category) => (
            <GroceryByCatrgoryCard
              key={category.title}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
