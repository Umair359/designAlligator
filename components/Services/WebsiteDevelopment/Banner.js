import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/web-development-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Web Development Services
      </h1>
      <p className="text-white">
        We specialize in creating Web Applications that not only work seamlessly
        but also engage users and lead to successful outcomes. Think of us as
        the alligator whisperers of the Web Development world (minus the scary
        teeth).
      </p>
    </BannerSection>
  );
};

export default Banner;
