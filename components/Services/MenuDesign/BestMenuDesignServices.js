import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service1 from "../../../public/images/services-1.webp";
import Service2 from "../../../public/images/services-4.webp";
import Service3 from "../../../public/images/services-5.webp";
import Image from "next/image";

const BestMenuDesignServices = () => {
  return (
    <div className="text-center best_tshirt_designers pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <h1 className="py-5">
              We Are Your Top Choice for Restaurant <span>Menu Design</span> in
              the USA
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
                <h5>Expert Designing</h5>
                <p>
                  At Design Alligators, we take pride in being experts in the
                  art of menu designing. Our team of skilled Menu Designers will
                  work with you to bring your unique vision to life and create a
                  menu that perfectly captures the essence of your restaurant or
                  food business.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service2} alt="service-1" />
                </div>
                <h5>Fast Delivery</h5>
                <p>
                  We understand that time is of the essence when it comes to
                  running a restaurant or food business. That's why we
                  specialize in lightning-fast delivery and only take an order
                  if we are certain we can deliver it on time.
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
                  At Designalligators, we're committed to making Restaurant Menu
                  Design accessible without compromising quality. Discover our
                  affordable Restaurant Menu Design Services that deliver
                  exceptional value.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BestMenuDesignServices;
