import "@/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Auth",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="">{children}</div>;
}
