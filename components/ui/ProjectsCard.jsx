import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectsCard = ({ image, title, tag, description, onClick }) => {
  return (
    <div onClick={onClick} className='p-4 shadow-md hover:shadow-lg xl:w-96 flex flex-col justify-between gap-1 lg:gap-2 cursor-pointer'>
        <div className=''>
            <Image src={image} width={512} height={512} alt={title} className="rounded-lg object-cover h-44 xl:h-48" />
        </div>
        <div className='flex'>
            <span className='px-2 py-1 bg-green-500 rounded-full text-white text-[10px] font-semibold'>{tag}</span>
        </div>
        <div className='h-16 lg:h-16 overflow-hidden'>
            <h1 className='text-2xl lg:text-2xl'>{title}</h1>
        </div>
        <div className='h-11 lg:h-11 overflow-hidden'>
            <p className='text-sm xl:text-base text-gray-500'>{description}</p>
        </div>
        <div className='mt-4'>
            <button onClick={onClick} className='flex items-center justify-between w-full'>
                <p className='text-sm'>Read More...</p>
                <MdOutlineArrowOutward className='w-5 h-5' />
            </button>
        </div>
    </div>
  )
}

export default ProjectsCard