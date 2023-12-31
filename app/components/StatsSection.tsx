"use client";

export default function StatsSection() {
  return (
    <section className="banner_container md:px-4 py-8">
      <div className=" justify-between  lg:flex">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          <h3 className="text-zinc-700 text-3xl font-semibold sm:text-4xl">We do our best to make customers always happy.</h3>
          <p className="mt-3 max-w-xl mx-auto lg:mx-0">We strive to keep you smiling! Our team puts in the effort to ensure your satisfaction, making sure you’re always happy with our products and services.</p>
        </div>
        <div className="mt-12 lg:mt-0">
          <ul className=" flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row grid grid-cols-2 lg:grid lg:grid-cols-2">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="text-center w-full px-4 py-6 sm:w-auto lg:py-4">
                <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    data: "22+",
    title: "Project Completed",
  },
  {
    data: "14+",
    title: "Qualified Professionals",
  },
  {
    data: "2+",
    title: "In House Project",
  },
  {
    data: "6+",
    title: "Different Services",
  },
];
