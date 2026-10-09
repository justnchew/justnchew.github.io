import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Chew — Builder, traveler, photographer",
  description:
    "The personal site of Justin Chew: a space for thoughtful work, travels, and photographs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
