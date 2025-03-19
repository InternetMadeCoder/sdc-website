import React from "react";
import MasonryGrid from "@/components/Gallery/MasonryGrid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Hero Section with Background Image */}
        <div className="relative h-[40vh] md:h-[60vh] bg-black">
          <img
            src="/bg/bg-gallery.jpeg"
            alt="Gallery Hero"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold text-white text-center">
              Our Journey in Pixels
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 z-50"></div>
        </div>

        {/* Content Section with Masonry Grid */}
        <div className="bg-white">
          <MasonryGrid />
        </div>
      </div>
    </main>
  );
}
