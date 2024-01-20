import Image from "next/image";
import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/web-design-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">Ecommerce Development Services</h1>
      <p className="text-white">
        We are the creators of top selling ecommerce stores. Being a premier
        ecommerce development agency we keep our client’s goal of maximizing
        returns and streamlining sales online.
      </p>
    </BannerSection>
  );
};

export default Banner;
