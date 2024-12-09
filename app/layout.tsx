import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/gobal/header";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/gobal/footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
export const metadata: Metadata = {
  title: "Morent-Cars",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-background ${plusJakarta.className} container max-w-screen-xl mx-4`}
        >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}