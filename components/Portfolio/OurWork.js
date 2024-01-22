import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppDesigns from "./AppDesigns";
import EcommerceDev from "./EcommerceDev";
import FlyerDesigns from "./FlyerDesign";
import LogoDesigns from "./LogoDesigns";
import MobileAppDev from "./MobileAppDev";
import OurPicks from "./OurPicks";
import PitchDecks from "./PitchDecks";
import VideoAnimation from "./VideoAnimation";
import WebAppDev from "./WebAppDev";
import WebDev from "./WebDev";
import WebsiteDesigns from "./WebsiteDesigns";
import BrandDesigns from "./BrandDesigns";
import UIUXDesigns from "./UIUXDesigns";
import MobileAppDesigns from "./MobileAppDesigns";
import WebRedesign from "./WebsiteRedesign";
import TShirtDesign from "./TShirtDesign";
import InvitationDesign from "./InvitationDesign";
import BrochureDesign from "./BrochureDesign";
import CatalogueDesign from "./CatalogueDesign";
import MenuDesign from "./MenuDesign";
import PosterDesign from "./PosterDesign";

const OurWork = () => {
  const [viewItems, setViewItems] = useState("logo-designs");
  const handleViewItems = (tabName) => {
    setViewItems(tabName);
  };

  return (
    <div className="my-5">
      <Container fluid className="w-90 ">
        <Row className="text-center justify-content-center our_portfolios_main">
          <Col md={8}>
            <h1>
              <span className="text-green">Explore </span>Our Work
            </h1>
            <p className="p-2">
              Design Alligators has been creating stunning and professional
              design for over 5 years, with hundreds of projects under our belt.
              We have been expertly converting dull, unappealing websites into
              sleek, beautiful, professional sites. With every project that
              passes through our doors, we gain more experience and hone our
              skills. Our portfolio shows our experience and capabilities.
              Scroll down to check our work through the years!
            </p>
          </Col>
        </Row>
        <Row className="mt-2 our_work_main">
          <Col md={1}></Col>
          <Col md={2} className="d-flex flex-column">

            <h2 className="portfolio-title">Design</h2>
            <p
              className={`${
                viewItems === "logo-designs" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("logo-designs")}
            >
              Logo Designs
            </p>
            <p
              className={`${
                viewItems === "brand-designs" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("brand-designs")}
            >
              Brand & Visual Design
            </p>
            <p
              className={`${
                viewItems === "ui-ux-designs" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("ui-ux-designs")}
            >
              UI/UX Designs
            </p>
            <p
              className={`${
                viewItems === "video-animations" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("video-animations")}
            >
              Video Animations
            </p>
            <p
              className={`${
                viewItems === "mobile-app-designs"
                  ? "text-green"
                  : " portfolio-item "
              } portfolio-item`}
              onClick={() => handleViewItems("mobile-app-designs")}
            >
              Mobile App Designs
            </p>

            <hr />
            <h2 className="portfolio-title">Development</h2>
            <p
              className={`${
                viewItems === "website-development" ? "text-green" : ""
              }  portfolio-item`}
              onClick={() => handleViewItems("website-development")}
            >
              Website Development
            </p>
            <p
              className={`${
                viewItems === "website-redesign" ? "text-green" : ""
              }  portfolio-item`}
              onClick={() => handleViewItems("website-redesign")}
            >
              Website Redesign
            </p>
            <p
              className={`${
                viewItems === "web-app-development" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("web-app-development")}
            >
              Web App Development
            </p>
            <p
              className={`${
                viewItems === "ecommerce-development" ? "text-green" : ""
              }  portfolio-item`}
              onClick={() => handleViewItems("ecommerce-development")}
            >
              Ecommerce Solutions
            </p>

            <p
              className={`${
                viewItems === "mobile-app-development" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("mobile-app-development")}
            >
              Mobile App Development
            </p>
            <hr />
            <h2 className="portfolio-title">Print</h2>
            <p
              className={`${
                viewItems === "t-shirt-design" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("t-shirt-design")}
            >
              T-Shirt Design
            </p>
            <p
              className={`${
                viewItems === "invitation-card-design" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("invitation-card-design")}
            >
              Invitation Card Design
            </p>
            <p
              className={`${
                viewItems === "flyer-design" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("flyer-design")}
            >
              Flyer Design
            </p>
            <p
              className={`${
                viewItems === "brochure-design" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("brochure-design")}
            >
              Brochure Design
            </p>
            <p
              className={`${
                viewItems === "catalogue-design" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("catalogue-design")}
            >
              Catalogue Design
            </p>
            <p
              className={`${
                viewItems === "menu-design" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("menu-design")}
            >
              Menu Design
            </p>
            <p
              className={`${
                viewItems === "poster-design" ? "text-green" : ""
              } portfolio-item`}
              onClick={() => handleViewItems("poster-design")}
            >
              Poster Design
            </p>
          </Col>
          <Col md={9} className="">
            {viewItems === "logo-designs" ? (
              <LogoDesigns />
            ) : viewItems === "brand-designs" ? (
              <BrandDesigns />
            ) : viewItems === "ui-ux-designs" ? (
              <UIUXDesigns />
            ) : viewItems === "mobile-app-designs" ? (
              <MobileAppDesigns />
            ) : viewItems === "website-redesign" ? (
              <WebRedesign />
            ) : viewItems === "website-development" ? (
              <WebDev />
            ) : viewItems === "ecommerce-development" ? (
              <EcommerceDev />
            ) : viewItems === "web-app-development" ? (
              <WebAppDev />
            ) : viewItems === "mobile-app-development" ? (
              <MobileAppDev />
            ) : viewItems === "video-animations" ? (
              <VideoAnimation />
            ) : viewItems === "t-shirt-design" ? (
              <TShirtDesign />
            ) : viewItems === "invitation-card-design" ? (
              <InvitationDesign />
            ) : viewItems === "flyer-design" ? (
              <FlyerDesigns />
            ) : viewItems === "brochure-design" ? (
              <BrochureDesign />
            ) : viewItems === "catalogue-design" ? (
              <CatalogueDesign />
            ) : viewItems === "menu-design" ? (
              <MenuDesign />
            ) : viewItems === "poster-design" ? (
              <PosterDesign />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurWork;
