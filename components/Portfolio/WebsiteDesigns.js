import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WebDesign1 from "../../public/images/web-design-1.webp";
import WebDesign2 from "../../public/images/web-design-2.webp";
import WebDesign3 from "../../public/images/web-design-3.webp";

const WebsiteDesigns = () => {
  const webDesigns = [
    { image: WebDesign1 },
    { image: WebDesign2 },
    { image: WebDesign3 },
    { image: WebDesign1 },
    { image: WebDesign2 },
    { image: WebDesign3 },
    { image: WebDesign1 },
    { image: WebDesign2 },
    { image: WebDesign3 },
  ];
  return (
    <Row className="web-designs_main gx-3 gy-3">
        {webDesigns && webDesigns.map((item,i)=>(
      <Col md={4} key={i}>
        <div className="web_design_img_container">
          <Image src={item.image} alt="web-design" />
        </div>
      </Col>
        ))}
    </Row>
  );
};

export default WebsiteDesigns;
