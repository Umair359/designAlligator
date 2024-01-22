import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/catalouge-design-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Catalogue Design Services
      </h1>
      <p className="text-white">
        Looking to take your product offering to the next level? Look no further
        than Design Alligators' Catalogue Design Services. Our team of creative
        Catalogue Designers will work with you to create a catalogue that not
        only showcases your products but also grabs the attention of potential
        customers.
      </p>
    </BannerSection>
  );
};

export default Banner;
