import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Slider from "react-slick";
// import Portfolio1 from "../../public/images/portfolio-1.webp";
import PortfolioSlider from "./PortfolioSlider";
import Link from "next/link";

const HomePortfolio = () => {
  return (
    <div>
      <Container fluid className="w-90">
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="text-center home_portfolio_main">
              <h6 style={{fontSize:"16px",textTransform:"uppercase",color:"#dd2476"}} >Endless Possibilities</h6>
              <h2 style={{fontWeight:"200",textTransform:"uppercase",fontSize:"50px"}}>Our Creative Portfolio</h2>
              <p>
                With over five years of experience, we've been expertly
                converting dull, unappealing websites into sleek, beautiful,
                professional sites. We take pride in{" "}
                <Link href="/portfolios">our portfolio</Link>, which showcases
                our expertise and capabilities.
              </p>
              <h6 style={{backgroundColor:"#eeeeee",width:"fit-content",margin:"20px auto",padding:"10px"}}>
                Trust us to take your website from <b>"meh"</b> to <b>"wowza"</b> with our{" "}
                <Link style={{color:"black",fontWeight:"normal"}} href="/services/website-development">
                  Website Development Services
                </Link>
                .
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
        <PortfolioSlider />
        
    
    </div>
  );
};

export default HomePortfolio;
