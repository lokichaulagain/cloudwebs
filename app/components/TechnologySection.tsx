import Image from "next/image";
import React from "react";
import react from "../images/technology/reactjs.svg";
import next from "../images/technology/nextjs.svg";
import graphql from "../images/technology/graphql.svg";
import jest from "../images/technology/jest.svg";
import js from "../images/technology/js.svg";
import mdx from "../images/technology/mdx.svg";
import nest from "../images/technology/nestjs.svg";
import radix from "../images/technology/radix.svg";
import tailwind from "../images/technology/tailwindcss.svg";
import trpc from "../images/technology/trpc.svg";
import ts from "../images/technology/ts.svg";
import vercel from "../images/technology/vercel.svg";

export default function TechnologySection() {
  return (
    <section className="technology_container py-12 md:px-4">
      <div className="max-w-xl space-y-3">
        <h3 className="text-indigo-600 font-semibold">Technology & Tools</h3>
        <p className="text-zinc-700 text-3xl font-semibold sm:text-4xl">Technology and Tools that we use to make robust software.</p>
        <p>We’re here to help and answer any question you might have, We look forward to hearing from you .</p>
      </div>

      <div className=" grid grid-cols-4 gap-5 mt-4">
        {technologies.map((item: any, index: number) => (
          <div
            key={index}
            className="tooltip-container">
            <span className="tooltip">{item.tooltip}</span>
            <Image
              src={item.image}
              alt="img"
              className="image text cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const technologies = [
  {
    image: react,
    tooltip: "React",
  },

  {
    image: next,
    tooltip: "Nestjs",
  },

  {
    image: graphql,
    tooltip: "Nestjs",
  },

  {
    image: nest,
    tooltip: "Nestjs",
  },

  {
    image: js,
    tooltip: "Nestjs",
  },

  {
    image: ts,
    tooltip: "Nestjs",
  },

  {
    image: trpc,
    tooltip: "Nestjs",
  },

  {
    image: tailwind,
    tooltip: "Nestjs",
  },

  {
    image: vercel,
    tooltip: "Nestjs",
  },

  {
    image: jest,
    tooltip: "Nestjs",
  },

  {
    image: mdx,
    tooltip: "Nestjs",
  },

  {
    image: radix,
    tooltip: "Nestjs",
  },
];
