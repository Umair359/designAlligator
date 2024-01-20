import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EcommerceDev1 from "../../public/images/EcommerceSolution/1.webp";
import EcommerceDev2 from "../../public/images/EcommerceSolution/2.webp";
import EcommerceDev3 from "../../public/images/EcommerceSolution/3.webp";
import EcommerceDev4 from "../../public/images/EcommerceSolution/4.webp";
import EcommerceDev5 from "../../public/images/EcommerceSolution/5.webp";

const EcommerceDev = () => {
  const EcommerceDevs = [
    { image: EcommerceDev1 },
    { image: EcommerceDev2 },
    { image: EcommerceDev3 },
    { image: EcommerceDev4 },
    { image: EcommerceDev5 }
  ];
  return (
    <Row className="web-designs_main gx-3 gy-3">
        {EcommerceDevs && EcommerceDevs.map((item,i)=>(
      <Col md={4} key={i}>
        <div className="web_design_img_container">
          <Image src={item.image} alt="web-design" />
        </div>
      </Col>
        ))}
    </Row>
  );
};

export default EcommerceDev;
