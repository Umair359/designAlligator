import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/web-hosting-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Web Hosting Services
      </h1>
      <p className="text-white">
        In today's digital age, web hosting has transcended from mere options to
        absolute necessity for company owners and digital creators. If you yearn
        to watch your online business bloom and thrive, web hosting is an
        essential tool that you simply cannot do without.
      </p>
    </BannerSection>
  );
};

export default Banner;
