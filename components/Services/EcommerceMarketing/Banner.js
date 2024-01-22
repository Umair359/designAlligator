import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/web-design-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">Ecommerce Marketing Services</h1>
      <p className="text-white">
        ECommerce businesses face unique challenges when it comes to online
        marketing. At our Online Marketing Firm, we specialize in providing
        customized eCommerce Marketing Solutions to help businesses drive
        traffic and increase sales.
      </p>
    </BannerSection>
  );
};

export default Banner;
