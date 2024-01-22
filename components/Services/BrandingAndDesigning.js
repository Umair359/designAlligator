import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Design1 from "../../public/images/design-1.webp";

const BrandingAndDesigning = () => {
  return (
    <div className="branding_design">
      <Container fluid className="w-90">
        <Row className="align-items-center">
          <Col md={5} className="branding_design_content">
            <h2>Branding & Design</h2>
            <p>
              Our more experienced designers and more hands-on support are
              included with these packages.
            </p>
            <ul>
              <li>UI/UX Design</li>
              <li>Logo Design</li>
              <li>Brand and Visual Design</li>
              <li>Video Animation</li>
              <li>Mobile App Design</li>
            </ul>
          </Col>
          <Col md={7}>
            <div>
              <Image src={Design1} alt="design" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrandingAndDesigning;
