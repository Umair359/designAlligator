import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Award from "../../../public/images/seo-award.svg";
const SEOAward = () => {
  return (
    <div className="web_dev_award">
      <Container>
        <div className="award_box">
          <Row className="align-items-center gx-5 ">
            <Col md={4} className="award_image">
              <Image src={Award} />
            </Col>
            <Col md={8} className="award_content ps-md-5">
              <h6>Top SEO</h6>
              <h1>Services Company</h1>
              <p>
                Design Alligators have exceeded the expectations of its clients
                when it comes to digital marketing on search engines. We thank
                Goodfirms to recognize us as a Top SEO Services Company.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SEOAward;
