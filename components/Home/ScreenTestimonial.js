import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Stars from '../../public/images/NewUI/stars.png'
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
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden" }}>

              <Image
                className="testimonial-image"
                src={d.person}
                alt="client"
                priority
              />
            </div>
            <Image style={{ marginTop: "10px" }} src={Stars} alt="stars.png" />
            <p style={{ textAlign: "center", fontWeight: "bold", width: "80%", marginTop: "20px" }} className="testimonial-comment">{d.comment}</p>
            <h4 style={{ fontSize: "16px", color: "#444444 !important" }} className="pt-2 testimonial-designation">
              {d.designation}
            </h4>
            <h5 style={{ fontSize: "16px", color: "#999999" }} >1 Day Ago</h5>
          </div>


        </Container>
      </div>
    </div>
  );
}

export default ScreenTestimonial;
/*
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
 */