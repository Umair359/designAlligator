import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/email-marketing-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Professional Email 
        Marketing Services
      </h1>
      <p className="text-white">
        Email marketing is a crucial part of any successful digital marketing
        strategy. If you're looking to grow your business and connect with your
        customers, working with a professional Email Marketing Company can help
        you achieve your goals.
      </p>
    </BannerSection>
  );
};

export default Banner;
