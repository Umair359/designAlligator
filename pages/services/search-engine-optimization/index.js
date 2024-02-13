import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/SearchEngineOptimization/Banner";
import ProfessionalSEO from "../../../components/Services/SearchEngineOptimization/ProfessionalSEO";
import SEOAward from "../../../components/Services/SearchEngineOptimization/SEOAward";
import SEOSlider from "../../../components/Services/SearchEngineOptimization/SEOSlider";
import SEOProcess from "../../../components/Services/SearchEngineOptimization/SEOProcess";
import SEOServices from "../../../components/Services/SearchEngineOptimization/SEOServices";
import Testimonial1 from "../../../public/images/SEO/testimonial-1.png";
import Testimonial2 from "../../../public/images/SEO/testimonial-2.png";
import Testimonial3 from "../../../public/images/SEO/testimonial-3.png";

const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "Design Alligators has helped me take my business to the next level with their exceptional SEO Service. Their team of experts worked tirelessly to improve my website's search engine ranking, significantly increasing traffic and sales.",
      designation: "- John Smith, owner of JS Clothing Co.",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "As a small business owner, I struggled to compete in a crowded online marketplace. That is until I found Design Alligators for their SEO Services. Their team identified the weaknesses in my website's SEO and implemented a targeted strategy to improve its visibility.",
      designation: "- Sarah Williams, owner of S&J Jewelry",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "Design Alligators is hands down the best SEO Service out there. Their team is incredibly knowledgeable and dedicated to delivering results. I was blown away by their attention to detail and their personalized approach to my business's SEO needs.",
      designation: "- Michael Johnson, owner of MJ Fitness",
    },
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "Design Alligators has helped me take my business to the next level with their exceptional SEO Service. Their team of experts worked tirelessly to improve my website's search engine ranking, significantly increasing traffic and sales.",
      designation: "- John Smith, owner of JS Clothing Co.",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "As a small business owner, I struggled to compete in a crowded online marketplace. That is until I found Design Alligators for their SEO Services. Their team identified the weaknesses in my website's SEO and implemented a targeted strategy to improve its visibility.",
      designation: "- Sarah Williams, owner of S&J Jewelry",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "Design Alligators is hands down the best SEO Service out there. Their team is incredibly knowledgeable and dedicated to delivering results. I was blown away by their attention to detail and their personalized approach to my business's SEO needs.",
      designation: "- Michael Johnson, owner of MJ Fitness",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>Professional SEO Services in USA | Design Alligators</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators provides Professional SEO Services in USA. Our SEO experts analyze your website in terms of all the On-Page SEO factors."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/search-engine-optimization"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <ProfessionalSEO />
        <SEOProcess />

      </div>
      <SEOServices />
      <SEOSlider />
      <SEOAward />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
