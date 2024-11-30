import { Button } from "@/components/ui/button";

export default function MenuBuger() {
  return (
    <Button
      aria-label="Open Menu"
      variant="link"
      size="icon"
      className="text-green hover:text-green/60"
    >
      <span className="relative block h-0.5 w-6 bg-current transition-all">
        <span className="absolute -top-2 block h-0.5 w-6 bg-current transition-all"></span>
        <span className="absolute top-2 block h-0.5 w-6 bg-current transition-all"></span>
      </span>
    </Button>
  );
}
