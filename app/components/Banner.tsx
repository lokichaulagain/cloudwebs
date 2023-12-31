"use client";
import Image from "next/image";
import banner from "../../public/banner.png";
import Link from "next/link";


export default function Banner() {
  return (
    <section id="home">
      <div className=" graph_bg_effect py-4 pt-12">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-green-600 font-medium">Empowering your Businesses with Software Solutions.</h1>
          <h2 className="text-4xl text-zinc-700 font-extrabold mx-auto md:text-5xl">
            Software Solutions for
            <button className="hero_section_transition">
              <span>&nbsp;Seamless Business Transformation and Growth.&nbsp;</span>
              <span
                aria-hidden="true"
                className="hover-text">
                &nbsp;Seamless Business Transformation and Growth.&nbsp;
              </span>
            </button>
          </h2>
          <p className="max-w-2xl mx-auto">We build websites, mobiles apps (android & ios), desktop apps, web apps , ecommerce solution , ERP system and custom softwares, providing comprehensive software solutions for seamless digital experiences and business success. Lets build your start-up ideas to a Product</p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 text-sm">
            <Link
              href="tel:9864755749"
              className="block py-2 px-4 text-white font-medium bg-green-800 duration-150 hover:bg-green-700 active:bg-green-800 rounded-lg shadow-lg hover:shadow-none">
              Phone Call
            </Link>
            <Link
              href="mailto:webcloudsnepal@gmail.com"
              className="block py-2 px-4 text-zinc-700 hover:text-zinc-500 font-medium duration-150 active:bg-zinc-100 border rounded-lg">
              Send Mail
            </Link>
          </div>
        </div>
        <div className="mt-14">
          <Image
            src={banner}
            alt="img"
            width={2000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}
