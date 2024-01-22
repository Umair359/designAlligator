import Image from "next/image";
import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/web-design-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Web Design Services
      </h1>
      <p className="text-white">
        Design Alligators is known to be the Best Website Design Agency in the
        United States, with experienced and Professional Web Designers who can
        bring your brand and website to life.
      </p>
    </BannerSection>
  );
};

export default Banner;
