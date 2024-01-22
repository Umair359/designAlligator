import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Award from "../../../public/images/web-award.svg";
const WebDevAward = () => {
  return (
    <div className="web_dev_award">
      <Container>
        <div className="award_box">
          <Row className="align-items-center gx-5">
            <Col md={4} className="award_image">
              <Image src={Award} />
            </Col>
            <Col md={8} className="award_content ps-md-5">
              <h6>Top Website</h6>
              <h1>Development Agency</h1>
              <p>
                Years of experience and a long list of satisfied clients have
                enabled us to become a Leading Website Development Agency in the
                fraternity. We thank Goodfirms to recognize us as a Top SEO
                Services Company.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WebDevAward;
