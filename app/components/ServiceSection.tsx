import React from "react";

export default function ServiceSection() {
  return (
    <section className=" ">
         <h3 className="text-indigo-600 font-semibold mb-2">Our Services & Expertise</h3>
      <div className=" flex gap-4  flex-col md:flex-row  text-zinc-600">
        <p className=" text-2xl md:text-4xl font-semibold w-full text-zinc-700">
          Following are the services <br /> that we offers
        </p>
        <p className=" w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, reiciendis blanditiis voluptas amet error accusamus quisquam voluptate, quidem doloremque maxime quos dicta? Quo nulla molestias dolorum, sint similique voluptas dolores autem aliquam dicta, molestiae ab odit!</p>
      </div>

      <div className=" flex flex-col  gap-8 mt-12">
        {services.map((item: any, index: number) => (
          <div key={index}>
            <div className="grid grid-cols-3 gap-2 md:gap-8 items-center">
              {/* <p className=" text-xs md:text-2xl font-semibold">{item.name}</p> */}
              <button className="expand_container">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-xs md:text-lg flex items-center justify-center pt-1 font-semibold">{item.name}</span>
              </button>
              <p className=" text-xs md:text-sm ms-5 md:ms-0">25+ Project Completed</p>
              <p className=" text-xs md:text-sm">3 Running Project</p>
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
    completed: "20+ Project Completed",
    running: "3 Running Project",
  },

  {
    name: "Web Application Development",
    completed: "20+ Project Completed",
    running: "3 Running Project",
  },

  {
    name: "Digital Marketing",
    completed: "20+ Project Completed",
    running: "3 Running Project",
  },

  {
    name: "Brand Promotion",
    completed: "20+ Project Completed",
    running: "3 Running Project",
  },

  {
    name: "Graphic Design ",
    completed: "20+ Project Completed",
    running: "3 Running Project",
  },
];
