import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/mobile-app-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">Custom Mobile Application Development</h1>
      <p className="text-white">
        Design Alligators, Our Mobile Application Development Company, can
        assist you in rapidly developing a top-tier Mobile Application that will
        help your business reach new levels.
      </p>
    </BannerSection>
  );
};

export default Banner;
