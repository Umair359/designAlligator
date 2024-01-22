import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marketing from "../../public/images/digital_marketing.webp";

const DigitalMarketing = () => {
  return (
    <div className="branding_design">
      <Container fluid className="w-90">
        <Row className="align-items-center">
          <Col md={5} className="branding_design_content">
            <h2>Digital Marketing</h2>
            <p>
              We understand how important it is to stay competitive in today’s
              digital age, and we’re dedicated to helping you meet these goals.
            </p>
            <ul>
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing (SMM)</li>
              <li>Email Marketing</li>
              <li>PPC Services</li>
              <li>E-Commerce Marketing</li>
            </ul>
          </Col>
          <Col md={7}>
            <div>
              <Image src={Marketing} alt="digital-marketing" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DigitalMarketing;
