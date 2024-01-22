import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/mobile-app-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Custom Mobile App
      </h1>
      <p className="text-white">
        Our mobile application design team in New York builds powerful apps and
        user interfaces that engage users and lead to successful outcomes.
      </p>
    </BannerSection>
  );
};

export default Banner;
