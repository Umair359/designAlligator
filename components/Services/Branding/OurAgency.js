import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandImg3 from "../../../public/images/Branding-image-3.webp";
import Link from "next/link";
const OurAgency = () => {
  return (
    <div className="my-5">
      <Container fluid className="w-90">
        <div className="our_agency_main">
          <Row>
            <Col md={7}>
              <h6 className="text-green">
                Branding Agency in the United States
              </h6>
              <h4>Brand Identity: Making Your Business Stand Out</h4>
              <p>
                Your brand is more than just a logo. It's the personality of
                your business. At Design Alligators, a <Link href= "/services/logo-design">Logo Design Agency</Link>, we
                know the importance of creating a strong brand identity that
                reflects your company's values and resonates with your audience.
              </p>
              <h4>The Power of Visual Design</h4>
              <p>
                Our Creative Visual Design Team helps you establish a brand
                identity that is visually appealing and consistent with your
                message. We work with you to develop a logo, tagline,
                typography, color scheme, and images that make your brand
                recognizable and memorable.
              </p>
              <h4>Telling Your Story</h4>
              <p>
                At Design Alligators, we believe in the power of storytelling.
                Our copywriters and visual designers work together to create a
                brand story that connects with your audience.
              </p>
              <h4>Building a Brand Voice</h4>
              <p>
                A consistent brand voice builds trust and loyalty among
                consumers. Our Branding and Visual Design Team can help you
                create a consistent brand voice across all platforms.
              </p>
            </Col>
            <Col md={5}>
              <Image src={BrandImg3} alt="brand" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OurAgency;
