import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Catalogue1 from "../../../public/images/CatalogueDesign/1.webp";
import Catalogue2 from "../../../public/images/CatalogueDesign/2.webp";
import Catalogue3 from "../../../public/images/CatalogueDesign/3.webp";
import Catalogue4 from "../../../public/images/CatalogueDesign/4.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings2 } from "../../../utils/sliderConfiguration";

const catalogueData = [
  {
    image: Catalogue1,
  },
  {
    image: Catalogue2,
  },
  {
    image: Catalogue3,
  },
  {
    image: Catalogue4,
  },
  
];
const CatalogueDesignPortfolio = () => {
  
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings2} aria-hidden="false">
          {catalogueData.map((d, i) => (
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
          Our <span className="text-green">Catalogue Design Services</span> Portfolio
        </h4>
        <p>Have A Look At Some Of Our Exciting Catalog Designer Work We Did For Our Customers</p>
      </>
    </SectionContent4>
  );
};

export default CatalogueDesignPortfolio;
