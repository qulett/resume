import CommingSoon from "@/components/ui/CommingSoon";
import Container from "@/components/ui/Container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Refund Policy | Hassle-Free Returns and Refunds",
  description:
    "Learn about our refund policy, including the conditions for returns and the process for obtaining a refund. We are committed to customer satisfaction.",
};

const RefundPolicy = () => {
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

export default RefundPolicy;
