import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface EmployeeCardProps {
    name: string;
    designation: string;
    img: StaticImageData; // Use StaticImageData for Next.js images
  }

const EmployeeCard:React.FC<EmployeeCardProps> = ({name,designation,img}) => {
  return (
    <div className="relative flex flex-col h-[384px] w-[330px] p-4 bg-gray-300 shadow-md rounded-lg transition-transform duration-300 hover:scale-105">
    <div className="mb-2"> {/* Name and designation wrapper */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{designation}</p>
    </div>
    <div className="relative flex-grow"> {/* Ensures the image stays at the bottom */}
      <Image
        src={img}
        alt={name}
        width={500}
        height={300}
        className="rounded-lg object-cover w-full h-full" 
      />
    </div>
  </div>
  )
}

export default EmployeeCard
