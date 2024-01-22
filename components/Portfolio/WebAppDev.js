import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WebApp1 from "../../public/images/WebAppDev/1.webp";
import WebApp2 from "../../public/images/WebAppDev/2.webp";
import WebApp3 from "../../public/images/WebAppDev/3.webp";
import WebApp4 from "../../public/images/WebAppDev/4.webp";

const WebAppDev = () => {
  const WebApps = [
    { image: WebApp1 },
    { image: WebApp2 },
    { image: WebApp3 },
    { image: WebApp4 },
   
  ];
  return (
    <Row className="our_picks_main gy-3 gx-0">
        {WebApps && WebApps.map((item,i)=>(
      <Col md={4} className="our_picks_img_container" key={i} style={{height:"250px"}}>
        <Image src={item.image} alt="logo" />
        <div className="our_picks_hover_effect"></div>
      </Col>
        ))}
    </Row>
  );
};

export default WebAppDev;