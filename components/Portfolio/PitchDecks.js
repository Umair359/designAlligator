import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pitch1 from "../../public/images/pitch-1.webp"
import Pitch2 from "../../public/images/pitch-2.webp"
import Pitch3 from "../../public/images/pitch-3.webp"

const PitchDecks = () => {
  const pitchDecks = [
    { image: Pitch1 },
    { image: Pitch2 },
    { image: Pitch3 },
    { image: Pitch1 },
    { image: Pitch2 },
    { image: Pitch3 },
    { image: Pitch1 },
    { image: Pitch2 },
    { image: Pitch3 },
    
  ];
  return (
    <Row className="web-designs_main gx-3 gy-3">
        {pitchDecks && pitchDecks.map((item,i)=>(
      <Col md={4} key={i}>
        <div className="web_design_img_container">
          <Image src={item.image} alt="web-design"  />
        </div>
      </Col>
        ))}
    </Row>
  );
};

export default PitchDecks;