import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Flyer1 from "../../../public/images/FlyerDesign/1.webp";
import Flyer2 from "../../../public/images/FlyerDesign/2.webp";
import Flyer3 from "../../../public/images/FlyerDesign/3.webp";
import Flyer4 from "../../../public/images/FlyerDesign/4.webp";
import Flyer5 from "../../../public/images/FlyerDesign/5.webp";
import Flyer6 from "../../../public/images/FlyerDesign/6.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const flyerData = [
  {
    image: Flyer1,
  },
  {
    image: Flyer2,
  },
  {
    image: Flyer3,
  },
  {
    image: Flyer4,
  },
  {
    image: Flyer5,
  },
  {
    image: Flyer6,
  },
];
const FlyerDesignPortfolio = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
          {flyerData.map((d, i) => (
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
        <h4>
          Our Custom <span className="text-green">Flyer Design</span> Portfolio
        </h4>
        <p>Have a look at some of the Flyers we have made for our customers</p>
      </>
    </SectionContent4>
  );
};

export default FlyerDesignPortfolio;
