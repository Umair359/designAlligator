import React from "react";
import SectionContent1 from "../../ServicesInnerPagesLayout/SectionContent1";
import BrandingImg from "../../../public/images/Branding-image-2.webp";
import Link from "next/link";

const BrandingInfo = () => {
  return (
    <SectionContent1 image={BrandingImg} center>
      <h6>Best Branding Services in the United States</h6>
      <h2>Let's Build Your Brand Together</h2>
      <p>
        Don't let unattractive branding designs and bleak websites drag down
        your business. Let the experts at <Link href="/">Design Alligators</Link> handle your brand.
        Let us help you create a visual identity that resonates with your
        audience and leaves a lasting impression.
      </p>
      <p>
        Our team of expert designers and strategists takes the time to get to
        know your brand inside and out. We dive deep into your company's
        history, values, and aspirations to create a visual identity that speaks
        volumes.
      </p>
      <p>
        From logos to color schemes to typography, we design every element of
        your brand with a strategic approach in mind. Our Branding Services are
        creative yet practical and effective, ensuring your brand stands out in
        a crowded market.
      </p>
    </SectionContent1>
  );
};

export default BrandingInfo;
