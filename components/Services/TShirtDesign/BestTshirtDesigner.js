import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service1 from "../../../public/images/services-1.webp";
import Service2 from "../../../public/images/services-4.webp";
import Service3 from "../../../public/images/services-5.webp";
import Image from "next/image";

const BestTshirtDesigner = () => {
  return (
    <div className="text-center best_tshirt_designers pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <h1 className="pt-3">
              What Makes Us The Best <span>T-Shirt Designers</span> In The USA
            </h1>
            <h6>We Specialize in Custom T Shirt Printing</h6>
            <p className="pb-5">
              We offer a wide range of custom and personalized options so that
              you may personalize the shirts to your brand, logo, or message. We
              make best T-Shirt Designs at Design Alligators. Try it yourself!
            </p>
          </Col>
        </Row>
        <div>
          <Row>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service1} alt="service-1" />
                </div>
                <h5>Custom T-Shirt Printing Services </h5>
                <p>
                  At Design Alligators, we pride ourselves on being experts in
                  custom t-shirt printing. From classic designs to bold
                  statements, we offer a wide range of personalized options so
                  that you can create the perfect shirt for your brand, event,
                  or message.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service2} alt="service-1" />
                </div>
                <h5>Lightning-Fast Free Delivery</h5>
                <p>
                  At Design Alligators, we understand that time is of the
                  essence. That's why we specialize in lightning-fast delivery
                  and only take an order if we are certain we can deliver it on
                  time. Our commitment to fast and reliable T-Shirt Design
                  Service means that you can focus on what matters most –
                  growing your business.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service3} alt="service-1" />
                </div>
                <h5>Unbeatable Pricing</h5>
                <p>
                  High-quality T-shirt Design shouldn't come at a premium price.
                  That's why we provide affordable T-Shirt Design Services that
                  maintain quality. Our team of talented T-Shirt Designers will
                  work with you to create a T-Shirt design that meets your
                  unique needs and fits within your budget.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BestTshirtDesigner;
