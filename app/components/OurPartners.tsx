"use client";
import everrst from "../images/clients/everest.png";
import lumbini from "../images/clients/thelumbini.jpg";
import manas from "../images/clients/manas.svg";
import scpcc from "../images/clients/scpccnepal.png";
import tsubaki from "../images/clients/tsubaki.png";
import quiz from "../images/clients/quiz.webp";
import wisecube from "../images/clients/wisecube.png";
import dhulikhel from "../images/clients/dhulikhel.png";
import diwasi from "../images/clients/diwasi.png";
import urban from "../images/clients/urban.png";
import eatery from "../images/clients/eatery.jpg";
import farm from "../images/clients/farm.jpg";
import grik from "../images/clients/grik.jpg";
import pro from "../images/clients/pro.jpg";
import teeth from "../images/clients/teeth.jpg";
import reli from "../images/clients/reli.jpg";
import essence from "../images/clients/essence.jpg";
import neo from "../images/clients/neo.jpg";
import name from "../images/clients/name.jpg";
import valmiki from "../images/clients/valmiki.jpg";





import Image from "next/image";
import { useState } from "react";

export default function OurPartners() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="">
      <div className="max-w-xl space-y-3">
        <h3 className="text-green-600 font-semibold">Honoralble Partners</h3>
        <p className="text-zinc-700 text-3xl font-semibold sm:text-4xl">Our Trusted Partner</p>
        <p className="text-justify">Explore our valued partnerships through our client section. Witness the brands we’ve proudly collaborated with, each image representing a story of successful projects and satisfied clients. Join us on this journey, and let’s create success together.</p>
      </div>

      <div className="mt-12 flex  justify-center image-container ">
        <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
          {[everrst, wisecube, manas, lumbini, , scpcc, tsubaki, quiz, dhulikhel, urban, diwasi, eatery, farm,grik ,pro ,teeth ,reli , essence,neo, name, valmiki].map((item, index) => (
            <div
              key={index}
              className={`image-item ${hoveredIndex !== null && hoveredIndex !== index ? "black-and-white" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={item}
                alt="client-image"
                height={500}
                width={500}
                blurDataURL="our partner"
                placeholder="blur"
                quality={20}
                className=" h-20 w-30 object-contain cursor-pointer"
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
