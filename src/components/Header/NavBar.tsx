import Link from "next/link";
import Search from "../Search/Search";
import IsLogin from "./Auth/IsLogin";
import MenuBuger from "../MenuBuger/MenuBuger";

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between p-5">
      <Link
        className="whitespace-nowrap p-4 text-sm font-bold text-green hover:text-green/65 md:text-base lg:text-lg"
        href="/"
      >
        FRESH-EATS
      </Link>

      <div className="hidden items-center gap-6 md:flex lg:gap-8">
        <Link
          href="/recipe"
          className="whitespace-nowrap text-sm font-semibold hover:underline hover:underline-offset-4 md:text-base lg:text-lg"
        >
          Recipe
        </Link>
        <Link
          href="/meal-planner"
          className="whitespace-nowrap text-sm font-semibold hover:underline hover:underline-offset-4 md:text-base lg:text-lg"
        >
          Meal Planner
        </Link>
        <Link
          href="/grocery-list"
          className="whitespace-nowrap text-sm font-semibold hover:underline hover:underline-offset-4 md:text-base lg:text-lg"
        >
          Grocery List
        </Link>

        <Search
          placeholder="Search for recipe"
          className="min-w-28 flex-grow placeholder:text-xs placeholder:text-green/70 md:flex-grow lg:min-w-[200px] lg:placeholder:text-sm"
        />
        <IsLogin />
      </div>

      <div className="flex items-center md:hidden">
        <MenuBuger />
      </div>
    </nav>
  );
}
