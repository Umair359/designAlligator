import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/MobileApp/Banner";
import MobileAppInfo from "../../../components/Services/MobileApp/MobileAppInfo";
import MobileAppServices from "../../../components/Services/MobileApp/MobileAppServices";
import MobileAppSlider from "../../../components/Services/MobileApp/MobileAppSlider";
import WhyChooseForMobileApp from "../../../components/Services/MobileApp/WhyChooseForMobileApp";
import MobileAppDesignProcess from "../../../components/Services/MobileApp/MobileAppDesignProcess";
import Testimonial1 from "../../../public/images/mobileAppDesign/testimonial-1.png";
import Testimonial2 from "../../../public/images/mobileAppDesign/testimonial-2.png";
import Testimonial3 from "../../../public/images/mobileAppDesign/testimonial-3.png";

const index = () => {
  const data = [
    {
      bgColor: "#301934",
      person: Testimonial1,
      comment:
        "I had an amazing experience working with Design Alligators for my mobile application design needs. The team was professional, attentive to detail, and truly understood my vision for the app. They provided timely updates and delivered the final product ahead of schedule. I would highly recommend their services to anyone looking for high-quality mobile application design.",
      designation: "- John Smith",
    },
    {
      bgColor: "#3d3b46",
      person: Testimonial2,
      comment:
        "Design Alligators exceeded my expectations with their mobile application design services. Their team worked closely with me throughout the entire process, ensuring that my vision for the app was accurately reflected in the final design. They were able to incorporate all of my ideas and suggestions seamlessly, resulting in a stunning and user-friendly application. I couldn't be happier with the outcome!",
      designation: "- Holly Anderson",
    },
    {
      bgColor: "#495b84",
      person: Testimonial3,
      comment:
        "Design Alligators truly went above and beyond for my mobile application design project. Their team was creative, innovative, and always willing to take on new challenges. They provided excellent communication throughout the process and were extremely responsive to all of my requests. The final product was top-notch and exceeded my expectations. I would highly recommend their services to anyone looking for exceptional mobile application design.",
      designation: " - Michael Lee",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>Professional Mobile Application Design Services in USA</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators offers Mobile App Design Solutions in the USA. Experience the Best Mobile Application Design Services in the USA."
        />
         <link
          rel="canonical"
          href="https://designalligators.com/services/mobile-app-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <MobileAppInfo />
        <MobileAppDesignProcess />
        <MobileAppServices />
      </div>
      <WhyChooseForMobileApp />
      <MobileAppSlider />
      <Testimonial data={data}/>
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
