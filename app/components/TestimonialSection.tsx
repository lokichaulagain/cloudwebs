"use client";
import { useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Dipak Chandra Baral",
      title: "Managing Director",
      company: "Everest Hospital",
      quote: "Absolutely delighted with the web app by [Your Company]. It's a game-changer for Everest Hospital. Incredible service, seamless process, and total dedication. Highly recommend their expertise and commitment!",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className=" technology_container">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-indigo-600 font-semibold pb-6">What our client are saying about ?</h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-gray-800 text-xl font-semibold sm:text-2xl text-justify md:text-center">“{item.quote}“</p>
                    </blockquote>
                    <div className="mt-6">
                      <div className=" flex items-center justify-center">
                        <p className=" h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center font-medium">{item.name.split("")[0]}</p>
                      </div>
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold">{item.name}</span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title} ({item.company})
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                  onClick={() => setCurrentTestimonial(idx)}></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
