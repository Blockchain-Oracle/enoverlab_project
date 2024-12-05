import { Button } from "@/components/ui/button";

export default function Nav () {
  return (
    <nav className="flex justify-between items-center p-4 bg-gree">
      <div className="text-xl font-bold text-green">FRESH EAT</div>
      <ul className="flex space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/planner">Meal Planner</a></li>
        <li><a href="/grocery-list">Grocery List</a></li>
      </ul>
      <div className="flex space-x-2">
        <Button variant="ghost">Login</Button>
        <Button variant="default">Sign Up</Button>
      </div>
    </nav>
  );
}
