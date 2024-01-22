import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import Header from "./Header/Header.js";
const Navbar = () => {
  return (
    <>
      <div className="top_bar_main">
        <Container fluid className="w-95">
          <Row>
            <div className="header-container">
              <Col>
                <div className="top-bar-container">
                  <div className="top_bar_left">
                    <div className="text-white">
                      <FaEnvelope fill="#F10161" />
                      <a href="mailto:info@designalligators.com" aria-label="Mail"><p>info@designalligators.com</p></a>
                    </div>
                    <div>
                      <FaPhoneAlt fill="#F10161" />
                      <a href="tel:+19173101802" aria-label="Phone"><p className="number">+1 917 310 1802</p></a>
                    </div>
                  </div>
                 
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <Header />
    </>
  );
};

export default Navbar;
