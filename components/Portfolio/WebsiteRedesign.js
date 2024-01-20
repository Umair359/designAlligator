import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WebDev1 from "../../public/images/webReDesign/1.webp";
import WebDev2 from "../../public/images/webReDesign/2.webp";
import WebDev3 from "../../public/images/webReDesign/3.webp";
import WebDev4 from "../../public/images/webReDesign/4.webp";
import WebDev5 from "../../public/images/webReDesign/5.webp";
import WebDev6 from "../../public/images/webReDesign/6.webp";
import WebDev7 from "../../public/images/webReDesign/7.webp";

const WebRedesign = () => {
  const webDevs = [
    { image: WebDev1 },
    { image: WebDev2 },
    { image: WebDev3 },
    { image: WebDev4 },
    { image: WebDev5 },
    { image: WebDev6 },
    { image: WebDev7 },
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

export default WebRedesign;
