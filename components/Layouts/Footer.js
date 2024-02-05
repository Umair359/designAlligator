import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LogoWhite from "../../public/images/logo-white.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_main_container">
      <Container fluid className="w-90">
        <Row className="text-center justify-content-center">
          <Col md={5}>
            <Image src={LogoWhite} alt="footer" />
            <p className="py-3">
              Design Alligators is a digital agency specializing in website
              development animation, mobile and web design.
            </p>
          </Col>
        </Row>
        <Row className="footer_links">
          <Col sm={6} md={7} lg={5} className="pb-5" style={{ padding: "0px" }}>
            <h4 className="pb-2">Quick Links</h4>
            <Row className="gx-4 ">
              <Col md={6} className="d-flex flex-column gap-2">
                <Link href="/services/logo-design">Logo Design Services</Link>
                <Link href="/services/website-ui-ux-design">
                  UI / UX Design Services
                </Link>
                <Link href="/services/branding">Brand & Visual Design</Link>
                <Link href="/services/website-development">
                  Website Development
                </Link>
                <Link href="/services/ecommerce-solution">
                  E-Commerce Development
                </Link>
                <Link href="/services/web-hosting">
                  Web Hosting Services
                </Link>
              </Col>
              <Col
                md={6}
                className="quick-link-container-2 d-flex flex-column gap-2"
              >
                <Link href="/services/video-animation">Video Animation</Link>
                <Link href="/services/web-app-development">
                  Web App Development
                </Link>
                <Link href="/services/website-redesign-development">
                  Website Redesign
                </Link>
                <Link href="/services/search-engine-optimization">
                  Search Engine Optimization
                </Link>
                <Link href="/services/social-media-marketing-services">
                  Social Media Marketing
                </Link>
              </Col>
            </Row>
          </Col>
          <Col style={{ padding: "0px" }} sm={6} md={5} lg={2} className="d-flex flex-column gap-2 pb-5 ">
            <h4 className="pb-2">Company</h4>
            <Link href="/about-us">About Us</Link>
            <Link href="/portfolios">Portfolio</Link>
            <a href="https://blog.designalligators.com/">Blogs</a>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
          </Col>
          <Col
            sm={6}
            md={7}
            lg={3}
            style={{ padding: "0px" }}
            className="d-flex flex-column gap-2 footer_info gap-2 pb-5 "
          >
            <h4 className="pb-2">Information</h4>
            <div>
              <FaPhoneAlt />
              <a href="tel:+18722784801" aria-label="Phone">
                <p>+1 872-278-4801</p>
              </a>
            </div>
            <div>
              <div>
                <AiOutlineMail />
              </div>
              <div>
                <a href="mailto:info@designalligators.com" aria-label="Mail">
                  <p>info@designalligators.com</p>
                </a>
              </div>
            </div>
            <div>
              <div>
                <MdLocationPin />
              </div>
              <div>
                <p>2259 W. Rosemont Ave. Apt. 1 Chicago, IL 60659, USA</p>
              </div>
            </div>
            <div>
              <div>
                <MdLocationPin />
              </div>
              <div>
                <p>24 Vinal Ave Edison NJ 08817, USA</p>
              </div>
            </div>
            <div>
              <div>
                <MdLocationPin />
              </div>
              <div>
                <p>714 Foster Ave, Brooklyn, NY 11230, USA</p>
              </div>
            </div>
          </Col>
          <Col style={{ padding: "0px" }} sm={6} md={5} lg={2}>
            <h4 className="pb-2">Social Connect</h4>
            <div className="d-flex align-items-center social_icons">
              <div>
                <a
                  href="https://www.facebook.com/designalligators/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/designaligators"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/designalligators/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/designalligators/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
              <div>
                <a
                  href="https://www.pinterest.com/designalligators"
                  target="_blank"
                  aria-label="Pinterest"
                >
                  <FaPinterestP />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCO-_-fQT_rea2ciG9gWNRcg"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />INFORMATION
      <div style={{ fontSize: "18px" }} className="text-center copyrights">
        © 2023 Design Alligators. All Rights Reserved.{" "}
      </div>
    </div>
  );
};

export default Footer;
