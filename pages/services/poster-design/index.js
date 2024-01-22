import Head from "next/head";
import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/PosterDesign/Banner";
import PosterDesignInfo from "../../../components/Services/PosterDesign/PosterDesignInfo";
import PosterDesignProcess from "../../../components/Services/PosterDesign/PosterDesignProcess";
import BestPosterDesignServices from "../../../components/Services/PosterDesign/BestPosterDesignServices";
import PosterDesignServices from "../../../components/Services/PosterDesign/PosterDesignServices";
import PosterDesignPortfolio from "../../../components/Services/PosterDesign/PosterDesignPortfolio";
import Testimonial1 from "../../../public/images/PosterDesign/testimonial-1.png"
import Testimonial2 from "../../../public/images/PosterDesign/testimonial-2.png"
import Testimonial3 from "../../../public/images/PosterDesign/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "#003d53",
      person: Testimonial1,
      comment:
      "Design Alligators truly exceeded our expectations with their Poster Design Services. They captured the essence of our brand and transformed it into an eye-catching design that effectively promoted our event. We were thrilled with the results.",
      designation: "- Jane Smith, ABC Events",
    },
    {
      bgColor: "#22211f",
      person: Testimonial2,
      comment:
        "As a small business owner, I hesitated to invest in professional Poster Design Services. However, Design Alligators' affordable pricing and expert design skills made it an easy decision.",
        designation:"- John Doe, Doe's Bakery"
    },
    {
      bgColor: "#d29e00",
      person: Testimonial3,
      comment:
        "We have worked with Design Alligators on multiple poster design projects and have been consistently impressed with their creativity. They are a pleasure to work with and always go above and beyond to ensure we are satisfied with the final product.",
      designation: " - Sarah Johnson, XYZ Corporation.",
    },
  ];
  return (
    <div>
      <Head>
        <title>
          Affordable Poster Design Services in New Jersey | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="We provide poster design service that spearhead the marketing campaign for businesses. Let experts design your poster for just $35."
        />
         <link
          rel="canonical"
          href="https://designalligators.com/services/poster-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <PosterDesignInfo />
        <PosterDesignProcess />
        <BestPosterDesignServices />
      </div>
      <PosterDesignServices />
      <PosterDesignPortfolio />
      <Testimonial data={data}/>
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
