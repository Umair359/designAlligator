import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/Branding/Banner";
import BrandingInfo from "../../../components/Services/Branding/BrandingInfo";
import BrandingSlider from "../../../components/Services/Branding/BrandingSlider";
import OurAgency from "../../../components/Services/Branding/OurAgency";
import BrandingProcess from "../../../components/Services/Branding/BrandingProcess";
import BrandingServices from "../../../components/Services/Branding/BrandingServices";
import Testimonial1 from "../../../public/images/branding/testimonial-1.png"
import Testimonial2 from "../../../public/images/branding/testimonial-2.png"
import Testimonial3 from "../../../public/images/branding/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "Working with Design Alligators was a game-changer for my business. Their branding and design services helped me to create a strong, cohesive brand image that resonates with my target audience. I'm so grateful for their expertise and guidance throughout the entire process. Thank you, Design Alligators!",
      designation: "- Jessica Smith, Owner of The Greenhouse Co.",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I can't say enough about the exceptional branding and design services provided by Design Alligators. They helped me to create a brand identity that accurately reflects my business and values. Their attention to detail and willingness to go above and beyond exceeded my expectations. I highly recommend Design Alligators to anyone looking to elevate their brand",
      designation: "- John Doe, CEO of Doe Industries"
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "Design Alligators helped me to take my business to the next level with their branding and design services. They listened carefully to my vision and worked collaboratively with me to create a brand identity that truly represents my business. Their creativity, expertise, and professionalism are second to none. I'm so glad I chose Design Alligators for my branding needs.",
      designation: " - Sarah Johnson, Owner of Flourish Marketing Co",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>Best Branding Services | Top Branding Company</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Our Branding experts study your Brand and provide the Best Branding Services. Build Your Brand & Visual Design with Design Alligators."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/branding"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <BrandingInfo />
        <BrandingProcess />
      </div>
      <OurAgency />
      <BrandingServices />
      <BrandingSlider />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
