import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import Website1 from "../../../public/images/WebAppDev/1.webp";
import Website2 from "../../../public/images/WebAppDev/2.webp";
import Website3 from "../../../public/images/WebAppDev/3.webp";
import Website4 from "../../../public/images/WebAppDev/4.webp";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const websiteData = [
  {
    image: Website4,
  },
  {
    image: Website2,
  },
  {
  image: Website3,
},
  {
    image: Website1,
  },
  {
    image: Website4,
  },
  {
    image: Website2,
  },
  {
  image: Website3,
},
  {
    image: Website1,
  }
  
];
const WebAppSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
          {websiteData.map((d, i) => (
            <div key={i}>
              <div
                className="service_portfolio_slider"
              >
                <Image src={d.image} alt="our-client" />
              </div>
            </div>
          ))}
        </Slider>
      }
    >
      <>
        <h6>Web Application Development Portfolio</h6>
        <h4>Creative Web Application Development Works</h4>
        <p>
          Design Alligators has been in the Web Application Development business
          for over five years, with a reputation for creating impressive and
          Professional Web Application Designs. We've completed countless
          projects, each adding to our experience and skill set. Our portfolio
          showcases our Professional Web App Design and Web App Development
          capabilities, and we pride ourselves on transforming uninspiring
          websites into stunning and engaging online experiences.
        </p>
        <span>
          As an alligator might say, "We snap into action so you don't have to
          wait around!"
        </span>
      </>
    </SectionContent4>
  );
};

export default WebAppSlider;
