"use client";

import React, { useState } from "react";
import { students, studentLeadership } from "./studentsData";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const LeadershipCard = ({ person, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="flex flex-col items-center"
  >
    <Image
      src={person.profile_picture}
      width={150}
      height={150}
      alt="Profile Picture"
      priority={true}
      className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full mb-4 object-cover"
    />
    <Link href={person.linkedin} target="_blank">
      <h3 className="font-bold text-base lg:text-lg flex items-center gap-1 text-center">
        {person.fullName}
        <FaLinkedin />
      </h3>
    </Link>
    <p className="text-sm lg:text-base text-center font-medium">
      {person.Role}
    </p>
  </motion.div>
);

const Students = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [leadershipYear, setLeadershipYear] = useState("2025");

  const leadership = {
    2024: {
      director: {
        fullName: "Abhijaat Pandey",
        Role: "Student Director",
        linkedin: "https://in.linkedin.com/in/abhijaat-pandey-078942260",
        profile_picture: "/profile-images/students/Abhijaat-Pandey.png",
      },
      coordinators: [
        {
          fullName: "Abhay Tripathi",
          Role: "Student Coordinator",
          linkedin: "https://linkedin.com/in/abhaytri/",
          profile_picture: "/profile-images/students/Abhay-Tripathi.jpg",
        },
      ],
    },
    2025: studentLeadership,
  };

  const uniqueYears = [
    "All",
    ...Array.from(new Set(students.map((student) => student.year))).sort(
      (a, b) => a - b
    ),
  ]; // Sort years in ascending order

  const filteredStudents =
    selectedYear === "All"
      ? students
      : students.filter((student) => student.year === selectedYear);

  return (
    <div className="flex flex-col gap-32">
      {" "}
      {/* Increased gap between sections */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold">
          Student Team
        </h2>

        {/* Leadership Section with Year Toggle */}
        <div className="mt-16">
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white/30 p-1 rounded-full shadow-lg backdrop-blur-sm">
              {["2024", "2025"].map((year) => (
                <button
                  key={year}
                  onClick={() => setLeadershipYear(year)}
                  className={`px-8 py-2 rounded-full transition-all duration-300 ease-in-out
                    ${
                      leadershipYear === year
                        ? "bg-gradient-to-r from-[#D34747] to-[#FF8370] text-white shadow-md transform scale-105"
                        : "bg-transparent hover:bg-gray-100/50 text-gray-700 hover:scale-102"
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={leadershipYear}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex justify-center gap-16 lg:gap-32">
              {leadershipYear === "2024" ? (
                <>
                  <LeadershipCard
                    person={leadership[leadershipYear].director}
                    index={0}
                  />
                  {leadership[leadershipYear].coordinators.map(
                    (coordinator, index) => (
                      <LeadershipCard
                        key={index}
                        person={coordinator}
                        index={index + 1}
                      />
                    )
                  )}
                </>
              ) : (
                <>
                  <LeadershipCard
                    person={leadership[leadershipYear].director}
                    index={0}
                  />
                  {leadership[leadershipYear].coordinators.map(
                    (coordinator, index) => (
                      <LeadershipCard
                        key={index}
                        person={coordinator}
                        index={index + 1}
                      />
                    )
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Media Team Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-16">
          Media Team
        </h2>
        <div className="flex justify-center gap-16 lg:gap-32">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <Image
                src="/profile-images/students/blank-pfp.png"
                width={150}
                height={150}
                alt="Profile Picture"
                priority={true}
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full mb-4 object-cover"
              />
              <Link href="#" target="_blank">
                <h3 className="font-bold text-base lg:text-lg flex items-center gap-1 text-center">
                  Position Open
                  <FaLinkedin />
                </h3>
              </Link>
              <p className="text-sm lg:text-base text-center font-medium">
                Media Team Member
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Students Section with Year Toggle */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-normal text-gray-800 mb-12">
          All Students
        </h2>
        <div className="flex justify-center gap-4 mb-16">
          <div className="bg-white/30 p-1 rounded-full shadow-lg backdrop-blur-sm">
            {uniqueYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-8 py-2 rounded-full transition-all duration-300 ease-in-out
                  ${
                    selectedYear === year
                      ? "bg-gradient-to-r from-[#D34747] to-[#FF8370] text-white shadow-md transform scale-105"
                      : "bg-transparent hover:bg-gray-100/50 text-gray-700 hover:scale-102"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4 py-8 lg:px-32 gap-8"
        >
          {filteredStudents.map((student, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={student.profile_picture}
                width={150}
                height={150}
                alt="Profile Picture"
                priority={true}
                className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full mb-4 object-cover"
              />
              <Link href={student.linkedin} target="_blank">
                <h3 className="font-bold text-[12px] lg:text-base flex items-center gap-1 text-center">
                  {student.fullName}
                  <FaLinkedin />
                </h3>
              </Link>
              <p className="text-[10px] lg:text-base text-center">
                {student.Role}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Students;
