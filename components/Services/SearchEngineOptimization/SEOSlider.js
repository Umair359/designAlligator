import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import SEO1 from "../../../public/images/SEO/1.webp";
import SEO2 from "../../../public/images/SEO/2.webp";
import SEO3 from "../../../public/images/SEO/3.webp";
import SEO4 from "../../../public/images/SEO/4.webp";
import { sliderSettings2 } from "../../../utils/sliderConfiguration";

const SEOData = [
  {
    image: SEO1,
  },
  {
    image: SEO2,
  },
  {
    image: SEO3,
  },
  {
    image: SEO4,
  },
];
const SEOSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings2} aria-hidden="false">
          {SEOData.map((d, i) => (
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
          Design Alligators has been providing Professional SEO Services for
          over 5 years, with hundreds of Search Engine Optimization (SEO)
          Projects under our belt. We have been expertly converting dull,
          unappealing websites into sleek, beautiful, professional sites. With
          every project that passes through our doors, we gain more experience
          and hone our skills. Our Professional SEO Services portfolio shows our
          experience and capabilities.
        </p>
      </>
    </SectionContent4>
  );
};

export default SEOSlider;
