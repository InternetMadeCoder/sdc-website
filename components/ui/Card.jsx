import React from 'react'
import Link from "next/link"
import Image from "next/image";

const Card = ( { image, title, tag, description, date, onClick }, square = false ) => {
  return (
    <div className={`flex flex-col gap-2 ${square ? 'max-w-[320px]' : 'max-w-[384px]'}`}>
        <Image src={image} width={384} height={384} alt={title} className={`rounded-xl object-cover ${square ? 'w-80 h-80' : 'h-60'}`} />
        <h3 className="font-bold text-base sm:text-xl">{title.slice(0, 85)}... {tag && (<span className='py-1 px-2 bg-green-500 rounded-2xl text-sm text-white'>{tag}</span>)}</h3>
        {description && <p className="text-gray-700 text-justify text-sm sm:text-base">{description.slice(0, 100)}...</p>}
        <div className="flex justify-between items-center align-bottom mt-2">
            <button onClick={onClick} className="underline text-[#320090] text-sm font-semibold">Read More...</button>
            <span className="text-sm">{date}</span>
        </div>
    </div>
  )
}

export default Card