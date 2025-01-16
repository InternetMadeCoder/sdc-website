import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faculty } from './facultyData';
import { FaLinkedin } from "react-icons/fa";

const Faculty = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Our Driving Force</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 gap-12 lg:px-32 lg:gap-16'>
        {faculty.map((person) => (
          <div key={person.id}>
            <div className='flex flex-col items-center gap-2'>
              <Image src={person.profile_picture} width={150} height={150} alt='Profile Picture' className='w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full mb-4' />
              <Link href={person.linkedin} target='_blank'><h3 className='font-bold flex items-center gap-1 text-base text-center'>{person.fullName}<FaLinkedin /></h3></Link>
              <div className='flex flex-col gap-1 text-sm text-center'>
                <p>{person.designation}</p>
                <p>{person.email}</p>
                <p>{person.contact_number}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faculty;
