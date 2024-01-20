import React from "react";
import { Col } from "react-bootstrap";

function ServicesCard({
  setBgClass,
  number,
  title,
  desc,
  img,
  setImg,
  bgClass,
  sectionNo,
}) {
  const handleBgChange = () => {
    setImg(img);
    setBgClass(bgClass);
  };

  return (
    <Col md={3} className="p-0">
      <div className={sectionNo} onMouseEnter={handleBgChange}>
        <div className="service_content_container">
          <div className=" service_heading_container">
            <h3>{number}</h3>
            <h4>{title}</h4>
          </div>
          <div className="new_service_content ps-2 text-white">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ServicesCard;
