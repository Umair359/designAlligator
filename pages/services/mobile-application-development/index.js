import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/MobileAppDevelopment/Banner";
import CustomMobileAppInfo from "../../../components/Services/MobileAppDevelopment/CustomMobileAppInfo";
import MobileAppAgency from "../../../components/Services/MobileAppDevelopment/MobileAppAgency";
import MobileAppDevSlider from "../../../components/Services/MobileAppDevelopment/MobileAppDevSlider";
import ReasonToChooseUs from "../../../components/Services/MobileAppDevelopment/ReasonToChooseUs";
import WhyChooseUsForMobileAppDev from "../../../components/Services/MobileAppDevelopment/WhyChooseUsForMobileAppDev";
import MobileAppProcess from "../../../components/Services/MobileAppDevelopment/MobileAppProcess";
import MobileAppServices from "../../../components/Services/MobileAppDevelopment/MobileAppServices";
import Testimonial1 from "../../../public/images/mobileAppDevelopment/testimonial-1.png"
import Testimonial2 from "../../../public/images/mobileAppDevelopment/testimonial-2.png"
import Testimonial3 from "../../../public/images/mobileAppDevelopment/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "#50320c",
      person: Testimonial1,
      comment:
      "I am thrilled with the Mobile Application Design Alligators created for my business! The team listened carefully to my requirements and ideas and created a stunning, user-friendly, high-performing Mobile App that exceeded my expectations.",
      designation: "- Sarah Jones, Owner of Sarah's Boutique",
    },
    {
      bgColor: "#041f2d",
      person: Testimonial2,
      comment:
        "Design Alligators is a talented and professional Mobile App Development Agency. They provided excellent service from start to finish and were always available to answer my questions and concerns",
        designation:"- John Smith, CEO of Smith Enterprises"
    },
    {
      bgColor: "#070b22",
      person: Testimonial3,
      comment:
        "I cannot thank Design Alligators enough for the incredible Mobile App they created for my business. They worked tirelessly to ensure that every aspect of the App was perfect, and the result is a visually stunning and highly functional Mobile App that has boosted my business.",
      designation: "- Emily Chen, Founder of Emily's Food Delivery",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>Mobile Application Development Services in New York,USA</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators provides Mobile Application Development Services. Hire Custom Mobile App Developers in the United States."
        />
         <link
          rel="canonical"
          href="https://designalligators.com/services/mobile-application-development"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <CustomMobileAppInfo />
        <MobileAppProcess />
        {/* <MobileAppAgency /> */}
        <ReasonToChooseUs />
      </div>
      <MobileAppServices />
      {/* <WhyChooseUsForMobileAppDev /> */}
      <MobileAppDevSlider />
      <Testimonial data={data}/>
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
