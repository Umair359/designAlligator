import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ScreenTestimonial({ d }) {
  return (
    <div className="screen-testimonial">
      <div
        className="testimonial-container"
        style={{
          background: `${d.bgColor}`,
          width: "100%",
          position: "relative",
        }}
      >
        <Container fluid>
          <Row className="gx-0 my-5 justify-content-center testimonial-content-container">
            <Col md={10}>
              <Row className="gx-0 testimonial_main_container">
                <Col
                  md={8}
                  className="text-white text-center py-5 d-flex flex-column justify-content-center pe-md-5"
                >
                  <p className="testimonial-comment">{d.comment}</p>
                  <h4 className="pt-2 testimonial-designation">
                    {d.designation}
                  </h4>
                </Col>
                <Col md={4} className="testimonial_image_section">
                  <div>
                    <Image
                      className="testimonial-image"
                      src={d.person}
                      alt="client"
                      priority
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ScreenTestimonial;
