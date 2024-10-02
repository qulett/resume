import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import TechnologyUsed from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import configuration from "@/configuration";
import { homePageSeoKeyword } from "@/constants/SeoKeyword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${configuration.site.name} | Software Development, Cloud Solutions, IT Consulting`,
  description: configuration.site.description,
  keywords: homePageSeoKeyword,
  openGraph: {
    title: "Qulett Technologies",
    description:
      "Cutting-edge software development, cloud solutions, and IT consulting services.",
    url: "http://www.qulett.com",
    siteName: "Qulett Technologies",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Qulett Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Qulett Technologies",
    description:
      "Cutting-edge software development, cloud solutions, and IT consulting services.",
    images: ["/images/twitter-image.jpg"],
    site: "@qulett",
  },

  alternates: {
    canonical: "http://www.qulett.com",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <TechnologyUsed />
      <Video />

      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
