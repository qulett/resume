import Image from "next/image";
import { teamMembers } from "@/lib/constant";
import EmployeeCard from "./EmployeeCard";
import Featured from "./Featured";

const AboutSectionTwo = () => {
  const features = [
    {
      icon: "/icon1.svg",
      title: "Best Solutions",
      description:
        "Delivering exceptional results and innovative solutions maximizing your success.",
      link: "/learn-more",
    },
    {
      icon: "/icon2.svg",
      title: "Secure Payment",
      description:
        "We ensure your transactions are safe with advanced encryption and secure payment options.",
      link: "/learn-more",
    },
    {
      icon: "/icon3.svg",
      title: "Save Money",
      description:
        "Enjoy competitive pricing, exclusive discounts, promotions to maximize your savings.",
      link: "/learn-more",
    },
    {
      icon: "/icon4.svg",
      title: "Quick Support",
      description:
        "Our dedicated support team offers prompt assistance through live chat, email, and phone.",
      link: "/learn-more",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="flex w-full flex-col gap-6 ">
            <h1 className="text-center text-6xl font-semibold">
              Meet Our Team
            </h1>
            <div className="mb-10 flex flex-col justify-center text-center text-xl text-gray-600 md:items-center">
              <p>
                Meet the talented and passionate team members who drive our
                company
              </p>
              <p>forward every day.</p>
            </div>
          </div>

          {/* Team members */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {teamMembers.map((item, i) => (
              <div key={i}>
                <EmployeeCard
                  name={item.name}
                  designation={item.designation}
                  img={item.image}
                />
              </div>
            ))}
          </div>

          <div className="my-16 flex w-full flex-col items-center justify-center">
            <p className=" text-[16px] md:text-2xl">
              Easily Monitor, Control, and Enhance Your Personal and
            </p>
            <p className=" text-[14px] md:text-xl">
              Business Finances. Your All-In-One Solution.
            </p>
          </div>
        </div>
      </div>

      <div className=" p-10 sm:p-[80px]" style={{ backgroundColor: "#866dee" }}>
        <div className="container">
          <Featured />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
