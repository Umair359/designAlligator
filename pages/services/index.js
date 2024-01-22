import Head from "next/head";
import React from "react";
import Achievements from "../../components/Home/Achievements";
import HomeContact from "../../components/Home/HomeContact";
import HomePortfolio from "../../components/Home/HomePortfolio";
import OurClients from "../../components/Home/OurClients";
import Testimonial from "../../components/Home/Testimonial";
import Banner from "../../components/Layouts/Banner";
import BrandingAndDesigning from "../../components/Services/BrandingAndDesigning";
import Development from "../../components/Services/Development";
import DigitalMarketing from "../../components/Services/DigitalMarketing";
import WhatWeDo from "../../components/Services/WhatWeDo";

const index = () => {
  return (
    <div>
      <Head>
        <title>Complete Brand Building Form Scratch | Services</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="We specialize in driving traffic, increasing conversions, and maximizing customer satisfaction."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services"
          key="canonical"
        />
        
      </Head>
      <Banner title={"Our Services"} />
      <WhatWeDo />
      <div className="Logo_designers_background">
        <BrandingAndDesigning />
        <Development />
        <DigitalMarketing />
      </div>
      <HomePortfolio />
      <Testimonial />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
