"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="flex flex-col items-center max-lg:mt-10">
        {/* <div
          // removed unused design element
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          {/* <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          /> */}

        <h2 className="text-2xl font-bold mb-8">
          <span className="text-White">Companies</span> <span className="text-purple">I've Worked With</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <span className="font-bold text-lg md:text-xl text-White">
                  {company.name}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
