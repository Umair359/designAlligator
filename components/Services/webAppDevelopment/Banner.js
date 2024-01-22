import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/mobile-app-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Web Application Development Services
      </h1>
      <p className="text-white">
        Our Web Application Development Services Team builds powerful Web
        Applications and user interfaces that engage users and lead to
        successful outcomes. Contact Web Application Development Company Now!
      </p>
    </BannerSection>
  );
};

export default Banner;
