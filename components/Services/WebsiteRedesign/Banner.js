import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/web-redesign-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Web Redesign Services
      </h1>
      <p className="text-white">
        We are experts in Redesigning Websites, focusing on creating engaging
        user experiences and achieving successful outcomes. We pride ourselves
        on our ability to communicate with the digital world in an effortless
        and seamless way, just like an alligator whisperer.
      </p>
    </BannerSection>
  );
};

export default Banner;
