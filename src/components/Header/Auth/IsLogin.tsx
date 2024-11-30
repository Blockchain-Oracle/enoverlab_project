"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
export default function IsLogin() {
  return (
    <div className="flex space-x-5">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href="/login">
          <Button variant="default">Login </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="rounded-full bg-green px-5 hover:bg-green/80">
            Sign Up{" "}
          </Button>
        </Link>
      </SignedOut>
    </div>
  );
}
