import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service1 from "../../../public/images/services-1.webp";
import Service2 from "../../../public/images/services-4.webp";
import Service3 from "../../../public/images/services-5.webp";
import Image from "next/image";

const BestFlyerDesignServices = () => {
  return (
    <div className="text-center best_tshirt_designers pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <h1 className="py-5">
              What Makes Us The Best <span>Flyer Designers</span> in the USA
            </h1>
          </Col>
        </Row>
        <div>
          <Row>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service1} alt="service-1" />
                </div>
                <h5>Expert Flyer Designing</h5>
                <p>
                  At Design Alligators, we take pride in being experts in the
                  art of Flyer Designing. Our team of skilled Flyer Designers
                  will work with you to bring your unique vision to life and
                  create a flyer that perfectly captures the essence of your
                  business, event, or promotion. We offer a wide range of
                  personalized options so that you can create the perfect flyer
                  that meets your specific needs.
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
                  We understand that time is of the essence when it comes to
                  promoting your business or event. That's why we specialize in
                  lightning-fast delivery and only take an order if we are
                  certain we can deliver it on time. Our commitment to fast and
                  reliable service means that you can focus on what matters most
                  – promoting your business or event.
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
                  We believe that high-quality Flyer Design shouldn't come at a
                  premium price. That's why we provide affordable Flyer Design
                  Services that maintain quality. Our team of talented Flyer
                  Designers will work with you to create a flyer that meets your
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

export default BestFlyerDesignServices;
