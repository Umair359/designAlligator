import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionContent2 = ({ image, children, center }) => {
  return (
    <div className="my-4">
      <Container fluid className="w-90">
        <Row className="expert_designers_main">
          <Col md={6} className="d-flex align-items-center">
            <div className="section_2_img_box">
              <Image src={image} alt="designers" />
            </div>
          </Col>
          <Col
            md={6}
            className={` d-flex flex-column ${
              center ? "justify-content-center" : "justify-content-start"
            }`}
          >
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionContent2;
