
import Header from "@/components/gobal/header";
import "../globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/gobal/footer";


const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.className} bg-background container mx-auto max-w-screen-2xl`}
        >
        <Header/>
        {children}
<Footer/>
      </body>
    </html>
  );
}
