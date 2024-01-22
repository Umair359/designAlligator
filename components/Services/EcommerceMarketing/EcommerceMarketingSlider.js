import React from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import Ecommerce1 from "../../../public/images/EcommerceMarketing/1.webp";
import Ecommerce2 from "../../../public/images/EcommerceMarketing/2.webp";
import Ecommerce3 from "../../../public/images/EcommerceMarketing/3.webp";
import Ecommerce4 from "../../../public/images/EcommerceMarketing/4.webp";
import Image from "next/image";
import { sliderSettings2 } from "../../../utils/sliderConfiguration";

const UiDesignData = [
  {
    image: Ecommerce1,
  },
  {
    image: Ecommerce2,
  },
  {
    image: Ecommerce3,
  },
  {
    image: Ecommerce4,
  },
  {
    image: Ecommerce1,
  },
  {
    image: Ecommerce2,
  },
  {
    image: Ecommerce3,
  },
  {
    image: Ecommerce4,
  },
];
const EcommerceMarketingSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings2} aria-hidden="false">
          {UiDesignData.map((d, i) => (
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
        <h6>Portfolio</h6>
        <h4>Creative Works</h4>
        <p>
          Design Alligators is a top-rated eCommerce Marketing Agency in United
          States, providing effective eCommerce Marketing Solutions to
          businesses looking to grow their online sales. With years of
          experience in the industry, we have helped numerous eCommerce
          businesses achieve their digital marketing goals by creating
          customized eCommerce Marketing Campaigns that drive website traffic,
          generate leads, and increase conversions.
        </p>
      </>
    </SectionContent4>
  );
};

export default EcommerceMarketingSlider;
