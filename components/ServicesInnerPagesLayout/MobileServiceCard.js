import React from "react";
import { Container, Row } from "react-bootstrap";
import Accordion from "./Accordian";

function MobileServiceCard({ servicesList, heading, text, btnText }) {
  return (
    <div className=" services-images-accordian">
      <Container fluid className="w-95">
        <Row className="mt-5 mb-4">
          <h2
            style={{
              fontSize: "38px",
              textAlign: "center",
              fontWeight: "800",
              paddingBottom: "10px",
            }}
            className="mobile-service-heading"
          >
            {heading}
          </h2>
          <p className="text-center">{text}</p>
        </Row>

        {/* Accordian starts */}
        {servicesList.map(({ number, title, desc, img }, idx) => (
          <Accordion
            key={idx}
            number={number}
            title={title}
            desc={desc}
            img={img}
            eventKey={idx}
          />
        ))}
        {/* Accordian ends */}

        <Row className="justify-content-center">
        <a href="https://api.whatsapp.com/send/?phone=1917310802&text&type=phone_number&app_absent=0" className="d-flex justify-content-center text-decoration-none">

          <button className="talk_to_expert">
            {btnText ? btnText : "Talk to an Expert"}
          </button>
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default MobileServiceCard;
