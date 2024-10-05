import client1 from '../../public/images/client1.png';
import client2 from '../../public/images/client2.png';
import client3 from '../../public/images/client3.png';
import client4 from '../../public/images/client4.png';
import client5 from '../../public/images/client5.png';

import employee from '../../public/images/employee/employee.png';
import employee2 from '../../public/images/employee/employee2.png';
import employee3 from '../../public/images/employee/employee3.png';
import employee4 from '../../public/images/employee/employee4.png';
import employee5 from '../../public/images/employee/employee5.png';
import employee6 from '../../public/images/employee/employee6.png';
import employee7 from '../../public/images/employee/employee7.png';
import employee8 from '../../public/images/employee/employee8.png';

import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";





export const CLIENTS = [
    { alt: 'client1', logo: client1 },
    { alt: 'client2', logo: client2 },
    { alt: 'client3', logo: client3 },
    { alt: 'client4', logo: client4 },
    { alt: 'client5', logo: client5 },
  ];
  


export const teamMembers = [
    {
        name: "Sarah Brown",
        designation: "Co-Founder",
        image: employee,
      },
      {
        name: "Michael Anderson",
        designation: "Software Engineer",
        image: employee2,
      },
      {
        name: "David Clark",
        designation: "Product Manager",
        image: employee3,
      },
      {
        name: "Emily Adams",
        designation: "UX/UI Designer",
        image: employee4,
      },
      {
        name: "Jessica Carter",
        designation: "DevOps Engineer",
        image: employee5,
      },
      {
        name: "William Foster",
        designation: "Marketing Specialist",
        image: employee6,
      },
      {
        name: "Lauren Graham",
        designation: "Sales Executive",
        image: employee7,
      },
      {
        name: "James Bennett",
        designation: "Data Analyst",
        image: employee8,
      },
  ];
  

  export const features = [
    {
      icon: AiOutlineSolution,
      title: 'Best Solutions',
      description: 'Delivering exceptional results and innovative solutions maximizing your success.',
      link: '/learn-more',
    },
    {
      icon: MdOutlinePayment,
      title: 'Secure Payment',
      description: 'We ensure your transactions are safe with advanced encryption and secure payment options.',
      link: '/learn-more',
    },
    {
      icon: GoGraph,
      title: 'Save Money',
      description: 'Enjoy competitive pricing, exclusive discounts, promotions to maximize your savings.',
      link: '/learn-more',
    },
    {
      icon: MdSupportAgent,
      title: 'Quick Support',
      description: 'Our dedicated support team offers prompt assistance through live chat, email, and phone.',
      link: '/learn-more',
    },
  ];