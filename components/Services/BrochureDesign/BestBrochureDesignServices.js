import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service1 from "../../../public/images/services-1.webp";
import Service2 from "../../../public/images/services-4.webp";
import Service3 from "../../../public/images/services-5.webp";
import Image from "next/image";

const BestBrochureDesignServices = () => {
  return (
    <div className="text-center best_tshirt_designers pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <h1 className="py-5">
              What Makes Us The Best <span>Brochure Designers</span> in the USA
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
                <h5>Lightning-Fast Free Delivery</h5>
                <p>
                  We understand that time is of the essence when it comes to
                  promoting your business or organization. That's why we
                  specialize in lightning-fast delivery and only take an order
                  if we are certain we can deliver it on time. Our commitment to
                  fast and reliable service means that you can focus on what
                  matters most – promoting your business or organization.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service2} alt="service-1" />
                </div>
                <h5>Unbeatable Pricing</h5>
                <p>
                  We believe that high-quality Brochure Design shouldn't come at
                  a premium price. That's why we provide affordable Brochure
                  Design Services that maintain quality. Our team of talented
                  Brochure Designers will work with you to create a brochure
                  that meets your unique needs and fits within your budget.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_box">
                <div className="mb-3">
                  <Image src={Service3} alt="service-1" />
                </div>
                <h5>Expert Design Review & Repair</h5>
                <p>
                  At Design Alligators, every order we receive is inspected and
                  restored by our in-house experts. We understand the importance
                  of quality design, which is why we go above and beyond to
                  ensure that every brochure we produce is of the highest
                  standard. You can trust us to deliver a brochure that not only
                  looks great but functions flawlessly, helping to promote your
                  business or organization and make it a success.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BestBrochureDesignServices;
