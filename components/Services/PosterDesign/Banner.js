import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/poster-design-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Poster Design Services
      </h1>
      <p className="text-white">
        At Design Alligators, we offer exceptional Poster Design Services that
        will enhance your business or event with captivating and visually
        striking posters. Our skilled Poster Designers are committed to
        collaborating with you to produce a Poster Design that truly represents
        your brand.
      </p>
    </BannerSection>
  );
};

export default Banner;
