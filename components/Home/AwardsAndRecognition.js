import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Award1 from "../../public/images/award-1.webp";
import Award2 from "../../public/images/award-2.webp";
import Award3 from "../../public/images/award-3.webp";
import Award4 from "../../public/images/award-4.webp";
import Award5 from "../../public/images/award-5.webp";
import Award6 from "../../public/images/award-6.webp";

import Brand11 from '../../public/images/NewUI/brand11.png';
import Brand12 from '../../public/images/NewUI/brand12.png';
import Brand13 from '../../public/images/NewUI/brand13.png';
import Brand14 from '../../public/images/NewUI/brand14.png';

import Brand21 from '../../public/images/NewUI/brand21.png';
import Brand22 from '../../public/images/NewUI/brand22.png';
import Brand23 from '../../public/images/NewUI/brand23.png';
import Brand24 from '../../public/images/NewUI/brand24.png';



const awardData = [
  {
    image: Award1,
    title: "Best Website Design Agency",
    description:
      "Design Alligators is recognized as Best Website Design Agencies by DesignRush",
  },
  {
    image: Award2,
    title: "Top Custom Software Development Companies",
    description:
      "Design Alligators is recognized as Top Custom Software Development Companies by ITRate.co.",
  },
  {
    image: Award3,
    title: "Top Website Developers",
    description:
      "We are recognized as Top Website Developers in 2022 by Clutch",
  },
  {
    image: Award4,
    title: "Verified Designing Company",
    description:
      "Design Alligators is recognized as Top Custom Software Development Companies by AgencyVista.",
  },
  {
    image: Award5,
    title: "Top Web Development Companies",
    description:
      "Design Alligators is recognized as Top Website Developers in 2022 by TopDevelopers",
  },
  {
    image: Award6,
    title: "Top Web Designing Company",
    description:
      "We are recognized as Top Website Developers in 2022 by GoodFirms",
  },
];
const AwardsAndRecognition = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>

      <Row className="py-4">
        <Slider {...settings} >
          <div className="brand-container">
            <Image src={Brand11} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand12} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand13} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand14} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand14} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand11} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand12} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand13} alt="brand11.png" />
          </div>
        </Slider>
        <Slider {...settings} >
          <div className="brand-container">
            <Image src={Brand21} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand22} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand23} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand24} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand24} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand21} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand22} alt="brand11.png" />
          </div>
          <div className="brand-container">
            <Image src={Brand23} alt="brand11.png" />
          </div>
        </Slider>
      </Row>

    </>
  );
};

export default AwardsAndRecognition;
