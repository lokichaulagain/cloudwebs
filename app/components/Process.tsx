import Image from "next/image";
import React from "react";
import demo from "../../public/image.svg";

export default function Process() {
  return (
    <div>
      <p className=" text-2xl font-medium text-zinc-700 mb-4 lg:text-4xl">How we work in team</p>
      <div className="loader"></div>
      <Image
        src={demo}
        alt="img"
        height={1000}
        width={2000}
      />
    </div>
  );
}
