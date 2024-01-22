import Image from "next/image";
import React from "react";

import BannerSection from "../../ServicesInnerPagesLayout/BannerSection";
import BannerImg from "../../../public/images/video-animation-banner.webp";

const Banner = () => {
  return (
    <BannerSection image={BannerImg}>
      <h1 className="text-white">
        Video Animation Services
      </h1>
      <p className="text-white">
        Design Alligators is a world-renowned Video Animation Company that takes
        your brand to new heights. We’ve provided businesses with cutting-edge
        motion graphics and whiteboard Video Animations.
      </p>
    </BannerSection>
  );
};

export default Banner;
