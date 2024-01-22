import React from "react";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import Branding1 from "../../../public/images/branding/1.webp";
import Branding2 from "../../../public/images/branding/2.webp";
import Branding3 from "../../../public/images/branding/3.webp";
import Branding4 from "../../../public/images/branding/4.webp";
import Slider from "react-slick";
import Image from "next/image";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const brandData = [
  {
    image: Branding1,
  },
  {
    image: Branding2,
  },
  {
    image: Branding3,
  },
  {
    image: Branding4,
  },
  {
    image: Branding1,
  },
  {
    image: Branding2,
  },
  {
    image: Branding3,
  },
  {
    image: Branding4,
  },
  
];
const BrandingSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
          {brandData.map((d, i) => (
            <div key={i}>
              <div
                className="service_portfolio_slider"
              >
                <Image
                  className="services-slider-image"
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
        <h6>Branding Portfolio</h6>
        <h4>Creative Branding Work</h4>
        <p>
          Design Alligators is well known as the Top Branding Company in the
          United States that has been creating stunning and Professional Brands
          and Visual Designs for over 5 years, with hundreds of projects under
          our belt. We have been expertly converting dull, unappealing websites
          into Sleek, Beautiful, Professional Websites. With every project that
          passes through our doors, we gain more experience and hone our skills.
          Our Best Branding Services and Visual Design Portfolio show our
          experience and capabilities in Branding Services. Check Our Branding
          Portfolio.
        </p>
        <span>
          Scroll down to check our Best Branding Services work through the
          years!
        </span>
      </>
    </SectionContent4>
  );
};

export default BrandingSlider;
