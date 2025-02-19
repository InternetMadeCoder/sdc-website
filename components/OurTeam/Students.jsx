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
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
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
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Student Team
      </h2>

      {/* Leadership Section */}
      <div className="mt-16 mb-24">
        {/* Leadership team in one line */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto px-4">
          <LeadershipCard person={studentLeadership.director} index={0} />
          {studentLeadership.coordinators.map((coordinator, index) => (
            <LeadershipCard
              key={index}
              person={coordinator}
              index={index + 1}
            />
          ))}
        </div>
      </div>

      {/* Existing Year Filter and Students Grid */}
      <div className="flex justify-center mt-8">
        <select
          className="p-2 w-60 lg:w-[512px] border-b-2 border-black focus:outline-none"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {uniqueYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4 py-16 lg:px-32 gap-8">
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
      </div>
    </div>
  );
};

export default Students;
