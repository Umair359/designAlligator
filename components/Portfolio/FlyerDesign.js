import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Flyer1 from "../../public/images/FlyerDesign/1.webp"
import Flyer3 from "../../public/images/FlyerDesign/3.webp"
import Flyer2 from "../../public/images/FlyerDesign/2.webp"
import Flyer4 from "../../public/images/FlyerDesign/4.webp"
import Flyer5 from "../../public/images/FlyerDesign/5.webp"
import Flyer6 from "../../public/images/FlyerDesign/6.webp"

const FlyerDesigns = () => {
  const flyerDesigns = [
    { image: Flyer1 },
    { image: Flyer2 },
    { image: Flyer3 },
    { image: Flyer4 },
    { image: Flyer5 },
    { image: Flyer6 },
    
  ];
  return (
    <Row className="web-designs_main gx-3 gy-3">
        {flyerDesigns && flyerDesigns.map((item,i)=>(
      <Col md={4} key={i}>
        <div className="web_design_img_container">
          <Image src={item.image} alt="web-design"  />
        </div>
      </Col>
        ))}
    </Row>
  );
};

export default FlyerDesigns;