import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import Website1 from "../../../public/images/webReDesign/one.png";
import Website2 from "../../../public/images/webReDesign/two.png";
import Website3 from "../../../public/images/webReDesign/three.png";
import Website4 from "../../../public/images/webReDesign/four.png";

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
        <h6>Website Designing Services Portfolio</h6>
        <h4>Creative Website Design Works</h4>
        <p>
        Recognizing that your website serves as the face of your business, we acknowledge that a lackluster or outdated design has the potential to deter potential customers. This is precisely why we provide specialized Website Redesign Services at our Professional Web Designing Services in Edmonton, Canada. Best web designing near me.
        </p>
      </>
    </SectionContent4>
  );
};

export default WebsiteRedesignSlider;
