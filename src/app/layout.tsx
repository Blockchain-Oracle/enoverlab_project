"use client";

import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  throw new Error("Clerk publishable key not found.");
}

const noHeader = /^(\/sign-up|\/login)/;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <ClerkProvider publishableKey={clerkKey}>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          {!noHeader.test(pathname) ? <Header /> : null}
          {/* <Header /> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
