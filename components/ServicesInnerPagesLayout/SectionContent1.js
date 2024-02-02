import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionContent1 = ({ children, image, image2, center }) => {
  return (
    <Container fluid className="w-90 logo_designing_info_main">
      <Row>
        <Col
          lg={6}
          className={`logo_designing_info_left d-flex flex-column ${center ? "justify-content-center" : "justify-content-start"
            }`}
        >
          {children}
        </Col>
        {image && (
          <Col>
            <div className="section_1_img_box">
              <Image src={image} alt="section-image" className="section-image-1"/>
              {image2 && <Image src={image2} alt="section-image" className="section-image-2" />}
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SectionContent1;
