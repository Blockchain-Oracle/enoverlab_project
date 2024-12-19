import Footer from '../grocery-list/_component/Footer';
import Categories from './_component/Categories';
import Explore from './_component/Explore';
import Hero from './_component/Hero';
import Search from './_component/Search';
import Yourself from './_component/Yourself';

export default function MealPlannerPage() {
  return (
    <main>
      <Hero />
      <Search />
      <Categories />
      <Yourself />
      <Explore />
      <Footer />
    </main>
  );
}
