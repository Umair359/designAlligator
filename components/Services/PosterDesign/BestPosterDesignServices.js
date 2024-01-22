import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service1 from "../../../public/images/services-1.webp";
import Service2 from "../../../public/images/services-4.webp";
import Service3 from "../../../public/images/services-5.webp";
import Image from "next/image";

const BestPosterDesignServices = () => {
  return (
    <div className="text-center best_tshirt_designers pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <h1 className="py-5">
              What Makes Us The Best <span>Best Poster Designers</span> in the
              USA
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
                <h5>Poster Design Services</h5>
                <p>
                  At Design Alligators, we provide top-notch Poster Design
                  Services for all your needs. Our team of talented designers
                  will work with you to create a stunning poster that grabs your
                  attention and delivers your message effectively.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service2} alt="service-1" />
                </div>
                <h5>Eye-Catching Designs</h5>
                <p>
                  Our team of Poster Designers are experts in creating visually
                  appealing designs that stand out from the crowd. We use the
                  latest design software and techniques to ensure your poster
                  looks amazing and captures your audience's attention.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service3} alt="service-1" />
                </div>
                <h5>Customized Options</h5>
                <p>
                  We understand that each project is unique, which is why we
                  offer customized options for every poster design project.
                  Whether you need a poster for a business, event, or personal
                  project, we'll work with you to create a design that meets
                  your specific needs.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BestPosterDesignServices;
