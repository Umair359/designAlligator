import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Testimonial1 from "../../public/images/testimonial-1.png";
import Testimonial2 from "../../public/images/testimonial-2.png";
import Testimonial4 from "../../public/images/testimonial-4.png";
import ScreenTestimonial from "./ScreenTestimonial";
import MobileTestimonial from "./MobileTestimonial";
const Testimonial = ({ data }) => {
  const testimonialData = [
    {
      bgColor: "#ff768f",
      person: Testimonial1,
      comment:
        "Design Alligators helped us revamp our brand, and it was one of the best decisions we ever made. Their team created a beautiful, cohesive design that truly captured our brand's essence. The team was highly communicative, responsive, and easy to work with.",
      designation: "- Farah Johnson, Marketing Director at ABC Company",
    },
    {
      bgColor: "#363435",
      person: Testimonial2,
      comment:
        "We've worked with a lot of Digital Design Agencies over the years, but Design Alligators truly stands out. They have an incredible eye for design and are able to create work that is both beautiful and functional.",
      designation: "- Mark Williams, Creative Director at Dream Agency",
    },
    {
      bgColor: "#b7adad",
      person: Testimonial4,
      comment:
        "Working with Design Alligators was an absolute pleasure. They were able to take our vision and turn it into a reality. The team was professional, knowledgeable, and easy to work with. We highly recommend Design Alligators to anyone looking for Digital Design Agency.",
      designation: " - Kim Chan, CEO of Jhan Corporation",
    },
  ];
  let testimonials = data ? data : testimonialData;
  const settings = {
    dots: false,
    infinite: true,
    draggable: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="home_testimonials_main testimonial_slider_main">
      {/* <div style={{ width: "100vw", maxWidth: "100%" }}>
        <div className="text-center">
          <h5 className="text-green">Testimonials</h5>
          <h4>What Our Clients Are Saying</h4>
        </div>
        <div style={{ width: "100%", overflowX: "hidden" }}>
          <Slider {...settings}>
            {testimonials.map((d, i) => (
              <div key={i}>
                <MobileTestimonial d={d} />
                <ScreenTestimonial d={d} />
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonial;
