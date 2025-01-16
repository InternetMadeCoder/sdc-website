import React from 'react'
import { expert } from './expertData'
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'

const Expert = () => {
    return (
        <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Our Industry Experts</h2>
            <div className='grid grid-cols-3 p-32 gap-16'>
                {expert.map((person, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image src={person.profile_picture} width={150} height={150} alt='Profile Picture' priority={true} className='w-32 h-32 rounded-full mb-4 object-cover' />
                        <h3 className='font-bold flex items-center gap-1'>{person.fullName}<Link href={person.linkedin} target='_blank'><FaLinkedin /></Link></h3>
                        <p>{person.role}</p>
                        <p>{person.company}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Expert