import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Brochure1 from "../../../public/images/BrochureDesign/1.jpg";
import Brochure2 from "../../../public/images/BrochureDesign/2.jpg";
import Brochure3 from "../../../public/images/BrochureDesign/3.jpg";
import Brochure4 from "../../../public/images/BrochureDesign/4.jpg";
import Brochure5 from "../../../public/images/BrochureDesign/5.jpg";

import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings2 } from "../../../utils/sliderConfiguration";
const brochureData = [
  {
    image: Brochure1,
  },
  {
    image: Brochure2,
  },
  {
    image: Brochure3,
  },
  {
    image: Brochure4,
  },
  {
    image: Brochure5,
  },
  
];
const BrochureDesignPortfolio = () => {

  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings2} aria-hidden="false">
          {brochureData.map((d, i) => (
            <div key={i}>
              <div
                className="service_portfolio_slider"
              >
                <Image
                  src={d.image}
                  alt="our-client"
                />
              </div>
            </div>
          ))}
        </Slider>
      }
    >
      <>
        <h4>
          Our Custom <span className="text-green">Brochure Design Services</span> Portfolio
        </h4>
        <p>Have a look at our brochure design ideas portfolio and see what we can do for you</p>
      </>
    </SectionContent4>
  );
};

export default BrochureDesignPortfolio;
