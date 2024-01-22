import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Develop from "../../public/images/development.webp";
const Development = () => {
  return (
    <div className="branding_design">
      <Container fluid className="w-90">
        <Row className="align-items-start">
          <Col md={7}>
            <div>
              <Image src={Develop} alt="design" />
            </div>
          </Col>
          <Col md={5} className="branding_design_content">
            <h2>Development</h2>
            <p>
              We provide the Best Website Development Services in New York. We
              have been offering unique web solutions and connections with small
              and large organizations
            </p>
            <ul>
              <li>Website Development</li>
              <li>E-commerce Solution</li>
              <li>Web App Development</li>
              <li>Mobile Applications</li>
              <li>Website Re-Design/Development</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Development;
