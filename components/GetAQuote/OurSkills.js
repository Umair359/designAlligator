import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OurSkills = () => {
  return (
    <div className="our-skills">
      <Container>
        <Row className="justify-content-center text-center my-5">
          <Col md={10}>
            <h1>Skills on which we have worked for decades</h1>
            <p>
              Our team includes skilled videographers, designers, developers,
              digital strategists, writers, public relations professionals and
              more. We are ready to take your website and turn it into a
              smashing client-pulling business!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurSkills;
