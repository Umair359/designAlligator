import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PackageCard from "./PackageCard";
import Star1 from "../../../public/images/stars-1.png";
import Star2 from "../../../public/images/stars-2.png";
import Star3 from "../../../public/images/stars-3.png";
import { MdOutlineDone } from "react-icons/md";

const LogoPackages = () => {
  
  return (
    <div style={{ margin: "60px 0px" }}>
      <Container fluid className="w-90">
        <Row className="logo-packages-row">
          <Col md={4} className="d-flex justify-content-center">
            <PackageCard
              title="STARTER LIGHT"
              amount="$25.00"
              bgClass="logo_package_1"
              stars={Star1}
            >
              <div>
                <MdOutlineDone />
                <p className="card-description">Include 2 concept</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">3 revision</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">JPEG and transparent PNG</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">3D mock-up</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">Source Files</p>
              </div>
            </PackageCard>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <PackageCard
              title="STARTER SOLID"
              amount="$65.00"
              bestSeller={true}
              bgClass="logo_package_2"
              stars={Star2}
            >
              <div>
                <MdOutlineDone />
                <p className="card-description">Include 3 concept</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">5 revision</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">JPEG and transparent PNG</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">3D mock-up</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">Social media kit</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">100% ownership</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">Source Files</p>
              </div>
            </PackageCard>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <PackageCard
              title="STARTER HEAVY"
              amount="$120.00"
              bgClass="logo_package_3"
              stars={Star3}
            >
              <div>
                <MdOutlineDone />
                <p className="card-description">Custom handmade logo</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">Original Concept Design</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">Unlimited revisions</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">JPEG and transparent PNG</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">Social media kit</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">Branding Guide</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">Stationary Designs</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">100% ownership</p>
              </div>
              <div>
                <MdOutlineDone />
                <p className="card-description">Source Files</p>
              </div>
            </PackageCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogoPackages;
