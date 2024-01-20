import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/invitation-design-banner.webp";
const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Invitation Card Designing Services
      </h1>
      <p className="text-white">
        Join us at Design Alligators, where we bring your Invitation Card
        Designs to life! Our team of creative wizards is dedicated to delivering
        custom and extraordinary Invitation Card Designs that will impress your
        guests.
      </p>
    </BannerSection>
  );
};

export default Banner;
