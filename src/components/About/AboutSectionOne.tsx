"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { GoStarFill } from "react-icons/go";
import { use, useEffect, useRef, useState } from "react";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasCounted, setHasCounted] = useState(false);

  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [users, setUsers] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // countUp
  const countUp = (start, end, setter, duration = 2000) => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (inView && !hasCounted) {
      countUp(0, 5, setProjects);
      countUp(0, 20, setClients);
      countUp(0, 10, setUsers);
      countUp(0, 4, setCountries);

      setHasCounted(true);
    }
  }, [inView, hasCounted]);

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 ">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="grid w-full grid-cols-1 gap-6 px-4 xl:grid-cols-12">
              <div className="relative col-span-1 xl:col-span-8 ">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/images/about/emp.png"}
                    alt="about-emp"
                    width={1200}
                    height={800}
                    className="scale-100 transform transition-transform duration-300 ease-in-out hover:scale-105"
                    priority
                  />
                </div>

                <div
                  className="animate-updown absolute bottom-4 left-4 h-[200px] w-[250px] rounded-xl p-4 shadow-md sm:bottom-7 sm:left-7 sm:h-[250px] sm:w-[300px]"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                >
                  <div className="">
                    <p className="text-md text-center text-gray-500">
                      Loved by over 20
                    </p>
                    <p className="text-md mb-2 text-center text-gray-500">
                      happy clients
                    </p>
                  </div>
                  <div className="relative my-8 flex w-full items-center justify-center">
                    {/* The two base images */}
                    <div className="flex w-full max-w-3xl justify-center">
                      <div className="relative">
                        <Image
                          src="/images/about/people1.jpg"
                          alt="Image 1"
                          width={200}
                          height={150}
                          className="h-[70px] w-[70px] rounded-full opacity-70 brightness-90 transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="relative">
                        <Image
                          src="/images/about/people2.jpg"
                          alt="Image 2"
                          width={200}
                          height={150}
                          className="h-[70px] w-[70px] rounded-full opacity-70 brightness-90 transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                      <Image
                        src="/images/about/people3.avif"
                        alt="Image 3"
                        width={200}
                        height={150}
                        className="h-[70px] w-[70px] rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <GoStarFill className=" text-yellow" />
                    <GoStarFill className=" text-yellow" />
                    <GoStarFill className=" text-yellow" />
                    <GoStarFill className=" text-yellow" />
                    <GoStarFill className=" text-yellow" />
                  </div>
                </div>
              </div>

              <div className="col-span-1 flex flex-col gap-5 xl:col-span-4">
                <div
                  ref={sectionRef}
                  className=" flex h-[295px] items-center justify-center gap-2 rounded-xl  bg-gradient text-white sm:gap-12"
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center justify-center">
                      <h3 className=" text-[48px] font-bold">+{projects}</h3>
                      <span>Project Completed</span>
                    </div>
                    <div className=" flex flex-col items-center justify-center">
                      <h3 className=" text-[48px] font-bold">+{clients}</h3>
                      <span>Happy Clients</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center justify-center">
                      <h3 className=" text-[48px] font-bold">+{users}K</h3>
                      <span>User Activated</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className=" text-[48px] font-bold">{countries}</h3>
                      <span>Operating Countries</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/images/about/emp2.png"}
                    alt="about-emp"
                    width={400} // Natural width of the image
                    height={300} // Natural height of the image
                    className="h-auto w-full scale-100 transform transition-transform duration-300 ease-in-out hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
