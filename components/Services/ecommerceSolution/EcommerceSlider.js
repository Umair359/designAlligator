import React from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import EcommerceApp1 from "../../../public/images/EcommerceSolution/1.webp";
import EcommerceApp2 from "../../../public/images/EcommerceSolution/2.webp";
import EcommerceApp3 from "../../../public/images/EcommerceSolution/3.webp";
import EcommerceApp4 from "../../../public/images/EcommerceSolution/4.webp";
import EcommerceApp5 from "../../../public/images/EcommerceSolution/5.webp";

import Image from "next/image";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const UiDesignData = [
  {
    image: EcommerceApp1,
  },
  {
    image: EcommerceApp2,
  },
  {
    image: EcommerceApp3,
  },
  {
    image: EcommerceApp4,
  },
  {
    image: EcommerceApp5,
  },
];
const EcommerceSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
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
        <h6>Ecommerce Development Portfolio</h6>
        <h4>Creative Ecommerce Development Work</h4>
        <p>
          We're passionate about creating visually stunning and user-friendly
          eCommerce websites at Design Alligators. Our team of eCommerce
          Development Experts has been providing top-notch eCommerce Development
          Solutions for over 5 years, with a wealth of experience in eCommerce
          Design Services and eCommerce Development Services. We've worked on
          hundreds of projects and have successfully transformed bland,
          unappealing sites into sleek and professional ones that engage and
          convert visitors.
        </p>
        <p>
          With every new project, we strive to improve our skills and create
          eCommerce websites that stand out. Look at our portfolio and see the
          quality of our eCommerce Development Solutions. We've got you covered,
          from eCommerce Website Design to eCommerce Design Development and
          everything in between!
        </p>
        <span>
          Scroll down to check our eCommerce Development work through
          the years!
        </span>
      </>
    </SectionContent4>
  );
};

export default EcommerceSlider;
