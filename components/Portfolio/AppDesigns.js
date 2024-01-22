import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppDesign1 from "../../public/images/app-design-1.webp";
import AppDesign2 from "../../public/images/app-design-2.webp";
import AppDesign3 from "../../public/images/app-design-3.webp";

const AppDesigns = () => {
  const appDesigns = [
    { image: AppDesign1 },
    { image: AppDesign2 },
    { image: AppDesign3 },
    { image: AppDesign1 },
    { image: AppDesign2 },
    { image: AppDesign3 },
    { image: AppDesign1 },
    { image: AppDesign2 },
    { image: AppDesign3 },
   
  ];
  return (
    <Row className="app_logo-designs_main gy-3 gx-0">
        {appDesigns && appDesigns.map((item,i)=>(
      <Col md={4} className="app_design_img_container" key={i}>
        <Image src={item.image} alt="logo" />
        <div className="app_hover_effect"></div>
      </Col>
        ))}
    </Row>
  );
};

export default AppDesigns;