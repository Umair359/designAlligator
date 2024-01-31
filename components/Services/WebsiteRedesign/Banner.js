import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/web-design-banner1.png";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
      Professional Web Designing Services in Edmonton, Canada
      </h1>
      <p className="text-white">
      At Design Alligators, we construct websites that excel in both visual appeal and functionality. Each site we design for our Edmonton customers serves a dedicated purpose: to inform and guide your clients to your doorstep.<span className="pink-bold"> We offer the best web designing services.</span>
      </p>
    </BannerSection>
  );
};

export default Banner;
