import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WebDev1 from "../../public/images/WebDev/1.webp";
import WebDev2 from "../../public/images/WebDev/2.webp";
import WebDev3 from "../../public/images/WebDev/3.webp";
import WebDev4 from "../../public/images/WebDev/4.webp";
import WebDev5 from "../../public/images/WebDev/5.webp";
import WebDev6 from "../../public/images/WebDev/6.webp";
import WebDev7 from "../../public/images/WebDev/7.webp";
import WebDev8 from "../../public/images/WebDev/8.webp";

const WebDev = () => {
  const webDevs = [
    { image: WebDev1 },
    { image: WebDev2 },
    { image: WebDev3 },
    { image: WebDev4 },
    { image: WebDev5 },
    { image: WebDev6 },
    { image: WebDev7 },
    { image: WebDev8 },
  ];
  return (
    <Row className="web-designs_main gx-3 gy-3">
        {webDevs && webDevs.map((item,i)=>(
      <Col md={4} key={i}>
        <div className="web_design_img_container">
          <Image src={item.image} alt="web-design" />
        </div>
      </Col>
        ))}
    </Row>
  );
};

export default WebDev;
