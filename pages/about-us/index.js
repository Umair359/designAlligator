import Head from "next/head";
import React from "react";
import AboutOurCompany from "../../components/AboutUs/AboutOurCompany";
import ReadyToWork from "../../components/AboutUs/ReadyToWork";
import Achievements from "../../components/Home/Achievements";
import HomeContact from "../../components/Home/HomeContact";
import OurClients from "../../components/Home/OurClients";
import Testimonial from "../../components/Home/Testimonial";

const index = () => {
  return (
    <div className="about_us_page">
      <Head>
        <title>
          About Us | Top Digital Design Company
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators is a Top Digital Design Company. Get Attractive Logo Design and Website Development for your Business."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/about-us"
          key="canonical"
        />
      </Head>
      <AboutOurCompany />
      <ReadyToWork />
      <Testimonial />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
