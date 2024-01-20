import React from "react";
import SectionContent1 from "../../ServicesInnerPagesLayout/SectionContent1";
import LogoDesign from "../../../public/images/designer.webp";
import Link from "next/link";

const ServiceInfo = () => {
  return (
    <SectionContent1 image={LogoDesign} center>
      <h2 style={{ fontSize: "34px", marginBottom: "15px", fontWeight: "800" }}>
        Where Creativity Meets Business Savvy
      </h2>
      <h3>Top Logo Design Services in USA</h3>
      <p>
        Welcome to <Link href="/">Design Alligators</Link>, the USA based Logo Design Company that’s
        anything but ordinary.
      </p>
      <p>
        We’re a team of fierce gators that have made it our mission to take a
        bite out of mediocre branding and make your business stand out from the
        pack.
      </p>
      <p>
        Our Logo Designers have an insatiable appetite for creativity and
        technology, which is why we offer top-notch Logo Design Services that
        fuse the best of both worlds.
      </p>
      <p>
        Our Top Logo Designers know the importance of crafting a Logo Design
        Services that is unique, memorable, and effective. That's why we work
        closely with you to understand your business needs, goals, and vision.
      </p>
      <p>
        Choose Design Alligators, the Top Logo Designers in New York and
        Illinois, to create a Logo Design that will make the competition say,
        "See you later, alligator!"
      </p>
    </SectionContent1>
  );
};

export default ServiceInfo;
