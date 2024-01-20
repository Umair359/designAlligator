import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/UI-UX Design/Banner";
import DesignsInfo from "../../../components/Services/UI-UX Design/DesignsInfo";
import WebDesignSlider from "../../../components/Services/UI-UX Design/WebDesignSlider";
import WebDesignProcess from "../../../components/Services/UI-UX Design/WebDesignProcess";
import WebDesignServices from "../../../components/Services/UI-UX Design/WebDesignServices";
import Testimonial1 from "../../../public/images/UI-UXDesign/testimonial-1.png"
import Testimonial2 from "../../../public/images/UI-UXDesign/testimonial-2.png"
import Testimonial3 from "../../../public/images/UI-UXDesign/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "#841daa",
      person: Testimonial1,
      comment:
      "Working with Design Alligators was a fantastic experience. Their team took my outdated website and transformed it into a modern and sleek platform that truly represents my business!",
      designation: "- Sarah Smith, CEO of Smith Consulting Firm",
    },
    {
      bgColor: "#3f5548",
      person: Testimonial2,
      comment:
        "I had been struggling with my website for months, trying to redesign it myself with no success. Design Alligators came to my rescue and provided me with not only a beautiful website but also excellent customer service.",
        designation:"- John Doe, owner of Doe's Bakery"
    },
    {
      bgColor: "#aa061b",
      person: Testimonial3,
      comment:
        "I had been hesitant to invest in a website design for my small business, but after working with Design Alligators, I can confidently say that it was the best decision I made for my business.",
      designation: "- Samantha Lee, owner of Lee's Boutique",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>
        Website Design Services in USA | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Are you looking for Custom Website Design Services for your Business? Hire Website UI & Website UX Designers from a Top Web Design Company in the USA."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/website-ui-ux-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <DesignsInfo />
      <WebDesignProcess />
      <WebDesignServices />
      <WebDesignSlider />
      <Testimonial data={data}/>
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
