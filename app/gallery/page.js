import React from "react";
import MasonryGrid from "@/components/Gallery/MasonryGrid";
import Head from "next/head";

export default function GalleryPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <style>{`
          body {
            overflow-x: hidden;
          }
          .gallery-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          .gallery-content {
            flex: 1;
          }
        `}</style>
      </Head>
      <main className="gallery-container">
        <div className="relative w-full">
          {/* Hero Section with Background Image */}
          <div className="relative h-[40vh] md:h-[60vh] bg-black">
            <img
              src="/bg/bg-gallery.jpeg"
              alt="Gallery Hero"
              className="w-full h-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="px-4 md:px-8 max-w-4xl text-center">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
                  Our Journey in Pixels
                </h1>
                <div className="w-16 md:w-20 h-1 bg-white mx-auto mt-3 mb-3 opacity-80"></div>
              </div>
            </div>
          </div>
         
          {/* Content Section with Masonry Grid */}
          <div className="bg-white w-full gallery-content">
            <div className="w-full">
              <MasonryGrid />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}