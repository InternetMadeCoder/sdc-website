"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: `/gallery-section/gallery${i + 1}.jpeg`,
}));

const MasonryGrid = () => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.target.classList.toggle("grayscale", !entry.isIntersecting)
        ),
      { root: scrollRef.current, threshold: 0.7 }
    );

    const images = document.querySelectorAll(".gallery-image");
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft === 0) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
      }
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      if (
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
        scrollRef.current.scrollWidth - 10
      ) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
      }
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="relative py-8 md:py-16 bg-white">
        {/* Left Scroll Button */}
        <button
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white hover:bg-black p-2 md:p-4 rounded-full shadow-xl transition-all"
          onClick={scrollLeft}
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Image Scroll Section */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar"
          onMouseEnter={() => setIsScrolling(true)}
          onMouseLeave={() => setIsScrolling(false)}
        >
          <div className="flex gap-3 md:gap-8 px-4 md:px-16 min-w-max">
            {[...images, ...images, ...images].map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="relative group cursor-pointer transition-all"
                onClick={() => handleImageClick(image)}
              >
                {/* Image with Subtle Hover Effect */}
                <img
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  className="gallery-image w-[280px] md:w-[450px] h-[200px] md:h-[320px] object-cover rounded-xl transition-transform duration-500 shadow-lg grayscale hover:grayscale-0 hover:scale-105 hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white hover:bg-black p-2 md:p-4 rounded-full shadow-xl transition-all"
          onClick={scrollRight}
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-7xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black text-white p-2 rounded-full"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt="Enlarged view"
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryGrid;
