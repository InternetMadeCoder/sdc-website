import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectsCard = ({ image, title, tag, description, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className='p-4 bg-white rounded-lg
        transform transition-all duration-500 ease-out
        shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]
        hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px]
        hover:translate-y-[-8px]
        hover:scale-[1.01]
        cursor-pointer
        xl:w-96 flex flex-col justify-between gap-1 lg:gap-2'
    >
      <div className='overflow-hidden rounded-lg'>
        <Image 
          src={image} 
          width={512} 
          height={512} 
          alt={title} 
          className="h-44 xl:h-48 object-cover transform transition-transform duration-700 hover:scale-110" 
        />
      </div>
      <div className='flex'>
        <span className='px-2 py-1 bg-green-500 rounded-full text-white text-[10px] font-semibold'>{tag}</span>
      </div>
      <div className='h-16 lg:h-16 overflow-hidden'>
        <h1 className='text-2xl lg:text-2xl transform transition-colors duration-300 group-hover:text-yellow-500'>{title}</h1>
      </div>
      <div className='h-11 lg:h-11 overflow-hidden'>
        <p className='text-sm xl:text-base text-gray-500'>{description}</p>
      </div>
      <div className='mt-4'>
        <button className='flex items-center justify-between w-full group'>
          <p className='text-sm transition-all duration-300 group-hover:text-yellow-500 group-hover:font-medium'>
            Read More...
          </p>
          <MdOutlineArrowOutward className='w-5 h-5 transition-all duration-300 
            group-hover:translate-x-1 group-hover:-translate-y-1 
            group-hover:scale-110 group-hover:text-yellow-500' 
          />
        </button>
      </div>
    </div>
  )
}

export default ProjectsCard