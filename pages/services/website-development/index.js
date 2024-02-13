import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import AboutWebDevService from "../../../components/Services/WebsiteDevelopment/AboutWebDevService";
import Banner from "../../../components/Services/WebsiteDevelopment/Banner";
import OurApproach from "../../../components/Services/WebsiteDevelopment/OurApproach";
import WebDevAward from "../../../components/Services/WebsiteDevelopment/WebDevAward";
import WebDevSlider from "../../../components/Services/WebsiteDevelopment/WebDevSlider";
import WebDevProcess from "../../../components/Services/WebsiteDevelopment/WebDevProcesses";
import WebDevServices from "../../../components/Services/WebsiteDevelopment/WebDevServices";
import Testimonial1 from "../../../public/images/WebDev/testimonial-1.png";
import Testimonial2 from "../../../public/images/WebDev/testimonial-2.png";
import Testimonial3 from "../../../public/images/WebDev/testimonial-3.png";
import Packages from "../../../components/Home/Packages";

const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "Design Alligators turned my website dreams into a reality! Their professional web developers listened to my vision and created a stunning website that perfectly reflects my brand. I couldn't be happier with their web development services.",
      designation: "- Sarah Johnson, Owner of Sarah’s Bakery",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I had a terrible experience with another web development company before I found Design Alligators. Their team completely turned things around and delivered a website that exceeded my expectations.",
      designation: "- John Davis, CEO of MAK Enterprises",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "Design Alligators truly went above and beyond to ensure that my website was exactly what I wanted. Their custom web development services are top-notch, and their team of incredibly talented web developers.",
      designation: "- Emily Rodriguez, Head of Marketing at Xiou",
    },
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "Design Alligators turned my website dreams into a reality! Their professional web developers listened to my vision and created a stunning website that perfectly reflects my brand. I couldn't be happier with their web development services.",
      designation: "- Sarah Johnson, Owner of Sarah’s Bakery",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I had a terrible experience with another web development company before I found Design Alligators. Their team completely turned things around and delivered a website that exceeded my expectations.",
      designation: "- John Davis, CEO of MAK Enterprises",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "Design Alligators truly went above and beyond to ensure that my website was exactly what I wanted. Their custom web development services are top-notch, and their team of incredibly talented web developers.",
      designation: "- Emily Rodriguez, Head of Marketing at Xiou",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>Website Development Agency in USA | Design Alligators</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators is an award-winning Website Development Agency that provides Web Development Services at affordable prices."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/website-development"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <OurApproach />
        <WebDevProcess />
        <AboutWebDevService />
      </div>
      <WebDevServices />
      <WebDevSlider />
      <Packages title="Website Packages" page="Website" />
      <WebDevAward />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
