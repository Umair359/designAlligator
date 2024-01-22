import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import TShirt1 from "../../../public/images/TShirtDesigning/1.webp";
import TShirt2 from "../../../public/images/TShirtDesigning/2.webp";
import TShirt3 from "../../../public/images/TShirtDesigning/3.webp";
import TShirt4 from "../../../public/images/TShirtDesigning/4.webp";
import TShirt5 from "../../../public/images/TShirtDesigning/5.webp";
import TShirt6 from "../../../public/images/TShirtDesigning/6.webp";
import TShirt7 from "../../../public/images/TShirtDesigning/7.webp";
import TShirt8 from "../../../public/images/TShirtDesigning/8.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const logoData = [
  {
    image: TShirt1,
  },
  {
    image: TShirt2,
  },
  {
    image: TShirt3,
  },
  {
    image: TShirt4,
  },
  {
    image: TShirt5,
  },
  {
    image: TShirt6,
  },
  {
    image: TShirt7,
  },
  {
    image: TShirt8,
  },
];
const TshirtDesignPortfolio = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
          {logoData.map((d, i) => (
            <div key={i}>
              <div className="service_portfolio_slider">
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
          Our <span className="text-green">Custom T-Shirt Design</span>{" "}
          Portfolio
        </h4>
        <p>
          Take a look at our custom T-shirt design portfolio to see some of the
          great work we've done for our clients.
        </p>
      </>
    </SectionContent4>
  );
};

export default TshirtDesignPortfolio;
