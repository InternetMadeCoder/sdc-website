import React from "react";
import Link from "next/link";
import "./GallerySection/styles.css";

const GallerySection = () => {
  const images = [
    "/gallery-section/gallery1.jpeg",
    "/gallery-section/gallery2.jpeg",
    "/gallery-section/gallery3.jpeg",
    "/gallery-section/gallery4.jpeg",
    "/gallery-section/gallery5.jpeg",
  ];

  return (
    <div className="py-4 md:py-8 flex flex-col items-center gap-4 md:gap-8 relative z-30 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
        OUR GALLERY
      </h2>
      <div className="film-strip-container w-screen overflow-hidden">
        <div className="film-strip">
          {[...images, ...images].map((image, index) => (
            <div key={index} className="film-frame">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Filmstrip Holes for Effect */}
        <div className="film-holes top-holes hidden md:flex">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="film-hole" />
          ))}
        </div>
        <div className="film-holes bottom-holes hidden md:flex">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="film-hole" />
          ))}
        </div>
      </div>
      <Link
        href="/gallery"
        className="relative inline-block px-8 py-4 bg-[#EF9535] text-white font-semibold overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
      >
        Explore Gallery
      </Link>
    </div>
  );
};

export default GallerySection;
