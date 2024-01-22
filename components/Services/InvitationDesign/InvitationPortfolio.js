import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Invitation1 from "../../../public/images/InvitationCard/1.webp";
import Invitation2 from "../../../public/images/InvitationCard/2.webp";
import Invitation3 from "../../../public/images/InvitationCard/3.webp";
import Invitation4 from "../../../public/images/InvitationCard/4.webp";
import Image from "next/image";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import { sliderSettings2 } from "../../../utils/sliderConfiguration";
const invitationData = [
  {
    image: Invitation1,
  },
  {
    image: Invitation2,
  },
  {
    image: Invitation3,
  },
  {
    image: Invitation4,
  },
  {
    image: Invitation1,
  },
  {
    image: Invitation2,
  },
  {
    image: Invitation3,
  },
  {
    image: Invitation4,
  },
];
const InvitationPortfolio = () => {
  return (
    <SectionContent4
      slider={
        <Slider {...sliderSettings2} aria-hidden="false">
          {invitationData.map((d, i) => (
            <div key={i}>
              <div className="service_portfolio_slider">
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
          Our <span className="text-green">Invitation Card Designing</span>{" "}
          Portfolio
        </h4>
        <p>
          Whatever the occasion, our invitation cards will help you get the
          message across in style. We have a wide range of designs to choose
          from, or we can custom-design something unique for your company or
          event.
        </p>
      </>
    </SectionContent4>
  );
};

export default InvitationPortfolio;
