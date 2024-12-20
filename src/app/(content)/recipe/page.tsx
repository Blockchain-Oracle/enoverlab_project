import Resources from "@/app/(marketing)/_components/Resources";
import FeaturedRecipe from "./_components/FeaturedRecipe";
import KidFavourite from "./_components/KidFavourite";
import Popular from "./_components/Popular";
import RecipeHero from "./_components/RecipeHero";
import Regions from "./_components/Regions";
import Trending from "./_components/Trending";
import Footer from "../grocery-list/_component/Footer";

export default function Recipepage() {
  return (
    <>
      <RecipeHero />

      <Trending />
      <FeaturedRecipe />

      <Regions />
      <Popular />
      <KidFavourite />
      <div className="bg-[url('/Images/Features/Rectangle 171.png')] container mx-auto mt-5">
        <Resources />
      </div>
      <Footer />
    </>
  );
}
