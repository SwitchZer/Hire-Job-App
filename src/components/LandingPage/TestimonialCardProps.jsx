import React from "react";
import Avatar from "./Avatar";

function TestimonialCardProps({ avatar, name, title, testimonial }) {
  return (
    <div className="flex flex-col grow px-20 pt-7 pb-11 w-full bg-white shadow-lg max-md:px-5 max-md:mt-7">
      <Avatar src={avatar.src} alt={avatar.alt} />{" "}
      <h3 className="mt-5 text-3xl text-center font-semibold text-gray-800 leading-[56.1px]">
        {name}
      </h3>
      <p className="self-center mt-3.5 text-lg leading-7 text-center text-zinc-400">
        {title}
      </p>
      <p className="mt-5 text-lg leading-7 text-center text-gray-600">
        {testimonial}
      </p>
    </div>
  );
}

export default TestimonialCardProps;
