"use client";
import everrst from "../images/clients/everest.png";
import lumbini from "../images/clients/thelumbini.jpg";
import manas from "../images/clients/manas.svg";
import scpcc from "../images/clients/scpccnepal.png";
import tsubaki from "../images/clients/tsubaki.png";
import quiz from "../images/clients/quiz.webp";
import wisecube from "../images/clients/wisecube.png";
import Image from "next/image";

export default function OurPartners() {
  return (
    <section className="">
      <div className="max-w-xl space-y-3">
        <h3 className="text-indigo-600 font-semibold">Technology & Tools</h3>
        <p className="text-zinc-700 text-3xl font-semibold sm:text-4xl">Our Trusted Partner</p>
        <p>Explore our valued partnerships through our client section. Witness the brands we’ve proudly collaborated with, each image representing a story of successful projects and satisfied clients. Join us on this journey, and let’s create success together.</p>
      </div>

      <div className="mt-12 flex justify-center image-container ">
        <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
          {[everrst, wisecube, manas, lumbini, , scpcc, tsubaki, quiz].map((item, index) => (
            <div
              key={index}
              className="image-item">
              <Image
                src={item}
                alt="client-image"
                className=" h-20 w-30 object-contain cursor-pointer"
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
