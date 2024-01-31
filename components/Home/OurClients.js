import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Client1 from "../../public/images/client-1.webp";
import Client2 from "../../public/images/client-2.webp";
import Client3 from "../../public/images/client-3.webp";
import Client4 from "../../public/images/client-4.webp";
import Client5 from "../../public/images/client-5.webp";
import Client6 from "../../public/images/client-6.webp";
import Client7 from "../../public/images/client-7.webp";
import Client8 from "../../public/images/client-8.webp";
import Client9 from "../../public/images/client-9.webp";
import Client10 from "../../public/images/client-10.webp";
import Client11 from "../../public/images/client-11.webp";
import Client12 from "../../public/images/client-12.webp";

const portfolioData = [
  {
    image: Client1,
  },
  {
    image: Client2,
  },
  {
    image: Client3,
  },
  {
    image: Client4,
  },
  {
    image: Client5,
  },
  {
    image: Client6,
  },
  {
    image: Client1,
  },
  {
    image: Client2,
  },
  {
    image: Client3,
  },
  {
    image: Client4,
  },
  {
    image: Client5,
  },
  {
    image: Client6,
  }
];
const portfolioData2 = [
  {
    image: Client7,
  },
  {
    image: Client8,
  },
  {
    image: Client9,
  },
  {
    image: Client10,
  },
  {
    image: Client11,
  },
  {
    image: Client12,
  },
  {
    image: Client7,
  },
  {
    image: Client8,
  },
  {
    image: Client9,
  },
  {
    image: Client10,
  },
  {
    image: Client11,
  },
  {
    image: Client12,
  },
];
const OurClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    draggable: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    <div className="my-5">
      <Container fluid className="w-90">
        <Row className="justify-content-center text-center our-clients-main">
          <Col md={9}>
            <h6>Our Clients</h6>
            <h3>We work with brands</h3>
            <p>
              We work with companies in all regions of the U.S. and beyond,
              helping them put their best faces forward online. We aim to
              provide outstanding results for our clients on every project we
              undertake. We work with several international brands that trust us
              with their web pages to gain outstanding results.
            </p>
          </Col>
        </Row>
        <div class="slider">
          <div class="slide-track">

            {portfolioData.map((d, i) => (
              <div key={i} class="slide">
                <Image src={d.image} alt={`${d.image}`} />
              </div>
            ))}
          </div>
        </div>
        <div class="slider left">
          <div class="slide-track">

            {portfolioData2.map((d, i) => (
              <div key={i} class="slide">
                <Image src={d.image} alt={`${d.image}`} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurClients;
/*
<>
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <Image src={Brand11} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand12} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand13} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand14} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand11} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand12} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand13} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand14} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand11} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand12} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand13} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand14} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand11} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand12} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand13} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand14} alt="brand11.png" />
      </div>
    </div>
  </div>
  <div class="slider left">
    <div class="slide-track">
      <div class="slide">
        <Image src={Brand21} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand22} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand23} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand24} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand21} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand22} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand23} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand24} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand21} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand22} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand23} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand24} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand21} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand22} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand23} alt="brand11.png" />
      </div>
      <div class="slide">
        <Image src={Brand24} alt="brand11.png" />
      </div>
    </div>
  </div>


</>*/