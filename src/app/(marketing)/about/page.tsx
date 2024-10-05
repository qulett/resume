import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TrustedCompanies from "@/components/Common/TrustedCompanies";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At Qulett Technologies, we specialize in delivering cutting-edge software development, cloud solutions, and IT consulting services tailored to meet the unique needs of businesses. With a team of experts committed to innovation and excellence, we help organizations enhance efficiency, streamline operations, and drive growth through customized solutions. Our mission is to empower businesses to transform their technology landscape, enabling them to achieve their goals and thrive in the digital era. Partner with Qulett Technologies, and let’s build a smarter, more connected future together."
      />
      <AboutSectionOne />
      <TrustedCompanies /> 
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
