"use client";

import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/Header/Header";

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
        <Header />
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
