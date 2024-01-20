import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SectionContent3 from "../../ServicesInnerPagesLayout/SectionContent3";
import Innovation from "../../../public/images/innovation.webp";
import Stylish from "../../../public/images/stylish.webp";

const WhyChooseUsForMobileAppDev = () => {
  return (
    <SectionContent3
      row1={
        <Row className="text-center">
          <h1>
            Why Most Business Leaders Choose{" "}
            <span className="text-green"> Design Alligators</span>
          </h1>
          <p>
            Design Alligators is a Professional Mobile App Design Agency with
            experience in both iOS and Android{" "}
            <span className="text-green fw-500">
              Mobile Application Development
            </span>
            . Our Mobile Application Design team is here to help your business
            stay ahead of the curve by designing and developing Mobile
            Applications.
          </p>
        </Row>
      }
      row2={
        <>
          <Col md={6}>
            <div className="d-flex about_designers">
              <Row className="gx-0">
                <Col md={3}>
                  <div className="d-flex justify-content-center">
                    <Image src={Innovation} alt="innovation" />
                  </div>
                </Col>
                <Col md={9}>
                  <div>
                    <h6>Creative Mobile App Development Firm Work</h6>
                    <p>
                      As being a Leading Mobile Application Development Firm in
                      New York our goal is to make your ideas a reality by
                      combining our full-spectrum Mobile App Development
                      Services with our extensive industry knowledge. Our Mobile
                      Application Service uses cutting-edge technology that is
                      customized according to your requirements. As the Best
                      Mobile Application Agency in New York, we employ unique
                      strategies to help us succeed. In New York, we use the
                      most recent versions of Android App Development Services
                      and IOS App Development Strategies to make the most of the
                      available resources
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex about_designers">
              <Row className="gx-0">
                <Col md={3}>
                  <div className="d-flex justify-content-center">
                    <Image src={Stylish} alt="stylish" />
                  </div>
                </Col>
                <Col md={9}>
                  <div>
                    <h6>What Client Says About Our Mobile Apps</h6>
                    <p>
                      Design Alligators is one of the well-known Mobile
                      Application Development Company in Brooklyn, New York. We
                      have happy and satisfied customers. Their reviews matter a
                      lot. Their satisfaction is our success. Innovative
                      procedures and techniques are also important in completing
                      tasks more quickly. Get Professional Android Application
                      Development Services and iOS Application Development
                      Services from Design Alligators. Contact Us Today for
                      Business Mobile Application Development Services in New
                      York, USA. Hire Experienced Mobile App Developers Near You
                      from Leading Mobile App Development Firm in New York.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </>
      }
    />
  );
};

export default WhyChooseUsForMobileAppDev;
