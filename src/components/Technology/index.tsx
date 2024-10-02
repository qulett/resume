import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Container from "../ui/Container";
import LogoCarousel from "@/app/(marketing)/LogoCarousel";

const TechnologyUsed = () => {
  const logos = [
    { src: "/images/logo/react-logo.png", alt: "React Logo" },
    { src: "/images/logo/next-js-logo.png", alt: "Next Logo" },
    { src: "/images/logo/node-js-logo.png", alt: "Node Logo" },
    { src: "/images/logo/mongodb-logo.png", alt: "Mongo DB  Logo" },
  ];
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="animate-in fade-in slide-in-from-top-12 duration-3000  container">
        <SectionTitle
          title="Technology We Used"
          paragraph="Explore the essential technologies that empower our services and solutions."
          center
        />
        <Container>
          <LogoCarousel logos={logos} />
        </Container>
      </div>
    </section>
  );
};

export default TechnologyUsed;
