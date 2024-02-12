import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/FlyerDesign/Banner";
import FlyerDesignInfo from "../../../components/Services/FlyerDesign/FlyerDesignInfo";
import FlyerProcess from "../../../components/Services/FlyerDesign/FlyerProcess";
import FlyerServices from "../../../components/Services/FlyerDesign/FlyerServices";
import BestFlyerDesignServices from "../../../components/Services/FlyerDesign/BestFlyerDesignServices";
import FlyerDesignPortfolio from "../../../components/Services/FlyerDesign/FlyerDesignPortfolio";
import Testimonial1 from "../../../public/images/FlyerDesign/testimonial-1.png";
import Testimonial2 from "../../../public/images/FlyerDesign/testimonial-2.png";
import Testimonial3 from "../../../public/images/FlyerDesign/testimonial-3.png";

const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I recently hired Design Alligators to create a flyer for an upcoming event and was extremely impressed with their work. The team at Design Alligators was professional, creative, and attentive to my needs throughout the entire process.",
      designation: "- Tim Johnson, CEO of Johnson Marketing Solutions",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I needed a flyer designed to promote my new fitness center and Design Alligators delivered beyond my expectations. They listened to my vision and incorporated it into the design flawlessly",
      designation: "- Michael Lee, Owner of Lee's Fitness Center",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "I have worked with Design Alligators for several events and have always been impressed with their work. They have designed multiple flyers for me and each time they have exceeded my expectations.",
      designation: "- Michelle Nguyen, Event Planner at Magnolia Events",
    },
  ];
  return (
    <div>
      <Head>
        <title>Flyer Design Services in USA | Design Alligators</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Give us a call today for a custom flyer design service. We are providing affordable flyer design service in USA."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/flyer-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <FlyerDesignInfo />
        <FlyerProcess />
        <BestFlyerDesignServices />
      </div>
      <FlyerServices />
      <FlyerDesignPortfolio />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
