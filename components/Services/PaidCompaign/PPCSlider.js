import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import PPC1 from "../../../public/images/PPC/1.webp";
import PPC2 from "../../../public/images/PPC/2.webp";
import PPC3 from "../../../public/images/PPC/3.webp";
import PPC4 from "../../../public/images/PPC/4.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings2 } from "../../../utils/sliderConfiguration.js";

const PPCData = [
  {
    image: PPC1,
  },
  {
    image: PPC2,
  },
  {
    image: PPC3,
  },
  {
    image: PPC4,
  },
];
const PPCSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings2} aria-hidden="false">
          {PPCData.map((d, i) => (
            <div key={i}>
              <div className="service_portfolio_slider">
                <Image src={d.image} alt="our-client" />
              </div>
            </div>
          ))}
        </Slider>
      }
    >
      <>
        <h6>Portfolio</h6>
        <h4>Creative Works</h4>
        <p>
          Design Alligators is a leading PPC Agency in United States, offering
          top-quality Pay-Per-Click (PPC) services to businesses of all sizes.
          With over 5 years of experience in the industry, we have managed
          hundreds of successful PPC Campaigns, helping our clients achieve
          their digital marketing goals.
        </p>
      </>
    </SectionContent4>
  );
};

export default PPCSlider;
