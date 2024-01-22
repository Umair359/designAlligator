import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Design1 from "../../public/images/MenuDesign/1.webp";
import Design2 from "../../public/images/MenuDesign/2.webp";
import Design3 from "../../public/images/MenuDesign/3.webp";
import Design4 from "../../public/images/MenuDesign/4.webp";



const MenuDesign = () => {
  const Designs = [
    { image: Design1 },
    { image: Design2 },
    { image: Design3 },
    { image: Design4 },
    
   
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




export default MenuDesign