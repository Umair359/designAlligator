import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service1 from "../../public/images/services-1.webp";
import Service2 from "../../public/images/services-2.webp";
import Service3 from "../../public/images/services-3.webp";
import Service4 from "../../public/images/services-4.webp";
import Service5 from "../../public/images/services-5.webp";
const services = [
  {
    service_image: Service1,
    service_name: "Web And Mobile Development",
    info: "You aren’t limited to a standard template; you get designed custom websites that are tailored to your unique specifications. Our experienced web and mobile app developers include UX designers, visual designers and software engineers who work on the webpage keeping usability and scalability in mind. Our designs are tailored to fit the needs of your business, while also catering to your website visitors and search engines.",
  },
  {
    service_image: Service2,
    service_name: "Graphic Design",
    info: "Design Alligators is a marketplace that connects graphic designers with customers seeking logo design, flyer design, etc. Whatever the design work you have in mind, Design Alligators can deliver. We offer a range of graphic design services to suit your needs and your budget, and we deliver a quality service that's sure to bring you more customers. We believe that branding is a crucial aspect of any business. We help you create a lasting identity to represent your company.",
  },
  {
    service_image: Service3,
    service_name: "Brand & Visual Design",
    info: "At Design Alligators, we create more than just logos. We create brands that turn heads! A brand is the visual identity of your business, which is why it pays to partner with a creative agency that understands branding as well as design. Our team of branding experts will take the time to understand you and your business, so that we can design a brand that fits your image, personality, and marketing goals.",
  },
  {
    service_image: Service4,
    service_name: "Digital Marketing",
    info: "We specialize in driving traffic, increasing conversions, and maximizing customer satisfaction. Our company's experts have over 10 years of combined experience in providing digital marketing solutions designed to help businesses gain increased visibility. By utilizing cutting-edge technology, we offer a range of flexible services that allow us to meet our clients' unique needs and adapt our strategies in response to the rapidly changing digital landscape.",
  },
  {
    service_image: Service5,
    service_name: "Video Animation",
    info: "Design Alligator is a video animation services company whose mission is to aid you in your content marketing, social media, and search engine optimization efforts. We craft animated videos that convey your message to the target audience in an appealing way, increasing the chances that they will take action on your brand and ultimately lead to conversions. Our team creates video content that is crisp, clean, and informative and that makes an immediate impact on potential customers.",
  },
];
const WhatWeDo = () => {
  return (
    <div className="my-5 py-5">
      <Container fluid className="w-90">
        <Row className="justify-content-center">
          <Col md={10} className="text-center what_we_do_main">
            <h1>What we do</h1>
            <p className="pb-3">
              You get work which identifies opportunities for growth. You direct
              us, and we help create a marketing strategy and provide ongoing
              support to help you get to your dreams. Our clients trust us
              because we know what it takes to make you successful. We take the
              time to understand your business and your marketplace, and then we
              apply our experience and knowledge to create a custom marketing
              plan for you that achieves results.
            </p>
          </Col>
          <Row className="justify-content-center mt-4 gy-4">
            {services.map((s)=>(
                <Col md={4}>
                <div className="service_box">
                  <div className="mb-3">
                    <Image src={s.service_image} alt="service-1" />
                  </div>
                  <h5>{s.service_name}</h5>
                  <p>
                    {s.info}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default WhatWeDo;
