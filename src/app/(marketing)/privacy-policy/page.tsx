import CommingSoon from "@/components/ui/CommingSoon";
import Container from "@/components/ui/Container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Protecting Your Data and Privacy",
  description:
    "Read our Privacy Policy to learn how we collect, use, and protect your personal information. Your privacy is important to us.",
};

const PrivacyPolicy = () => {
  return (
    <section
      id="privacy-policy"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <Container>
        <CommingSoon />
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
