import { features } from "@/lib/constant";
import Image from "next/image";
import featuredImg from "../../../public/images/about/features.png";
import React from "react";

const Featured = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
         <div
         key={feature.title}
         className="relative bg-dark text-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
         style={{ backgroundImage: `url(${featuredImg.src})` }}
       >
        <div className="flex justify-start mb-4">
            <feature.icon className=" text-purple-400 text-4xl border rounded-md border-purple-400"/>
        </div>
         <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> 
         <h3 className="text-white text-lg font-bold mb-2 relative z-10">{feature.title}</h3>
         <p className="text-gray-300 relative z-10">{feature.description}</p>
         <a
           href={feature.link}
           className="text-blue-400 hover:underline relative z-10 mt-4 inline-block"
         >
           Learn More →
         </a>
       </div>
      ))}
    </div>
  );
};

export default Featured;
