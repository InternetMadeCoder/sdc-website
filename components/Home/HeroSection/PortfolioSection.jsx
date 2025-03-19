import React from "react";
import Button from "../../ui/Button";
import { projects } from "@/components/Portfolio/constants";
import Carousel from "../../ui/Carousel";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <div className="relative z-10 flex flex-col h-screen justify-center">
      <div className="flex flex-col justify-center items-start gap-6 xl:px-20 lg:px-24 md:px-28 sm:pl-32 sm:pr-8">
        {/* Maintain original heading structure with slightly improved spacing */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          PORTFOLIO
        </h1>
        <h2 className="text-base lg:text-lg max-w-md">
          Innovation Unleashed: A Glimpse into the Innovation Realm at MUJ
        </h2>

        {/* Enhanced carousel with improved size and readability */}
        <div className="my-6 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <Carousel autoSlide className="shadow-lg">
            {projects.slice(2, 5).map((display) => (
              <div
                key={display.id}
                className="flex flex-col justify-between h-64 border-2 p-6 rounded-xl bg-opacity-10 bg-white backdrop-blur-sm"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {display.title}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {display.description.slice(0, 180)}...
                  </p>
                </div>
                <Link
                  href={{
                    pathname: "/projects",
                    query: { openProject: display.id },
                  }}
                  className="text-sm mt-4 underline font-medium self-end"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Enhanced button with slightly improved styling */}
        <Button
          className="mt-4 px-8 py-2 text-base font-medium"
          link="/projects"
          title="EXPLORE"
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
