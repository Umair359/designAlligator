import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import Website1 from "../../../public/images/WebDev/1.webp";
import Website2 from "../../../public/images/WebDev/2.webp";
import Website3 from "../../../public/images/WebDev/3.webp";
import Website4 from "../../../public/images/WebDev/4.webp";
import Website5 from "../../../public/images/WebDev/5.webp";
import Website6 from "../../../public/images/WebDev/6.webp";
import Website7 from "../../../public/images/WebDev/7.webp";
import Website8 from "../../../public/images/WebDev/8.webp";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const websiteData = [
  {
    image: Website1,
  },
  {
    image: Website2,
  },
  {
    image: Website3,
  },
  {
    image: Website4,
  },
  {
    image: Website5,
  },
  {
    image: Website6,
  },
  {
    image: Website7,
  },
  {
    image: Website8,
  },
];
const WebDevSlider = () => {

  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
          {websiteData.map((d, i) => (
            <div key={i}>
              <div
                className="service_portfolio_slider"
              >
                <Image src={d.image} alt="our-client" />
              </div>
            </div>
          ))}
        </Slider>
      }
    >
      <>
        <h6>Website Development Portfolio</h6>
        <h4>Creative Web Development Works</h4>
        <p>
          We take pride in being a Web Development Agency that stands out from
          the rest. Our custom Website Development Services are tailored to your
          business needs, browse our portfolio below.
        </p>
      </>
    </SectionContent4>
  );
};

export default WebDevSlider;
