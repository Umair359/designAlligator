import React from "react";
import Banner from "../../../components/Services/WebHosting/Banner";
import HostingPackages from "../../../components/Services/WebHosting/HostingPackages";
import OurHostingInfo from "../../../components/Services/WebHosting/OurHostingInfo";
import WhyChooseUsForHosting from "../../../components/Services/WebHosting/WhyChooseUsForHosting";
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Head from "next/head";
import WebHostingProcess from "../../../components/Services/WebHosting/WebHostingProcess";
import Testimonial1 from "../../../public/images/webHosting/testimonial-1.png";
import Testimonial2 from "../../../public/images/webHosting/testimonial-2.png";
import Testimonial3 from "../../../public/images/webHosting/testimonial-3.png";
const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I was searching for a reliable Web Hosting Company that could provide me with the best hosting services for my small business website. That's when I came across Design Alligators. They provided me with excellent web hosting services that were tailored to my specific needs. Their team was always available to assist me, and they helped me grow my business by making sure that my website was always up and running smoothly. I highly recommend Design Alligators for all your web hosting needs",
      designation: "- Sarah Johnson",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "As a freelance web developer, I need to rely on a reliable and efficient web hosting service to host my client's websites. That's why I choose Design Alligators for all my web hosting needs. Their web hosting services are top-notch, and they provide me with the support and assistance that I need to make sure that my client's websites are always up and running smoothly. I highly recommend Design Alligators for all web developers out there.",
      designation: "- John Smith",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "I started my blog a few years ago, and I had a hard time finding a reliable web hosting service to handle my high traffic. That's when I discovered Design Alligators, and they provided me with the best web hosting services I've ever had. Their team is always available to help me with any issues that I have, and they have helped me grow my blog to new heights. I highly recommend Design Alligators for all your web hosting needs",
      designation: "- Samantha William",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>
          Website Hosting Services For Small Business | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators is a top-notch Web Hosting Company in the USA. Get a seamless, fuss-free Website Hosting Services experience with our Free SSL Certificate."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/web-hosting"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <OurHostingInfo />
        <WebHostingProcess />
        {/* <WebHostingApproach /> */}
      </div>
      {/* <HostingPackages /> */}
      <WhyChooseUsForHosting />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
