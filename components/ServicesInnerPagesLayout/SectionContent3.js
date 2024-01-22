import React from "react";
import { Container, Row } from "react-bootstrap";

const SectionContent3 = ({ row1, row2 }) => {
  return (
    <div className="creativity_main text-white">
      <Container>
        {row1}
        <Row className="my-5 justify-content-center">
          {row2}
          <Row className="justify-content-center">
          <a href="https://api.whatsapp.com/send/?phone=%2B19173101802&text&type=phone_number&app_absent=0" className="d-flex justify-content-center text-decoration-none">
            <button className="talk_to_expert">Talk to an Expert</button>
            </a>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default SectionContent3;
