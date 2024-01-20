import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/social-media-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Social Media Marketing Services
      </h1>
      <p className="text-white">
        In today's digital landscape, social media has become a crucial
        component of any successful marketing strategy. If you're looking to
        boost your brand's online presence, attract new customers, and increase
        engagement, Social Media Marketing (SMM) is the way to go.
      </p>
    </BannerSection>
  );
};

export default Banner;
