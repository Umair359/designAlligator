import React from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import WebDesign1 from "../../../public/images/UI-UXDesign/1.webp";
import WebDesign2 from "../../../public/images/UI-UXDesign/2.webp";
import WebDesign3 from "../../../public/images/UI-UXDesign/3.webp";
import WebDesign4 from "../../../public/images/UI-UXDesign/4.webp";
import WebDesign5 from "../../../public/images/UI-UXDesign/5.webp";
import Image from "next/image";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const UiDesignData = [
  {
    image: WebDesign1,
  },
  {
    image: WebDesign2,
  },
  {
    image: WebDesign3,
  },
  {
    image: WebDesign4,
  },
  {
    image: WebDesign5,
  },
  {
    image: WebDesign1,
  },
  {
    image: WebDesign2,
  },
  {
    image: WebDesign3,
  },
  {
    image: WebDesign4,
  },
  {
    image: WebDesign5,
  },
];
const WebDesignSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
          {UiDesignData.map((d, i) => (
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
        <h6>Top Web Design Company's Portfolio</h6>
        <h4>Creative Web Design Works</h4>
        <p>
          We take pride in delivering creative website design works that leave a
          lasting impression on our clients and their audience. Our portfolio
          showcases our experience and capabilities in website design and
          website development, and we're excited for you to check it out. Take a
          scroll through our Website Design Services work through the years and
          see for yourself how we've transformed websites into stunning works of
          art.
        </p>
        
      </>
    </SectionContent4>
  );
};

export default WebDesignSlider;
