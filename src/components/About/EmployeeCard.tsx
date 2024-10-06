import Image, { StaticImageData } from "next/image";
import React from "react";

interface EmployeeCardProps {
  name: string;
  designation: string;
  img: StaticImageData; // Use StaticImageData for Next.js images
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  designation,
  img,
}) => {
  return (
    <div className="shadow-md relative mt-4 flex h-[384px] w-[330px] flex-col rounded-lg bg-gray-300  transition-transform duration-300 hover:scale-105 dark:border-2 dark:border-white dark:bg-transparent dark:shadow-none">
      <div className=" pl-4 pt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{designation}</p>
      </div>
      <div className="relative flex-grow">
        <Image
          src={img}
          alt={name}
          width={500}
          height={300}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default EmployeeCard;
