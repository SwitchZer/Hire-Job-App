import * as React from "react";
import TestimonialCardProps from "./TestimonialCardProps";

function TestimonialCard() {
  const testimonials = [
    {
      avatar: {
        src: "/Ellipse 320.png",
        alt: "Avatar of Harry Styles",
      },
      name: "Harry Styles",
      title: "Web Developer",
      testimonial: "The ease of finding talent here makes us save more time.",
    },
    {
      avatar: {
        src: "/Ellipse 323.png",
        alt: "Avatar of Niall Horan",
      },
      name: "Niall Horan",
      title: "Web Developer",
      testimonial: "Peworld made it easy for me to get hired.",
    },
    {
      avatar: {
        src: "/Ellipse 325.png",
        alt: "Avatar of Louis Tomlinson",
      },
      name: "Louis Tomlinson",
      title: "Web Developer",
      testimonial: "Peworld made it possible for me to get my dream job",
    },
  ];
  return (
    <section className="flex justify-center items-center px-16 py-20 mt-20 w-full bg-gray-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-4 w-full max-w-[1073px] max-md:max-w-full">
        <h2 className="self-center text-4xl font-semibold text-gray-800 leading-[56.16px] max-md:max-w-full">
          Their opinion about peworld
        </h2>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              >
                <TestimonialCardProps {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCard;
