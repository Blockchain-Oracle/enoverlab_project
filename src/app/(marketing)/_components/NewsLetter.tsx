import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsLetter() {
  return (
    <div className="flex flex-col place-items-center gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-2xl font-bold">
          Never miss a recipe from FRESH EAT
        </h2>
        <p className="text-sm font-bold text-green">
          Sign to receive our weekly newsletter!{" "}
        </p>
      </div>

      <div className="flex w-full max-w-lg gap-2">
        <Input
          className="w-full flex-grow placeholder:text-green"
          placeholder="Enter your email"
        />
        <Button className="flex-shrink-0 bg-green text-white hover:bg-green/80">
          Sign up
        </Button>
      </div>
      <p className="w-full max-w-lg text-center text-sm text-muted-foreground">
        By entering your details, you are agreeing to our{" "}
        <strong>terms and conditions</strong> and{" "}
        <strong>privacy policy</strong>. You can unsubscribe at any time.
      </p>
    </div>
  );
}
