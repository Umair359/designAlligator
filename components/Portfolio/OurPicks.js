import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OurPicks1 from "../../public/images/our-picks.webp";
import OurPicks2 from "../../public/images/our-picks-2.webp";
import OurPicks3 from "../../public/images/our-picks-3.webp";

const OurPicks = () => {
  const ourPicks = [
    { image: OurPicks1 },
    { image: OurPicks2 },
    { image: OurPicks3 },
    { image: OurPicks1 },
    { image: OurPicks2 },
    { image: OurPicks3 },
    { image: OurPicks1 },
    { image: OurPicks2 },
    { image: OurPicks3 },
   
  ];
  return (
    <Row className="our_picks_main gy-3 gx-0">
        {ourPicks && ourPicks.map((item,i)=>(
      <Col md={4} className="our_picks_img_container" key={i}>
        <Image src={item.image} alt="logo" />
        <div className="our_picks_hover_effect"></div>
      </Col>
        ))}
    </Row>
  );
};

export default OurPicks;