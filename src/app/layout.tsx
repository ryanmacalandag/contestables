import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fontlogo, fontlogoalt, fontheading, fontbody } from "@/_components/fonts/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:'Contestables | Keep track of your challenges with friends',
    template: '%s | Contestables.com'
  },
  description: "An app to keep track of your challenges with friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontlogo.variable, fontlogoalt.variable, fontheading.variable, fontbody.variable } w-full h-screen flex bg-slate-100 font-body text-base lg:text-lg`}>{children}</body>
    </html>
  );
}
