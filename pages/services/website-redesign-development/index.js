import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/WebsiteRedesign/Banner";
import WebRedesignInfo from "../../../components/Services/WebsiteRedesign/WebRedesignInfo";
import WebsiteRedesignSlider from "../../../components/Services/WebsiteRedesign/WebsiteRedesignSlider";
import WebRedesignProcess from "../../../components/Services/WebsiteRedesign/WebRedesignProcess";
import WebRedesignServices from "../../../components/Services/WebsiteRedesign/WebRedesignServices";
import Testimonial1 from "../../../public/images/webReDesign/testimonial-1.png";
import Testimonial2 from "../../../public/images/webReDesign/testimonial-2.png";
import Testimonial4 from "../../../public/images/webReDesign/testimonial-4.png";
const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I cannot recommend Design Alligators enough for their outstanding Web Redesign Services. They transformed our outdated website into a modern and visually stunning platform that truly represents our brand!",
      designation: "- Alex Lee, Marketing Director at GreenLife",
    },
    {
      bgColor: "white",
      person: Testimonial1,

      comment:
        "Working with Design Alligators for our Website Redesign was a seamless and enjoyable experience. They took the time to understand our goals and vision for the website and delivered beyond our expectations.",
      designation: "Samantha Hernandez, CEO at Spark Agency",
    },
    {
      bgColor: "white",
      person: Testimonial4,
      comment:
        "Design Alligators exceeded our expectations with their Web Redesign Services. They not only enhanced the website's aesthetics but also optimized its functionality and user experience.",
      designation: "- John Doe, COO at TechNation",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I cannot recommend Design Alligators enough for their outstanding Web Redesign Services. They transformed our outdated website into a modern and visually stunning platform that truly represents our brand!",
      designation: "- Alex Lee, Marketing Director at GreenLife",
    },
    {
      bgColor: "white",
      person: Testimonial1,

      comment:
        "Working with Design Alligators for our Website Redesign was a seamless and enjoyable experience. They took the time to understand our goals and vision for the website and delivered beyond our expectations.",
      designation: "Samantha Hernandez, CEO at Spark Agency",
    },
    {
      bgColor: "white",
      person: Testimonial4,
      comment:
        "Design Alligators exceeded our expectations with their Web Redesign Services. They not only enhanced the website's aesthetics but also optimized its functionality and user experience.",
      designation: "- John Doe, COO at TechNation",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>
          Website Redesign Services | New York Company
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Transform your Website's existing look and feel by getting Professional Website Redesign Services in New York."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/website-redesign-development"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <WebRedesignInfo />
        <WebRedesignProcess />
      </div>
      <WebRedesignServices />
      <WebsiteRedesignSlider />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
