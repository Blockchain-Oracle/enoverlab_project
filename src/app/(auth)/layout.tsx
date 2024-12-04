import "@/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Auth",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-auto w-dvw items-center bg-green">{children}</div>
  );
}
