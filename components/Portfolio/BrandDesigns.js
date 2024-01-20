import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WebDesign1 from "../../public/images/branding/1.webp";
import WebDesign2 from "../../public/images/branding/2.webp";
import WebDesign3 from "../../public/images/branding/3.webp";
import WebDesign4 from "../../public/images/branding/4.webp";

const BrandDesigns = () => {
  const brandDesigns = [
    { image: WebDesign1 },
    { image: WebDesign2 },
    { image: WebDesign3 },
    { image: WebDesign4 },
    // { image: WebDesign1 },
    // { image: WebDesign2 },
    // { image: WebDesign3 },
    // { image: WebDesign4 },
    // { image: WebDesign1 },
  ];
  return (
    <Row className="web-designs_main gx-3 gy-3">
        {brandDesigns && brandDesigns.map((item,i)=>(
      <Col md={4} key={i}>
        <div className="web_design_img_container">
          <Image src={item.image} alt="web-design" />
        </div>
      </Col>
        ))}
    </Row>
  );
};

export default BrandDesigns;
