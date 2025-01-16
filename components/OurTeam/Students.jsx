"use client"

import React, { useState } from 'react';
import { students } from './studentsData';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";

const Students = () => {
    const [selectedYear, setSelectedYear] = useState('2024');

    const uniqueYears = Array.from(new Set(students.map(student => student.year)));

    const filteredStudents = selectedYear ? students.filter(student => student.year === selectedYear) : students;

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Students</h2>
            <div className="flex justify-center mt-8">
                <select className="p-2 w-60 lg:w-[512px] border-b-2 border-black focus:outline-none" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    <option value="">Select Year</option>
                    {uniqueYears.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4 py-16 lg:px-32 gap-8">
                {filteredStudents.map((student, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image src={student.profile_picture} width={150} height={150} alt='Profile Picture' priority={true} className='w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full mb-4 object-cover' />
                        <Link href={student.linkedin} target='_blank'><h3 className='font-bold text-[12px] lg:text-base flex items-center gap-1 text-center'>{student.fullName}<FaLinkedin /></h3></Link>
                        <p className='text-[10px] lg:text-base text-center'>{student.Role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Students;
