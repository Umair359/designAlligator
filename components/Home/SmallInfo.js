import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Info from "../../public/images/home-2.webp";
import HomeServices from "./HomeServices";
import { useRouter } from "next/router";
import Link from "next/link";
import HomeInfo1 from '../../public/images/NewUI/homeInfo1.png'
import HomeInfo2 from '../../public/images/NewUI/homeInfo2.png'
import HomeInfo3 from '../../public/images/NewUI/homeInfo3.png'
import NumberCounter from "../../utils/NumberCounter";
import Slider from "react-slick";
const SmallInfo = () => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    draggable: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="home-info">
      <div>
        <h3>Welcome to Design Alligators that brings your wildest digital dreams to life! As a leading Digital Design Agency based in the United States, we're passionate about crafting stunning, engaging websites that showcase our clients' unique personalities.</h3>
        <p>Our Website Development Services are second to none, delivering beautiful, intuitive websites that perfectly capture your brand's essence. From conception to launch, our team of talented designers and developers work tirelessly to create a website that reflects your vision and exceeds your expectations.</p>
      </div>
      <div class="slider home-info-slider ">
        <div class="slide-track">
          <div className="service-slider-item slide home-info-slider" >
            <Image src={HomeInfo1} alt="homeInfo1.png" />
            <div>
              <h3>Web Development Services</h3>
              <p>Why settle for average when you can have the best? With Design Alligators, get the attention & leads you deserve! Design Alligators will help your organization with excellent Website Development Services.</p>
            </div>
          </div>
          <div className="service-slider-item pink slide" >
            <Image src={HomeInfo3} alt="homeInfo3.png" />
            <div>
              <h3>Brand And Visual Design</h3>
              <p>Are you looking for a great deal on Brand & Visual Design? We are here to help. We offer a range of Visual Design Services to suit your needs & your budget, & we deliver quality Branding Services.</p>
            </div>
          </div>
          <div className="service-slider-item slide " >
            <Image src={HomeInfo2} alt="homeInfo2.png" />
            <div>
              <h3>Ecommerce Marketing</h3>
              <p>Get more traffic and leads on your Ecommerce Store through our eCommerce Marketing Services. Our Professional Ecommerce Marketers know how to deliver results on your eCommerce Store.</p>
            </div>
          </div>
          <div className="service-slider-item pink slide" >
            <Image src={HomeInfo1} alt="homeInfo1.png" />
            <div>
              <h3>Web Development Services</h3>
              <p>Why settle for average when you can have the best? With Design Alligators, get the attention & leads you deserve! Design Alligators will help your organization with excellent Website Development Services.</p>
            </div>
          </div>
          <div className="service-slider-item slide" >
            <Image src={HomeInfo3} alt="homeInfo3.png" />
            <div>
              <h3>Brand And Visual Design</h3>
              <p>Are you looking for a great deal on Brand & Visual Design? We are here to help. We offer a range of Visual Design Services to suit your needs & your budget, & we deliver quality Branding Services.</p>
            </div>
          </div>
          <div className="service-slider-item pink slide"  >
            <Image src={HomeInfo2} alt="homeInfo2.png" />
            <div>
              <h3>Ecommerce Marketing</h3>
              <p>Get more traffic and leads on your Ecommerce Store through our eCommerce Marketing Services. Our Professional Ecommerce Marketers know how to deliver results on your eCommerce Store.</p>
            </div>
          </div>
          <div className="service-slider-item slide" >
            <Image src={HomeInfo1} alt="homeInfo1.png" />
            <div>
              <h3>Web Development Services</h3>
              <p>Why settle for average when you can have the best? With Design Alligators, get the attention & leads you deserve! Design Alligators will help your organization with excellent Website Development Services.</p>
            </div>
          </div>
          <div className="service-slider-item pink slide" >
            <Image src={HomeInfo3} alt="homeInfo3.png" />
            <div>
              <h3>Brand And Visual Design</h3>
              <p>Are you looking for a great deal on Brand & Visual Design? We are here to help. We offer a range of Visual Design Services to suit your needs & your budget, & we deliver quality Branding Services.</p>
            </div>
          </div>
          <div className="service-slider-item slide " >
            <Image src={HomeInfo2} alt="homeInfo2.png" />
            <div>
              <h3>Ecommerce Marketing</h3>
              <p>Get more traffic and leads on your Ecommerce Store through our eCommerce Marketing Services. Our Professional Ecommerce Marketers know how to deliver results on your eCommerce Store.</p>
            </div>
          </div>
          <div className="service-slider-item pink slide" >
            <Image src={HomeInfo1} alt="homeInfo1.png" />
            <div>
              <h3>Web Development Services</h3>
              <p>Why settle for average when you can have the best? With Design Alligators, get the attention & leads you deserve! Design Alligators will help your organization with excellent Website Development Services.</p>
            </div>
          </div>
          <div className="service-slider-item slide" >
            <Image src={HomeInfo3} alt="homeInfo3.png" />
            <div>
              <h3>Brand And Visual Design</h3>
              <p>Are you looking for a great deal on Brand & Visual Design? We are here to help. We offer a range of Visual Design Services to suit your needs & your budget, & we deliver quality Branding Services.</p>
            </div>
          </div>
          <div className="service-slider-item pink slide"  >
            <Image src={HomeInfo2} alt="homeInfo2.png" />
            <div>
              <h3>Ecommerce Marketing</h3>
              <p>Get more traffic and leads on your Ecommerce Store through our eCommerce Marketing Services. Our Professional Ecommerce Marketers know how to deliver results on your eCommerce Store.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>I Need A Custom Quote</button>
      </div>
      <div className="achievement">
        <div>
          <NumberCounter startNumber={0} endNumber={1.2} duration={0.042} fixed={1} symbol="k +" />
          <h5>Website Developed</h5>
        </div>
        <div>
          <NumberCounter startNumber={0} endNumber={400} duration={0.042} fixed={0} symbol="+" />
          <h5>Marketing Collateral</h5>
        </div>
        <div>
          <NumberCounter startNumber={0} endNumber={1.5} duration={0.042} fixed={1} symbol="k +" />

          <h5>Logos identity</h5>
        </div>
        <div>
          <NumberCounter startNumber={0} endNumber={7.3} duration={0.042} fixed={1} symbol="k +" />

          <h5>Secs Animated</h5>
        </div>
        <div>
          <NumberCounter startNumber={0} endNumber={5} duration={0.042} fixed={0} symbol="+" />
          <h5>Years of experience</h5>
        </div>

      </div>
    </div>
  );
};

export default SmallInfo;
