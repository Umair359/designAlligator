import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service1 from "../../../public/images/services-1.webp";
import Service2 from "../../../public/images/services-4.webp";
import Service3 from "../../../public/images/services-5.webp";
import Image from "next/image";

const BestCatalogueDesignServices = () => {
  return (
    <div className="text-center best_tshirt_designers pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <h1 className="py-5">
              What Makes Us The Best <span>Best Catalogue Designers</span> in
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
                <h5>Tailored Design</h5>
                <p>
                  We are aware that every company is different and has various
                  needs. Because of this, our skilled design team collaborates
                  directly with you to produce a unique brochure that properly
                  captures your brand and message. For a catalogue that stands
                  out, we take the time to understand your company and target
                  market.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service2} alt="service-1" />
                </div>
                <h5>Efficient Delivery</h5>
                <p>
                  We value your time and understand that prompt delivery is
                  crucial in today's fast-paced business environment. Our team
                  specializes in lightning-fast delivery and only accepts orders
                  we are confident we can deliver on time. You can count on us
                  to get your brochures into your hands quickly and efficiently.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service3} alt="service-1" />
                </div>
                <h5>Affordable Pricing</h5>
                <p>
                  We believe that quality design shouldn't break the bank. Our
                  affordable Catalogue Design Services ensure that you get the
                  best design without sacrificing quality. We work within your
                  budget to create a brochure that meets your unique needs.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BestCatalogueDesignServices;
