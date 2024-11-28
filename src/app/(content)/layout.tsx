// import "@/styles/globals.css";

// import { type Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Create T3 App",
//   description: "Generated by create-t3-app",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//   <main>
//     content
//     {children}
//   </main>);
// }

"use client";

import "@/styles/globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import CustomSignInButton from "../(auth)/CustomLoginSignUpButton/CustomSignInButton";
import CustomSignUpButton from "../(auth)/CustomLoginSignUpButton/CustomSignUpButton";

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  throw new Error("Clerk publishable key not found.");
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider publishableKey={clerkKey}>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <SignedOut>
            <CustomSignInButton />
            <CustomSignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
