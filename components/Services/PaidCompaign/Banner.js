import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/ppc-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Best PPC Services in USA
      </h1>
      <p className="text-white">
        If you're a business owner looking to drive more traffic to your website
        or increase your online sales, Pay-Per-Click (PPC) Advertising is a
        powerful tool to help you achieve your goals.
      </p>
    </BannerSection>
  );
};

export default Banner;
