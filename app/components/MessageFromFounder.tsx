import React from "react";

export default function MessageFromFounder() {
  return (
  <div className="technology_container py-8">
      <figure className="max-w-screen-md mx-auto text-center   ">
      <svg
        className="w-10 h-10 mx-auto mb-3 text-zinc-400 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
      <p className="text-zinc-700 leading-relaxed tracking-wide  ">Since 2020, we’ve been committed to helping our country. We’ve faced challenges to make things better for you. We believe that ambitious goals lead to significant accomplishments, and together, we can contribute to the nation’s progress. Now is the moment to embrace new and creative ideas to support each person and enhance growth in all areas.</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-zinc-500 ">
          <cite className="pe-3 font-medium text-zinc-700 ">Abhishek Mishra</cite>
          <cite className="ps-3 text-sm text-zinc-500 ">Message from Founder</cite>
        </div>
      </figcaption>
    </figure>
  </div>
  );
}
