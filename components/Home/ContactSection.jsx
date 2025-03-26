import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-white flex flex-col items-start gap-4 relative z-30 md:items-center white-section">
      <h2 className="text-4xl">CONTACT US</h2>
      <p className="font-medium text-lg">
        Connect with us for inquiries or collaboration
      </p>
      <Link
        href="/contact-us"
        className="relative inline-block px-8 py-4 bg-[#EF9535] text-white font-semibold overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
      >
        Read More
      </Link>
    </div>
  );
};

export default ContactSection;
