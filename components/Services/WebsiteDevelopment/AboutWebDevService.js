import React from "react";
import SectionContent1 from "../../ServicesInnerPagesLayout/SectionContent1";
import WebDev3 from "../../../public/images/website-development-section-img.png";
import Link from "next/link";

const AboutWebDevService = () => {
  return (
    <div className="my-5">
      <SectionContent1 image={WebDev3} center>
        <div className="p-4">
          <h6>Web Application Development Services in the USA</h6>
          <h2>Web Application Project Planning</h2>
          <p>
            At Design Alligators, we understand that your web application is a
            crucial part of your business, which is why we offer a wide range of
            Web Application Development Services. And if your current website is
            looking a bit like it's been through the jaws of an alligator, we
            also offer <Link href="/services/website-redesign-development">Website Redesign Services</Link> in United States. We pride
            ourselves on being a professional and cooperative <Link href="/services/web-app-development">Web Application
            Development Agency</Link>, located in Brooklyn, Chicago & Edison and
            serving clients across the United States. Our team of <Link href="/services/mobile-application-development">Mobile App
            Development</Link> experts will work with you every step of the way, from
            Web Application project planning to execution, to ensure that your
            vision becomes a reality.
          </p>
        </div>
      </SectionContent1>
    </div>
  );
};

export default AboutWebDevService;
