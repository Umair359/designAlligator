import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Innovation from "../../../public/images/Innovation.png";
import Stylish from "../../../public/images/Stylish.png";
import SectionContent3 from "../../ServicesInnerPagesLayout/SectionContent3";
import Communication from "../../../public/images/Communication.png";
import Approach from "../../../public/images/Approach.png";

const WhyChooseUsForEcommerceMarketing = () => {
  return (
    <SectionContent3
      row1={
        <Row className="text-center">
          <h1>
            Why Most Business Leaders Choose{" "}
            <span className="text-green"> Design Alligators</span>
          </h1>
          <p>
            Design Alligators is a well-known Ecommerce Marketing Company in New
            York, United States. We don’t only provide Ecommerce Marketing
            Solutions, We’re an Experience: We are more than a Digital Design
            Agency. We are a full-service digital machine. From initial concept
            to final execution, we provide all kinds of E-commerce Marketing
            Services. Hire Professional Ecommerce Marketers in New York Today!
          </p>
          <p>
            We have helped several businesses build their brands and grow by
            using our integrated approach to Online Marketing Agency, including
            Website Design Services and Web Development Services, Search Engine
            Optimization (SEO), Pay-Per-Click Marketing (PPC), Social Media
            Marketing (SMM), Email Marketing, Graphic Design, CRM and Mobile
            Applications. We also provide strategic consulting services,
            training workshops, & speaking engagements.
          </p>
          <p>
            Some of the reasons why our Ecommerce Marketing Solutions clients
            love working with us are mentioned below:
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
                    <h6>Best Ecommerce Marketing Agency</h6>
                    <p>
                      DDesign Alligators is a well-known Ecommerce Marketing
                      Agency in New York. Our Ecommerce Marketing Solutions are
                      a great way to help boost your website's visibility, and
                      increase sales. There are many different types of
                      ecommerce marketing services available, but we've narrowed
                      them down for you. Get Professional Ecommerce Marketing
                      Services in New York, USA Today!
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
                    <h6>SEO-based search engine optimization (SEO):</h6>
                    <p>
                      SEO-based Search Engine Optimization (SEO): A service
                      designed to make sure your site is easy for people to find
                      when they search for keywords. Get Professional Ecommerce
                      Marketing Services from the Best Ecommerce Marketing
                      Company in New York, United States. We have expereienced
                      Ecommerce Marketers who can take your business to whole
                      new level.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex about_designers mt-4">
              <Row className="gx-0">
                <Col md={3}>
                  <div className="d-flex justify-content-center">
                    <Image src={Communication} alt="stylish" />
                  </div>
                </Col>
                <Col md={9}>
                  <div>
                    <h6>Ecommerce PPC Advertising</h6>
                    <p>
                      This type of Ecommerce Marketing uses Paid Advertising is
                      targeted at potential customers who have visited your site
                      before. The goal is to get them back on your site and
                      convert them into potential customers! Get Professional
                      Ecommerce Marketing Services in New York, USA Today.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex about_designers mt-4">
              <Row className="gx-0">
                <Col md={3}>
                  <div className="d-flex justify-content-center">
                    <Image src={Approach} alt="stylish" />
                  </div>
                </Col>
                <Col md={9}>
                  <div>
                    <h6>Ecommerce Email Marketing</h6>
                    <p>
                      This type of Ecommerce Marketing uses Email Marketing
                      Services as the primary method of communicating with
                      customers. It includes newsletters, drip campaigns, and
                      website surveys. Hire Professional Ecommerce Marketers
                      from Best Ecommerce Marketing Compnay in New York, USA.
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

export default WhyChooseUsForEcommerceMarketing;
