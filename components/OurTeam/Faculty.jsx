import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faculty } from "./facultyData";
import { FaLinkedin } from "react-icons/fa";
import { AnimatedSection, AnimatedTitle } from "./AnimatedSection";

const FacultySection = ({ title, members, direction = "left" }) => {
  const slideAnimation = {
    offscreen: {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.2,
      },
    },
  };

  // Special handling for faculty coordinators
  const isFacultyCoordinators = title === "SDC Coordinators";
  const firstRow = isFacultyCoordinators ? members.slice(0, 3) : members;
  const secondRow = isFacultyCoordinators ? members.slice(3) : [];

  const gridColsClass = () => {
    if (title === "Advisors") {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"; // Show 4 columns for advisors on large screens
    }
    return members.length <= 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  // Adjust gap classes for advisors to be smaller
  const getGapClasses = () => {
    if (title === "Advisors") {
      return "gap-8 lg:gap-12"; // Reduced gaps for advisors
    }
    return "gap-20 lg:gap-32"; // Keep existing gaps for other sections
  };

  const PersonCard = ({ person }) => (
    <div key={person.id}>
      <div className="flex flex-col items-center gap-2 group">
        <Image
          src={person.profile_picture}
          width={150}
          height={150}
          alt="Profile Picture"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full mb-4"
        />
        <Link href={person.linkedin} target="_blank" className="min-w-[240px]">
          <h3 className="font-bold flex items-center gap-1 text-base text-center whitespace-nowrap justify-center">
            {person.fullName}
            <FaLinkedin />
          </h3>
        </Link>
        <div className="flex flex-col gap-1 text-sm text-center">
          <p className="transition-all duration-300 group-hover:font-bold">
            {person.designation}
          </p>
          <p>{person.email}</p>
          <p>{person.contact_number}</p>
        </div>
      </div>
    </div>
  );

  return (
    <AnimatedSection direction={direction}>
      <div className="flex flex-col gap-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-center font-bold relative inline-block mx-auto">
          <span className="relative">
            {title}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500"></span>
          </span>
          <span className="absolute -left-1 top-0 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-600 to-orange-600 opacity-30 blur-[2px]">
            {title}
          </span>
        </h3>
        <div className="flex flex-col gap-16">
          {" "}
          {/* Reduced from gap-24 */}
          {/* First row */}
          <div
            className={`${gridColsClass()} ${getGapClasses()} max-w-full mx-auto grid place-items-center`}
          >
            {" "}
            {/* Increased from max-w-5xl */}
            {firstRow.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
          {/* Second row - only for faculty coordinators */}
          {isFacultyCoordinators && secondRow.length > 0 && (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${getGapClasses()} max-w-7xl mx-auto place-items-center`}
            >
              {" "}
              {/* Increased from max-w-3xl */}
              {secondRow.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Faculty = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <AnimatedTitle>Our Driving Force</AnimatedTitle>
      <div className="flex flex-col gap-16 w-full px-4 lg:px-16">
        {" "}
        {/* Reduced from px-8 lg:px-32 */}
        <FacultySection
          title="SDC Directors"
          members={faculty.directors}
          direction="left"
        />
        <FacultySection
          title="SDC Coordinators"
          members={faculty.facultyCoordinators}
          direction="right"
        />
        <FacultySection
          title="Advisors"
          members={faculty.advisors}
          direction="left"
        />
      </div>
    </div>
  );
};

export default Faculty;
