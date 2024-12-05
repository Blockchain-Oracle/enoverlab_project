import Categories from "./_component/Categories";
import Dairy from "./_component/Dairy";
import Drinks from "./_component/Drinks";
import Hero from "./_component/Hero";
import Menu from "./_component/Menu";
import Nav from "./_component/Nav";
import Search from "./_component/Search";
import Suggestions from "./_component/Suggestions";
import Plan from "./_component/Plan";
import Explore from "./_component/Explore";
import Organic from "./_component/Organic";
import Testimonial from "./_component/Testimonial";
import Footer from "./_component/Footer";

export default function page() {
  return (
    <>
      {/* <Nav /> */}
      <Hero />
      <Search />
      <Menu />
      <Categories />
      <Suggestions />
      <Drinks />
      <Dairy />
      <Drinks />
      <Dairy />
      <Dairy />
      <Plan />
      <Explore />
      <Organic />
      <Testimonial />
      <Footer />
    </>
  );
}
