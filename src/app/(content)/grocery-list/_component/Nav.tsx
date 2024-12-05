import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-sm">
      <div className="flex items-center">
        <div className="text-xl font-bold text-green">FRESH EAT</div>
      </div>
      
      <div className="flex items-center space-x-8">
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-green">
            Home
          </Link>
          <Link href="/recipes" className="text-gray-600 hover:text-green">
            Recipes
          </Link>
          <Link href="/meal-planner" className="text-gray-600 hover:text-green">
            Meal Planner
          </Link>
          <Link href="/grocery-list" className="text-gray-600 hover:text-green">
            Grocery List
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-gray-600">
            Login
          </Button>
          <Button variant="default" className="bg-green text-white hover:bg-green/90">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
