import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/tshirt-design-banner.png";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Custom T-Shirt Design
      </h1>
      <p className="text-white">
        At Design Alligators, we are a team of like minded people who all want
        to create practical solutions that get results. We’re experts in Custom
        T-Shirt Design, technology, and creativity.
      </p>
    </BannerSection>
  );
};

export default Banner;
