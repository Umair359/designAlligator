import React from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import Email1 from "../../../public/images/email-1.webp";
import Email2 from "../../../public/images/email-2.webp";
import Email3 from "../../../public/images/email-3.webp";
import Image from "next/image";
import { sliderSettings } from "../../../utils/sliderConfiguration";

const UiDesignData = [
  {
    image: Email1,
  },
  {
    image: Email2,
  },
  {
    image: Email3,
  },
  {
    image: Email1,
  },
  {
    image: Email2,
  },
  {
    image: Email3,
  },
  {
    image: Email1,
  },
  {
    image: Email2,
  },
];
const EmailMarketingSlider = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings} aria-hidden="false">
          {UiDesignData.map((d, i) => (
            <div key={i}>
              <div
                className=""
                style={{
                  width: "94%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
          Design Alligators is a leading professional Email Marketing Company in
          the USA, offering top-quality Email Marketing Services to businesses
          of all sizes. With over 5 years of experience in the industry, we have
          managed hundreds of successful email marketing campaigns, helping our
          clients achieve their digital marketing goals. Our team of email
          marketing experts specializes in creating customized email campaigns
          that engage your audience, drive website traffic, and generate leads
          and sales.
        </p>
        
      </>
    </SectionContent4>
  );
};

export default EmailMarketingSlider;
