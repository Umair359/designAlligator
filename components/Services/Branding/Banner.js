import React from "react";
import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/Branding-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Best Branding Service
      </h1>
      <p className="text-white">
        Designs can persuade customers to make decisions, and take action. Get
        ready to develop designs that transform the way people see the world
        with our best branding services.
      </p>
    </BannerSection>
  );
};

export default Banner;
