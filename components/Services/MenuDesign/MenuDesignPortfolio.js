import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Menu1 from "../../../public/images/MenuDesign/1.webp";
import Menu2 from "../../../public/images/MenuDesign/2.webp";
import Menu3 from "../../../public/images/MenuDesign/3.webp";
import Menu4 from "../../../public/images/MenuDesign/4.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const menuData = [
  {
    image: Menu1,
  },
  {
    image: Menu2,
  },
  {
    image: Menu3,
  },
  {
    image: Menu4,
  },
  {
    image: Menu1,
  },
  {
    image: Menu2,
  },
  {
    image: Menu3,
  },
  {
    image: Menu4,
  },
];
const MenuDesignPortfolio = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
          {menuData.map((d, i) => (
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
          Our Custom <span className="text-green">Menu Design Services</span>{" "}
          Portfolio
        </h4>
        <p>
          Explore our custom menu design services portfolio: witness the
          excellence in menu design for our valued clients.
        </p>
      </>
    </SectionContent4>
  );
};

export default MenuDesignPortfolio;
