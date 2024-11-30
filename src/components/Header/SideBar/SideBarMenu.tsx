import Link from "next/link";
import MenuBuger from "../MenuBuger/MenuBuger";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";

const navItems = ["Recipe", "Meal Planner", "Grocery List"];

export default function SideBarMenu() {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuBuger />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-xl font-bold text-green">
              Fresh Eats
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-4">
            <ul className="flex flex-col items-center gap-4 md:gap-6">
              {navItems.map((item) => (
                <li key={item}>
                  <SheetClose asChild>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="whitespace-nowrap font-semibold decoration-green/50 decoration-4 transition-colors hover:text-green hover:underline"
                    >
                      {item}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>

          <SheetFooter className="mt-6">
            <div className="grid grid-cols-2 place-content-center gap-4">
              <SignedOut>
                <Link href="/login">
                  <SheetClose asChild>
                    <Button variant="default" className="w-full">
                      Login
                    </Button>
                  </SheetClose>
                </Link>
                <Link href="/sign-up">
                  <SheetClose asChild>
                    <Button className="w-full rounded-full bg-green px-5 hover:bg-green/80">
                      Sign Up
                    </Button>
                  </SheetClose>
                </Link>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
