import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/seo-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Professional SEO Services
      </h1>
      <p className="text-white">
        As a business owner in United States, you know the importance of having
        a strong online presence. Search Engine Optimization (SEO) is a crucial
        part of achieving this goal, as it helps to increase your website's
        visibility and attract more potential customers.
      </p>
    </BannerSection>
  );
};

export default Banner;
