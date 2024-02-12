import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/BrochureDesign/Banner";
import BrochureDesignInfo from "../../../components/Services/BrochureDesign/BrochureDesignInfo";
import BrochureProcess from "../../../components/Services/BrochureDesign/BrochureProcess";
import BestBrochureDesignServices from "../../../components/Services/BrochureDesign/BestBrochureDesignServices";
import BrochureServices from "../../../components/Services/BrochureDesign/BrochureServices";
import Testimonial1 from "../../../public/images/BrochureDesign/testimonial-1.png"
import Testimonial2 from "../../../public/images/BrochureDesign/testimonial-2.png"
import Testimonial3 from "../../../public/images/BrochureDesign/testimonial-3.png"
import BrochureDesignPortfolio from "../../../components/Services/BrochureDesign/BrochureDesignPortfolio";
const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I am so impressed with the brochure Design Alligators created for our business. The team worked closely with us to capture the essence of our brand and bring our vision to life. Thank you, Design Alligators!",
      designation: "- John Smith, CEO of Alteria",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I have worked with several design agencies in the past, but Design Alligators stands out from the rest. Their team is professional, responsive, and talented.",
      designation: "- Sarah Johnson, Marketing Manager at ABC Corp"
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "I needed a brochure created in a hurry for an upcoming event, and Design Alligators came through for me. They provided lightning-fast service without compromising on quality. I highly recommend Design Alligators for all your design needs.",
      designation: " - Tom Lee, Event Organizer at TL Event Planning",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>Affordable Brochure Design Services in New Jersey , USA</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Get Professional Brochure Design Services in New Jersey. Our experts create eye-catching and effective designs to help you showcase your brand and services."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/brochure-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <BrochureDesignInfo />
        <BrochureProcess />
        <BestBrochureDesignServices />
      </div>
      <BrochureServices />
      <BrochureDesignPortfolio />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
