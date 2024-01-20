import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Poster1 from "../../../public/images/PosterDesign/1.webp";
import Poster2 from "../../../public/images/PosterDesign/2.webp";
import Poster3 from "../../../public/images/PosterDesign/3.webp";
import Poster4 from "../../../public/images/PosterDesign/4.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const posterData = [
  {
    image: Poster1,
  },
  {
    image: Poster2,
  },
  {
    image: Poster3,
  },
  {
    image: Poster4,
  },
  {
    image: Poster1,
  },
  {
    image: Poster2,
  },
  {
    image: Poster3,
  },
  {
    image: Poster4,
  },
];
const PosterDesignPortfolio = () => {
  
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
          {posterData.map((d, i) => (
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
          Our <span className="text-green">Custom Poster Design</span> Portfolio
        </h4>
        <p>
          Check through our work to see what we delivered to some of our amazing
          clients.
        </p>
      </>
    </SectionContent4>
  );
};

export default PosterDesignPortfolio;
