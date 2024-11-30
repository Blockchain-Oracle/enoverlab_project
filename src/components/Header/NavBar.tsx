import Link from "next/link";
import Search from "../Search/Search";
import IsLogin from "./Auth/IsLogin";
import SideBarMenu from "./SideBar/SideBarMenu";

const navItems = ["Recipe", "Meal Planner", "Grocery List"];

export default function NavBar() {
  return (
    <nav className="bg-green-50 flex items-center justify-between px-5 py-7">
      {/* Logo */}
      <Link
        href="/"
        className="whitespace-nowrap p-2 text-sm font-bold text-green hover:text-green/60 md:text-base lg:text-lg"
        aria-label="Fresh Eats Home"
      >
        FRESH-EATS
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-4 md:flex md:gap-6 lg:gap-8">
        <ul className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="whitespace-nowrap text-xs font-semibold decoration-green/50 decoration-4 transition-colors hover:text-green hover:underline sm:text-sm md:text-base lg:text-lg"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Search
          placeholder="Search for recipe"
          className="placeholder:text-green-500/70 min-w-24 flex-grow outline-none placeholder:text-xs sm:min-w-28 md:flex-grow lg:min-w-[200px] lg:placeholder:text-sm"
        />
        <IsLogin />
      </div>
      <SideBarMenu />
    </nav>
  );
}
