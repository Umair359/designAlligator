import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Mockup1 from "../../public/images/logoDesign/1.webp";
import Mockup2 from "../../public/images/logoDesign/2.webp";
import Mockup3 from "../../public/images/logoDesign/3.webp";
import Mockup4 from "../../public/images/logoDesign/4.webp";
import Mockup5 from "../../public/images/logoDesign/5.webp";
import Mockup6 from "../../public/images/logoDesign/6.webp";
import Mockup7 from "../../public/images/logoDesign/7.webp";
import Mockup8 from "../../public/images/logoDesign/8.webp";
import Mockup9 from "../../public/images/logoDesign/9.webp";
import Mockup10 from "../../public/images/logoDesign/10.webp";
import Mockup11 from "../../public/images/logoDesign/11.webp";
import Mockup12 from "../../public/images/logoDesign/12.webp";

const LogoDesigns = () => {
  const logoDesigns = [
    { image: Mockup1 },
    { image: Mockup2 },
    { image: Mockup3 },
    { image: Mockup4 },
    { image: Mockup5 },
    { image: Mockup6 },
    { image: Mockup7 },
    { image: Mockup8 },
    { image: Mockup9 },
    { image: Mockup10 },
    { image: Mockup11 },
    { image: Mockup12 },
  ];
  return (
    <Row className="logo-designs_main gy-3 gx-0">
        {logoDesigns && logoDesigns.map((item,i)=>(
      <Col md={4} className="design_img_container" key={i}>
        <Image src={item.image} alt="logo" />
        <div className="hover_effect"></div>
      </Col>
        ))}
    </Row>
  );
};

export default LogoDesigns;
