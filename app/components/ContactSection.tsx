"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="">
      <div className=" text-zinc-600 ">
        <div className="max-w-xl space-y-3">
          <h3 className="text-green-600 font-semibold">Contact</h3>
          <p className="text-zinc-700 text-3xl font-semibold sm:text-4xl">Let us know how we can help</p>
          <p className=" text-justify">We’re here to help and answer any question you might have, We look forward to hearing from you .</p>
        </div>

        <div>
          <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
            {contactMethods.map((item, idx) => (
              <li key={idx}>
                <h4 className="text-zinc-700 text-lg font-medium">{item.title}</h4>
                <div className="mt-3 flex items-center gap-x-3">
                  <div className="flex-none text-green-800 animate-bounce">{item.icon}</div>
                  {renderContactInfo(item)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function renderContactInfo(item: any) {
  switch (item.title) {
    case "Location":
      return (
        <Link
          target="_blank"
          href={"https://maps.app.goo.gl/zCamjXNY9A3ZxDvJA"}>
          {item.contact}
        </Link>
      );
    case "Phone":
      return <Link href={`tel:${item.contact}`}>{item.contact}</Link>;
    case "Email":
      return <Link href={`mailto:${item.contact}`}>{item.contact}</Link>;
    default:
      return <p>{item.contact}</p>;
  }
}

const contactMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    contact: "Putalisadak, Kathmandu, Nepal",
    title: "Location",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    contact: "9766896866",
    title: "Phone",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "webcloudsnepal@gmail.com",
    title: "Email",
  },
];
