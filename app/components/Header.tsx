"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [state, setState] = useState(false);
  const navRef = useRef<any>();

  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  return (
    <nav
      ref={navRef}
      className="bg-indigo-600 w-full top-0 z-20 text-zinc-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <p>Logo</p>
          <div className="lg:hidden">
            <button
              className=" outline-none p-2 rounded-md"
              onClick={() => setState(!state)}>
              {state ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"}`}>
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              <Link
                href="mailto:someone@example.com"
                className="mail_button flex items-center py-2 px-4 text-center text-indigo-600 hover:text-indigo-600 bg-white  hover:bg-indigo-700  rounded-md shadow transition-all ease-in-out  ">
                <div className="svg-wrapper">
                  <IconBxMailSend />
                </div>
                <span className=" text-sm"> Get intouch</span>
              </Link>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigations.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="font-medium">
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

const navigations = [
  { title: "Home", path: "/" },
  { title: "About", path: "/" },
  { title: "Services", path: "/" },
  { title: "Technology", path: "/" },
];

function IconBxMailSend() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className=" h-4 w-4">
      <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 001.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z" />
      <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z" />
    </svg>
  );
}
