import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import Website1 from "../../../public/images/webReDesign/1.webp";
import Website2 from "../../../public/images/webReDesign/2.webp";
import Website3 from "../../../public/images/webReDesign/3.webp";
import Website4 from "../../../public/images/webReDesign/4.webp";
import Website5 from "../../../public/images/webReDesign/5.webp";
import Website6 from "../../../public/images/webReDesign/6.webp";
import Website7 from "../../../public/images/webReDesign/7.webp";

import { sliderSettings } from "../../../utils/sliderConfiguration";

const websiteData = [
  {
    image: Website1,
  },
  {
    image: Website2,
  },
  {
    image: Website3,
  },
  {
    image: Website4,
  },
  {
    image: Website5,
  },
  {
    image: Website6,
  },
  {
    image: Website7,
  },
  
];
const WebsiteRedesignSlider = () => {
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
        <h6>Website Redesign Portfolio</h6>
        <h4>Creative Website Redesign Works</h4>
        <p>
          At Design Alligators, we understand that your website is the face of
          your business, and a dull or outdated design can turn potential
          customers away. That's why we offer professional Website Redesign
          Services to help your website stand out from the crowd and deliver a
          memorable user experience.
        </p>
        <span>
          As an alligator might say, "We snap into action so you don't have to
          wait around!"
        </span>
      </>
    </SectionContent4>
  );
};

export default WebsiteRedesignSlider;
