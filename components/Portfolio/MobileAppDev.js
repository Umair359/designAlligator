import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MobileApp1 from "../../public/images/mobileAppDevelopment/1.jpg";
import MobileApp2 from "../../public/images/mobileAppDevelopment/2.jpg";
import MobileApp3 from "../../public/images/mobileAppDevelopment/3.jpg";
import MobileApp4 from "../../public/images/mobileAppDevelopment/4.jpg";


const MobileAppDev = () => {
  const MobileApps = [
    { image: MobileApp1 },
    { image: MobileApp2 },
    { image: MobileApp3 },
    { image: MobileApp4 }
   
  ];
  return (
    <Row className="our_picks_main gy-3 gx-0">
        {MobileApps && MobileApps.map((item,i)=>(
      <Col md={4} className="our_picks_img_container" key={i}>
        <Image src={item.image} alt="logo" />
        <div className="our_picks_hover_effect"></div>
      </Col>
        ))}
    </Row>
  );
};

export default MobileAppDev;