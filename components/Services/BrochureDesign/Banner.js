import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/flyer-design-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Brochure Design
        Services
      </h1>
      <p className="text-white">
        Looking for a way to showcase your business and promote your products or
        services? Look no further than Design Alligators' Brochure Design
        Services! Our team of expert Brochure Designers has years of experience
        creating beautiful and effective brochures that get results.
      </p>
    </BannerSection>
  );
};

export default Banner;
