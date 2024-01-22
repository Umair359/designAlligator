import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PackageCard from "../LogoDesign/PackageCard";
import { MdOutlineDone } from "react-icons/md";
import Star1 from "../../../public/images/stars-1.png";
import Star2 from "../../../public/images/stars-2.png";
import Star3 from "../../../public/images/stars-3.png";

const HostingPackages = () => {
  return (
    <div className="my-5">
      <Container>
        <Row className="justify-content-between">
        <Col md={6} className="d-flex justify-content-center">
            <PackageCard
              title="BASIC"
              amount="$135.00"
              bgClass="logo_package_1"
              stars={Star1}
              text="Suitable for potential super-startups and brand revamps for companies."
              timeline="YEAR"
              CTA="Enquiry"
            >
              <div>
                <MdOutlineDone />
                <p>Unlimited Space</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Unlimited Bandwidth</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Free SSL</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>5 Business emails</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Anti Spamware scan</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Monthly backup</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>24/7 up time</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Support Assistance</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Enquiry</p>
              </div>
            </PackageCard>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <PackageCard
              title="Premium"
              amount="$200.00"
              bestSeller={true}
              bgClass="logo_package_2"
              stars={Star2}
              text="Suitable for potential super-startups and brand revamps for companies."
              timeline="YEAR"
              CTA="Enquiry"
            >
              <div>
                <MdOutlineDone />
                <p>Unlimited Space</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Unlimited Bandwidth</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Free SSL</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Unlimited Business emails</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Anti Spamware scan</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>Weekly backup</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>24/7 up time</p>
              </div>
              <div>
                <MdOutlineDone />
                <p>24/7 Support</p>
              </div>
            </PackageCard>
          </Col>
          {/* <Col md={6}>
            <div className="package_container">
              <div>
                <h1>$135 </h1>
                <span style={{ fontWeight: "300", fontSize: "22px" }}>
                  {" "}
                  /Year
                </span>
              </div>
              <h2 className="my-3">Basic</h2>
              <p className="mb-3">
                Suitable for potential super-startups and brand revamps for
                companies.
              </p>
              <hr />
              <ul>
                <li>
                  <p>Unlimited Space</p>
                </li>
                <li>
                  <p>Unlimited Bandwidth</p>
                </li>
                <li>
                  <p>Free SSL</p>
                </li>
                <li>
                  <p>5 Business emails</p>
                </li>
                <li>
                  <p>Anti Spamware scan</p>
                </li>
                <li>
                  <p>Monthly backup</p>
                </li>
                <li>
                  <p>24/7 up time</p>
                </li>
                <li>
                  <p>Support Assistance</p>
                </li>
              </ul>
              <button>Enquiry</button>
            </div>
          </Col>
          <Col md={6}>
            <div className="package_container">
              <div>
                <h1>$200</h1>
                <span style={{ fontWeight: "300", fontSize: "22px" }}>
                  {" "}
                  /Year
                </span>
              </div>
              <h2 className="my-3">Premium</h2>
              <p className="mb-3">
                Suitable for potential super-startups and brand revamps for
                companies.
              </p>
              <hr />
              <ul>
                <li>
                  <p>Unlimited Space</p>
                </li>
                <li>
                  <p>Unlimited Bandwidth</p>
                </li>
                <li>
                  <p>Free SSL</p>
                </li>
                <li>
                  <p>Unlimited Business emails</p>
                </li>
                <li>
                  <p>Anti Spamware scan</p>
                </li>
                <li>
                  <p>Weekly backup</p>
                </li>
                <li>
                  <p>24/7 up time</p>
                </li>
                <li>
                  <p>24/7 Support</p>
                </li>
              </ul>
              <button>Enquiry</button>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default HostingPackages;
