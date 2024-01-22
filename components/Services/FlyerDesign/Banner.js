import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/flyer-design-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Flyer Design Services
      </h1>
      <p className="text-white">
        At Design Alligators, we are experts in creating eye-catching and
        effective flyers that will help promote your business or event. From
        sleek and professional to fun and playful, we'll work with you to create
        a Flyer Design that reflects your brand and captures the attention of
        your target audience.
      </p>
    </BannerSection>
  );
};

export default Banner;
