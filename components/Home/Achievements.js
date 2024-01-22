import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CircleCounter from "../../utils/CircleCounter";
import Project from "../../public/images/project.webp";
import Customer from "../../public/images/customer.webp";
import Specialist from "../../public/images/specialist.webp";
import Years from "../../public/images/years.webp";

const Achievements = () => {
  return (
    <div style={{ padding: "30px 0px 30px 0px" }}>
      {/* <Container className="w-90">
        <Row className=" achievements_main">
          <Col md={3} className="d-flex flex-column align-items-center">
            <div className="achievement-border">
              <CircleCounter
                color1="#f8673a"
                color2="#ee3ba3"
                id="1"
                duration={0.3}
                endNumber={4789}
                title={"Projects"}
                icon={Project}
              />
            </div>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center">
            <div className="achievement-border">
              <CircleCounter
                color1="#b01ddd"
                color2="#24a3e8"
                id="2"
                duration={0.4}
                endNumber={6400}
                title={"Customers"}
                icon={Customer}
              />
            </div>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center">
            <div className="achievement-border">
              <CircleCounter
                color1="#00f381"
                color2="#02afda"
                id="3"
                duration={0.5}
                endNumber={960}
                title={"Specialists"}
                icon={Specialist}
              />
            </div>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center">
            <div className="achievement-border">
              <CircleCounter
                color1="#f3da40"
                color2="#fa842d"
                id="4"
                duration={0.6}
                endNumber={10}
                title={"Years"}
                icon={Years}
              />
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Achievements;
