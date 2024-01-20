import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Design1 from "../../public/images/TShirtDesigning/1.webp";
import Design2 from "../../public/images/TShirtDesigning/2.webp";
import Design3 from "../../public/images/TShirtDesigning/3.webp";
import Design4 from "../../public/images/TShirtDesigning/4.webp";
import Design5 from "../../public/images/TShirtDesigning/5.webp";
import Design6 from "../../public/images/TShirtDesigning/6.webp";
import Design7 from "../../public/images/TShirtDesigning/7.webp";
import Design8 from "../../public/images/TShirtDesigning/8.webp";


const TShirtDesign = () => {
  const Designs = [
    { image: Design1 },
    { image: Design2 },
    { image: Design3 },
    { image: Design4 },
    { image: Design5 },
    { image: Design6 },
    { image: Design7 },
    { image: Design8 },
   
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

export default TShirtDesign;