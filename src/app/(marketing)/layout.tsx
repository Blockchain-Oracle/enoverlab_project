import "@/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Fresh Eats | Home",
  description: "Fresh Eats, Indulge in Culinary and Dietary Excellence.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="">{children}</div>;
}
