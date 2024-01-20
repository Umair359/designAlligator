import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ReadyToWork = () => {
  const router = useRouter()
  return (
    <div className="ready_to_work">
      <Container fluid className="w-90">
        <Row className="d-flex justify-content-center">
          <Col md={9}>
            <div className="d-flex flex-column align-items-center text-center">
              <h3>
                Championing Diversity, Equity & Inclusion in{" "}
                <span>Digital Design</span>
              </h3>
              <p className="py-3">
                At Design Alligators, diversity, equity, and inclusion aren't
                just buzzwords; they're the backbone of everything we do. We're
                committed to creating an inclusive, supportive, and empowering
                environment for all.
              </p>
             
              <button onClick={()=>router.push("/get-a-quote")}>Get Started</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReadyToWork;
