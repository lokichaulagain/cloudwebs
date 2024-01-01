import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";

const roboto = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clouds Web Nepal",
  description: "Cloud Nepal Web is your premier software provider in Nepal, specializing in website, mobile app, and web app development services. Contact us at (+977) 9766896866 or visit our location at Putalisadak, Kathmandu, Nepal. Reach out via email at webcloudsnepal@gmail.com  or visit cloudswebnepal.com to bring your digital ideas to life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={roboto.className}>
        <Header />
        <div className=" max-w-screen-xl mx-auto px-4 gap-12 text-zinc-600 md:px-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
