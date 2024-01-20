import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/menu-design-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Menu Design Services
      </h1>
      <p className="text-white">
        Design Alligators specializes in providing top-notch Menu Design
        Services that will help promote your business or event with visually
        appealing and compelling menus. Allow us to create a professional,
        sophisticated & appealing menu for your business.
      </p>
    </BannerSection>
  );
};

export default Banner;
