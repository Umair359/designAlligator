import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Media1 from "../../../public/images/SSM/1.webp";
import Media2 from "../../../public/images/SSM/2.webp";
import Media3 from "../../../public/images/SSM/3.webp";
import Media4 from "../../../public/images/SSM/4.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings2 } from "../../../utils/sliderConfiguration";
const mediaData = [
  {
    image: Media1,
  },
  {
    image: Media2,
  },
  {
    image: Media3,
  },
  {
    image: Media4,
  },
];
const MediaSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings2} aria-hidden="false">
          {mediaData.map((d, i) => (
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
        <h6>Social Media Marketing Portfolio</h6>
        <h4>Social Media Marketing Creative Work</h4>
        <p>
          Design Alligators has been creating stunning and Professional Social
          Media Posts for over 5 years, with hundreds of projects under our
          belt, we have been expertly converting dull, unappealing social media
          platforms into sleek, beautiful, & professional social media channels.
        </p>
      </>
    </SectionContent4>
  );
};

export default MediaSlider;
