import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/TShirtDesign/Banner";
import GetCustomTshirt from "../../../components/Services/TShirtDesign/GetCustomTshirt";
import TshirtDesignProcess from "../../../components/Services/TShirtDesign/TshirtDesignProcess";
import BestTshirtDesigner from "../../../components/Services/TShirtDesign/BestTshirtDesigner";
import TshirtServices from "../../../components/Services/TShirtDesign/TshirtServices";
import TshirtDesignPortfolio from "../../../components/Services/TShirtDesign/TshirtDesignPortfolio";
import Testimonial1 from "../../../public/images/TShirtDesigning/testimonial-1.png";
import Testimonial2 from "../../../public/images/TShirtDesigning/testimonial-2.png";
import Testimonial3 from "../../../public/images/TShirtDesigning/testimonial-4.png";

const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I was blown away by the quality of the custom t-shirts that Design Alligators created for my business. They brought my logo to life and ensured everything was perfect. I can't recommend them enough!",
      designation: "- Hailey Doe, owner of HD's Coffee Shop",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "Design Alligators made the entire t-shirt design process a breeze. Their team was so helpful and responsive, and they could turn around our order so quickly. We were extremely happy with the final product and will definitely use them again.",
      designation: "- John Smith, event planner at J&J Events",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "I had a very specific vision in mind for my custom t-shirt design, and Design Alligators exceeded my expectations. They brought my idea to life and created a truly unique shirt that I'm proud to wear. Their attention to detail and commitment to customer service was exceptional.",
      designation: "- James Henry, freelance graphic designer",
    },
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I was blown away by the quality of the custom t-shirts that Design Alligators created for my business. They brought my logo to life and ensured everything was perfect. I can't recommend them enough!",
      designation: "- Hailey Doe, owner of HD's Coffee Shop",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "Design Alligators made the entire t-shirt design process a breeze. Their team was so helpful and responsive, and they could turn around our order so quickly. We were extremely happy with the final product and will definitely use them again.",
      designation: "- John Smith, event planner at J&J Events",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "I had a very specific vision in mind for my custom t-shirt design, and Design Alligators exceeded my expectations. They brought my idea to life and created a truly unique shirt that I'm proud to wear. Their attention to detail and commitment to customer service was exceptional.",
      designation: "- James Henry, freelance graphic designer",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>Custom T-Shirt Design | T-Shirt Designers</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="You can hire a t shirt designer and get varieties of tshirt designs. Get custom t-shirt design that will elevate your brand. Lightning-fast delivery."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/t-shirt-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <GetCustomTshirt />
        <TshirtDesignProcess />
        <BestTshirtDesigner />
      </div>
      <TshirtServices />
      <TshirtDesignPortfolio />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
