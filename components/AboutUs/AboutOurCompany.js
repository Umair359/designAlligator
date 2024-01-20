import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../public/images/AboutImg.webp";
import KnownFor from "./KnownFor";
import Link from "next/link";

const AboutOurCompany = () => {
  return (
    <div className="about_our_company_main">
      <Container fluid className="w-90">
        <Row className="py-5 about_our_company">
          <Col className="about-content-container" md={12} lg={7}>
            <h5 className="text-green">
              About Digital Design Company in the United States
            </h5>
            <h1>
              Revamp Your Brand From Digital Design Company in United States
            </h1>
            <h6>
              Welcome to Design Alligators! Our team of design-savvy alligators
              is here to make your brand stand out from the competition.
            </h6>
            <p className="py-3">
              We don’t just create designs; we bring your vision to life. Our{" "}
              <Link href="/">Digital Design Company</Link> has been making waves in the
              industry for years, providing top-notch <Link href="services/website-development">Website Development Services</Link>,{" "}
              <Link href="services/mobile-application-development">Mobile App Development Services</Link>, <Link href="services/video-animation">Video Animation Services</Link>, and <Link href="services/website-ui-ux-design">Website Design
              Services</Link>.
            </p>
            <p>
              Our designs are as fierce as our namesake, and our client
              testimonials prove that we’re not all bark and no bite.
            </p>
          </Col>
          <Col md={5} className="about-img-container">
            <Image className="about-img" src={AboutImg} alt="about-service" />
          </Col>
        </Row>
        <KnownFor />
      </Container>
    </div>
  );
};

export default AboutOurCompany;
