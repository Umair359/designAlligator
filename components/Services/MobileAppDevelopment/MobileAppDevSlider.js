import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import MobileApp1 from "../../../public/images/mobileAppDevelopment/1.jpg";
import MobileApp2 from "../../../public/images/mobileAppDevelopment/2.jpg";
import MobileApp3 from "../../../public/images/mobileAppDevelopment/3.jpg";
import MobileApp4 from "../../../public/images/mobileAppDevelopment/4.jpg";

import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const mobileAppData = [
  {
    image: MobileApp1,
  },
  {
    image: MobileApp2,
  },
  {
    image: MobileApp3,
  },
  {
    image: MobileApp4,
  },
  {
    image: MobileApp1,
  },
  {
    image: MobileApp2,
  },
  {
    image: MobileApp3,
  }
  
];
const MobileAppDevSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
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
          At Design Alligators, we take pride in our ability to create stunning
          and professional Mobile Application designs that leave a lasting
          impression on our clients' users. With over 5 years of experience and
          hundreds of completed projects, our team of expert Mobile App
          Developers in United States has successfully transformed many
          unappealing websites into sleek and beautiful mobile applications.
        </p>
        <span>
          Feel free to scroll down and explore our impressive Mobile Application
          Development portfolio!
        </span>
      </>
    </SectionContent4>
  );
};

export default MobileAppDevSlider;
