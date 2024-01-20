import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Logo1 from "../../../public/images/logoDesign/1.webp";
import Logo2 from "../../../public/images/logoDesign/2.webp";
import Logo3 from "../../../public/images/logoDesign/3.webp";
import Logo4 from "../../../public/images/logoDesign/4.webp";
import Logo5 from "../../../public/images/logoDesign/5.webp";
import Logo6 from "../../../public/images/logoDesign/6.webp";
import Logo7 from "../../../public/images/logoDesign/7.webp";
import Logo8 from "../../../public/images/logoDesign/8.webp";
import Logo9 from "../../../public/images/logoDesign/9.webp";
import Logo10 from "../../../public/images/logoDesign/10.webp";
import Logo11 from "../../../public/images/logoDesign/11.webp";
import Logo12 from "../../../public/images/logoDesign/12.webp";
import Logo13 from "../../../public/images/logoDesign/13.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings2 } from "../../../utils/sliderConfiguration";
const logoData = [
  {
    image: Logo1,
  },
  {
    image: Logo2,
  },
  {
    image: Logo3,
  },
  {
    image: Logo4,
  },
  {
    image: Logo5,
  },
  {
    image: Logo6,
  },
  {
    image: Logo7,
  },
  {
    image: Logo8,
  },
  {
    image: Logo9,
  },
  {
    image: Logo10,
  },
  {
    image: Logo11,
  },
  
];
const LogoSliders = () => {

  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings2} aria-hidden="false">
          {logoData.map((d, i) => (
            <div key={i}>
              <div
                className="service_portfolio_slider"
              >
                <Image src={d.image}  alt="our-client" />
              </div>
            </div>
          ))}
        </Slider>
      }
    >
      <>
        <h6>Logo Designing Portfolio</h6>
        <h4>Creative Logo Design Works</h4>
        <p>
        Our creative Logo Design process is like a swim through the swamp - we dive deep into your brand and industry to understand your values, target audience, and competition. Then we brainstorm and sketch out ideas to develop a range of logo concepts that fit your brand's personality.
        </p>
        <p>
        Our Logo Design portfolio showcases our team's experience and capabilities, with creative logo designs that are sure to make a splash. Don't just take our word for it, check out our work through the years and see for yourself!
        </p>
        <span>
          Scroll down to check our Logo Design work through the years!
        </span>
      </>
    </SectionContent4>
  );
};

export default LogoSliders;
