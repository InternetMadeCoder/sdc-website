import React from "react";
import Button from "../../ui/Button";
import { projects } from "@/components/Portfolio/constants";
import Carousel from "../../ui/Carousel";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <div className="relative z-10 flex flex-col h-screen justify-center">
      <div className="flex flex-col justify-center items-start gap-4 xl:px-20 lg:px-24 md:px-28 sm:pl-32 sm:pr-8">
        {/* Maintain original heading structure with slightly improved spacing */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          PORTFOLIO
        </h1>
        <h2 className="text-base lg:text-lg max-w-md">
          Innovation Unleashed: A Glimpse into the Innovation Realm at MUJ
        </h2>

        {/* Enhanced carousel with improved size and readability */}
        <div className="mb-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <Carousel autoSlide className="shadow-2xl">
            {projects.slice(2, 5).map((display) => (
              <div
                key={display.id}
                className="flex flex-col h-52 sm:h-56 p-5 sm:p-7 rounded-xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md relative transition-all duration-300 hover:scale-[1.02] hover:from-white/20 hover:via-white/15 hover:to-white/10 border border-white/10"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-wide mb-2 sm:mb-3 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    {display.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-12 bg-gradient-to-r from-white/60 to-transparent"></div>
                    <div className="h-1 w-1 rounded-full bg-white/60"></div>
                  </div>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                    {display.description.slice(0, 140)}...
                  </p>
                </div>
                <Link
                  href={{
                    pathname: "/projects",
                    query: { openProject: display.id },
                  }}
                  className="absolute bottom-5 sm:bottom-7 right-5 sm:right-7 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
                    Read more
                  </span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Enhanced button with slightly improved styling */}
        <Button
          className="px-8 py-2 text-base font-medium"
          link="/projects"
          title="EXPLORE"
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
