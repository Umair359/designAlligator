import Image from "next/image";
import React from "react";
import { Accordion } from "react-bootstrap";

function Accordian({ eventKey, number, title, desc, img }) {
  return (
    <Accordion defaultActiveKey="0" className="accordian">
      <Accordion.Item eventKey={eventKey.toString()}>
        <Accordion.Header>
          <span className="accordian-number">{number}</span>
          <span className="accordian-title">{title}</span>
        </Accordion.Header>
        <Accordion.Body>
          <Image
            src={`/images/${img}.webp`}
            className="accordian-image"
            width={500}
            height={500}
            alt="service"
          />
          <h6 className="accordian-desc">{desc}</h6>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordian;
