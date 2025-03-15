import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/typography.css";
import Navbar from "./components/layout/Navbar";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "Yash Mishra Web developer portfolio",
  description: "Portfolio Website created by Yash Mishra on March 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoMono.variable}`}>
      <body className="antialiased">
      <Navbar />
        {children}</body>
    </html>
  );
}
