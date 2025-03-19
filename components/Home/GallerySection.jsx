import React from "react";
import Button from "../ui/Button";
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
      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">OUR GALLERY</h2>
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
      <Button
        className="bg-yellow-400 mt-4 md:mt-8 text-sm md:text-base"
        link="/gallery"
        title="Explore Gallery"
      />
    </div>
  );
};

export default GallerySection;
