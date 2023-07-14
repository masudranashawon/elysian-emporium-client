import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Elysian Emporium | Home",
  description:
    "Welcome to Elysian Emporium - your one-stop destination for all your online shopping needs. Discover a wide range of high-quality products, including clothing, accessories, electronics, home decor, and more. Shop with confidence and enjoy a seamless browsing experience on our user-friendly eCommerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(poppins.className, "bg-light , text-dark")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
