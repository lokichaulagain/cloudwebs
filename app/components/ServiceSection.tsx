
import React from "react";

export default function ServiceSection() {
  return (
    <section
      id="services"
      className=" ">
      <h3 className="text-green-600 font-semibold mb-2">Our Services & Expertise</h3>
      <div className=" flex gap-4  flex-col md:flex-row  text-zinc-600">
        <p className=" text-2xl md:text-4xl font-semibold w-full text-zinc-700">
          Following are the services <br /> that we offers
        </p>
        <p className=" w-full">We build secure . efficient and visually stunning mobiles apps (android & ios), desktop apps, web apps , ecommerce solution , ERP system and custom softwares to meet your business goals.</p>
      </div>

      <div className=" flex flex-col  gap-8 mt-12">
        {services.map((item: any, index: number) => (
          <div key={index}>
            <div className="grid grid-cols-3 gap-2 md:gap-8 items-center">
              <button className="expand_container">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-xs md:text-lg flex items-center justify-center pt-1 font-semibold">{item.name}</span>
              </button>
              <p className=" text-xs md:text-sm ms-5 md:ms-0 flex items-center gap-1">
                <IconBxBadgeCheck />
                {item.completed}{" "}
              </p>
              <p className=" text-xs md:text-sm flex items-center gap-1">
                <IconLanPending />
                {item.running}
              </p>
            </div>
            <hr className=" mt-1" />
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    name: "Website Development",
    completed: "20+ Project Completed",
    running: "3 Running Project",
  },

  {
    name: "Mobile Apps Development ",
    completed: "3 Project Completed",
    running: "1 Running Project",
  },

  {
    name: "Web Application Development",
    completed: "4+ Project Completed",
    running: "2 Running Project",
  },

  {
    name: "Digital Marketing",
    completed: "8+ Project Completed",
    running: "2 Running Project",
  },

  {
    name: "Brand Promotion",
    completed: "7+ Project Completed",
    running: "2 Running Project",
  },

  {
    name: "Graphic Design ",
    completed: "40+ Project Completed",
    running: "4 Running Project",
  },
];

function IconBxBadgeCheck() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className=" h-4 w-5 text-green-700 animate-pulse">
      <path d="M4.035 15.479A3.976 3.976 0 004 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479zm1.442-5.403l1.102-.293-.434-1.053A1.932 1.932 0 016 8c0-1.103.897-2 2-2 .247 0 .499.05.73.145l1.054.434.293-1.102a1.99 1.99 0 013.846 0l.293 1.102 1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2 0 .247-.05.5-.145.73l-.434 1.053 1.102.293a1.993 1.993 0 010 3.848l-1.102.293.434 1.053c.095.23.145.483.145.73 0 1.103-.897 2-2 2-.247 0-.499-.05-.73-.145l-1.054-.434-.293 1.102a1.99 1.99 0 01-3.846 0l-.293-1.102-1.054.434A1.935 1.935 0 018 18c-1.103 0-2-.897-2-2 0-.247.05-.5.145-.73l.434-1.053-1.102-.293a1.993 1.993 0 010-3.848z" />
      <path d="M15.742 10.71l-1.408-1.42-3.331 3.299-1.296-1.296-1.414 1.414 2.704 2.704z" />
    </svg>
  );
}

function IconLanPending() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className=" h-4 w-5 text-green-700 animate-pulse">
      <path d="M4 1c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2H1v2h12V9h-3c1.11 0 2-.89 2-2V3c0-1.11-.89-2-2-2H4m0 2h6v4H4V3m-1 9v2h2v-2H3m11 1c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h-3v2h12v-2h-3c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2h-6M3 15v2h2v-2H3m11 0h6v4h-6v-4M3 18v2h2v-2H3m3 0v2h2v-2H6m3 0v2h2v-2H9z" />
    </svg>
  );
}
