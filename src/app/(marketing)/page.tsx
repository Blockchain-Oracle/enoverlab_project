import Hero from "./_components/Hero";
import Feature from "./_components/Feature";
import Review from "./_components/Review";
import GroceryByCategories from "./_components/GroceryByCategories";
import Resources from "./_components/Resources";
import Footer from "@/app/(content)/grocery-list/_component/Footer";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <Review />
      <GroceryByCategories />
      <Resources />
      <Footer />
    </>
  );
}
