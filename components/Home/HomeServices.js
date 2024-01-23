import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import WebService from "../../public/images/HS-WD.webp";
import Brand from "../../public/images/HS-VD.webp";
import Ecommerce from "../../public/images/HS-Ecommerce.webp";
import LD from "../../public/images/HS-LD.webp";
import SEO from "../../public/images/HS-SEO.webp";
import VS from "../../public/images/HS-VA.webp";
import Slider from "react-slick";
import Link from "next/link";
const services = [
  {
    image: WebService,
    name: "Web Development Services",
    description:
      "Why settle for average when you can have the best? With Design Alligators, get the attention & leads you deserve! Design Alligators will help your organization with excellent Website Development Services.",
    bg: "service_blue",
    link: "/services/website-development",
  },
  {
    image: Brand,
    name: "Brand And Visual Design",
    description:
      "Are you looking for a great deal on Brand & Visual Design? We are here to help. We offer a range of Visual Design Services to suit your needs & your budget, & we deliver quality Branding Services.",
    bg: "service_purple",
    link: "/services/branding",
  },
  {
    image: Ecommerce,
    name: "Ecommerce Marketing",
    description:
      "Get more traffic and leads on your Ecommerce Store through our eCommerce Marketing Services. Our Professional Ecommerce Marketers know how to deliver results on your eCommerce Store.",
    bg: "service_orange",
    link: "/services/ecommerce-marketing",
  },
  {
    image: LD,
    name: "Logo Design Services",
    description:
      "Need Professional Logo for your Business? Get Logo Designing Services for your brand. You’re guaranteed to get a great Logo Design Services regardless of your budget with our affordable & reasonable Logo packages.",
    bg: "service_pink",
    link: "/services/logo-design",
  },
  {
    image: SEO,
    name: "Search Engine Optimization",
    description:
      "Design Alligators offers Search Engine Optimization Solutions to businesses in United States and other countries. We work side-by-side with clients to make sure that we're creating an SEO Plan for your business.",
    bg: "service_purple",
    link: "/services/search-engine-optimization",
  },
  {
    image: VS,
    name: "Video Animation Services",
    description:
      "Design Alligators is a Video Animation Services providing Company whose mission is to convert your thoughts into perfect Video Animation. Target your Customers/Clients with an attractive Business Animations.",
    bg: "service_orange",
    link: "/services/video-animation",
  },
];
const HomeServices = () => {
  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom_slick_prev`}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  }

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom_slick_next`}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    draggable: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      // {
      //   breakpoint: 1500,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-5 home_service_main">
      <Row className="g-3 justify-content-center">
        <Col md={10}>
          <h3 className="text-green text-center">
            Simplifying Complex Projects
          </h3>
          <h2 className="text-center">
            Driven By Commitment, Passion, & Integrity
          </h2>
          <p className="py-3 text-center">
            At Design Alligators, we create, shape, and deliver consistent and
            meaningful marketing communications that generate desired responses.
            Our skills and experience provide you with a reliable marketing
            partner, whether you need{" "}
            <Link href="/services/website-development">
              Website Development Services
            </Link>
            , <Link href="/services/logo-design">Logo Design Services</Link>, or
            any other digital solution.
          </p>
        </Col>
      </Row>
      <div className="mt-3">
        <Row className="g-3 home_services_slider">
          {/* <Col md={4}> */}
          <Slider {...settings} aria-hidden="false">
            {services.map((s, i) => (
              <div key={i}>
                <div className="d-flex justify-content-center">
                  <Link href={s.link}>
                    <div className={`service_card ${s.bg}`}>
                      <div>
                        <Image src={s.image} width={36} alt="service" />
                      </div>
                      <h5 className="mt-4 mb-3">{s.name}</h5>
                      <p>{s.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </Row>
      </div>
    </div>
  );
};

export default HomeServices;
