import React from "react";
import { Col, Row } from "react-bootstrap";
import AnimatedProgressBar from "../Layouts/progressBar";

const KnownFor = () => {
  return (
    <Row>
      <Col
        md={6}
        className="known_for_left_section"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h5 className="text-green">
          Design Alligators <span>Known For</span>
        </h5>
        <div className="known-for-list">
          <h6>Website Development</h6>
          <AnimatedProgressBar
            N={100}
            speed={100}
            initialValue={0}
            displayValue={0.8}
            bg="background-purple"
          />
        </div>
        <div className="known-for-list">
          <h6>Website Designing</h6>
          <AnimatedProgressBar
            N={100}
            speed={100}
            initialValue={0}
            displayValue={0.9}
            bg="background-blue"
          />
        </div>
        <div className="known-for-list">
          <h6>Branding</h6>
          <AnimatedProgressBar
            N={100}
            speed={100}
            initialValue={0}
            displayValue={0.95}
            bg="background-orange"
          />
        </div>
        <div className="known-for-list">
          <h6>Web Application</h6>
          <AnimatedProgressBar
            N={100}
            speed={100}
            initialValue={0}
            displayValue={0.75}
            bg="background-green"
          />
        </div>
        <div className="known-for-list">
          <h6>Digital Marketing</h6>
          <AnimatedProgressBar
            N={100}
            speed={100}
            initialValue={0}
            displayValue={0.85}
            bg="background-pink"
          />
        </div>
        <div className="known-for-list">
          <h6>E-Commerce Solutions</h6>
          <AnimatedProgressBar
            N={100}
            speed={100}
            initialValue={0}
            displayValue={0.92}
            bg="background-dark"
          />
        </div>
      </Col>
      <Col
        md={6}
        className="known_for_right_section"
        style={{ height: "100%" }}
      >
        <h5 className="text-green">We're a little bit wild.</h5>
        <h2 className="digital-agency pb-3 text-green">
          <span>We are Digital</span> Agency
        </h2>
        <h6>The Digital Design Company that's anything but basic!</h6>
        <hr />
        <p>
          Our team of design alligator experts is ready to sink their teeth into your
          online marketing needs and help your business thrive in the digital
          jungle. We even offer strategic consulting services, training
          workshops, and speaking engagements - because we believe in sharing
          our knowledge and expertise.
        </p>
        <p className="pt-2">
          So why wait? Let Design Alligators help your business chomp the
          competition!
        </p>
      </Col>
    </Row>
  );
};

export default KnownFor;
