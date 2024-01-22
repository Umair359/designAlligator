import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import App1 from "../../../public/images/mobileAppDesign/1.webp";
import App2 from "../../../public/images/mobileAppDesign/2.webp";
import App3 from "../../../public/images/mobileAppDesign/3.webp";
import App4 from "../../../public/images/mobileAppDesign/4.webp";
import App5 from "../../../public/images/mobileAppDesign/5.webp";
import App6 from "../../../public/images/mobileAppDesign/6.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings2 } from "../../../utils/sliderConfiguration";
const mobileAppData = [
  {
    image: App1,
  },
  {
    image: App2,
  },
  {
    image: App3,
  },
  {
    image: App4,
  },
  {
    image: App5,
  },
  {
    image: App6,
  },
  
  
];
const MobileAppSlider = () => {
  
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings2} aria-hidden="false">
          {mobileAppData.map((d, i) => (
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
        <h6>Portfolio</h6>
        <h4>Creative Works</h4>
        <p>
          At Design Alligators, our portfolio speaks for itself. Our team has
          created hundreds of stunning and professional mobile applications over
          the past 5 years, honing our skills and gaining valuable experience
          with every project. We take pride in our ability to take dull,
          unappealing ideas and turn them into sleek, beautiful mobile
          applications that look great and function seamlessly.
        </p>
        <span>
          Scroll down to check our Mobile Applications Design work through the
          years!
        </span>
      </>
    </SectionContent4>
  );
};

export default MobileAppSlider;
