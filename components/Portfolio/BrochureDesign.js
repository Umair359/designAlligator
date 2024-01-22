import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Design1 from "../../public/images/BrochureDesign/1.jpg";
import Design2 from "../../public/images/BrochureDesign/2.jpg";
import Design3 from "../../public/images/BrochureDesign/3.jpg";
import Design4 from "../../public/images/BrochureDesign/4.jpg";
import Design5 from "../../public/images/BrochureDesign/5.jpg";



const BrochureDesign = () => {
  const Designs = [
    { image: Design1 },
    { image: Design2 },
    { image: Design3 },
    { image: Design4 },
    { image: Design5 },
    
   
  ];
  return (
    <Row className="our_picks_main gy-3 gx-0">
        {Designs && Designs.map((item,i)=>(
      <Col md={4} className="our_picks_img_container" key={i}>
        <Image src={item.image} alt="logo" />
        <div className="our_picks_hover_effect"></div>
      </Col>
        ))}
    </Row>
  );
};


export default BrochureDesign