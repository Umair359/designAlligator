import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Process1 from "../../public/images/process-1.png";
import Process2 from "../../public/images/process-2.png";
import Process3 from "../../public/images/process-3.png";
import Process4 from "../../public/images/process-4.png";
import { useRouter } from "next/router";

const SectionContent5 = ({
  heading,
  subHeading,
  text,
  step1,
  step2,
  step3,
  step4,
  CTA,
}) => {
  const router = useRouter()
  return (
    <div>
      <Container fluid className="w-90 my-5">
        <Row>
          {heading && (
            <h3
              style={{ fontSize: "26px", textAlign: "center" }}
              className="text-green"
            >
              {heading}
            </h3>
          )}
          <h2
          className="process_sub_heading"
           
          >
            {subHeading}
          </h2>
          {text && <p className="text-center">{text}</p>}
        </Row>
        <Row className="my-4 gx-0">
          <Col sm={6} lg={3}>
            <div
              className="process-section text-center d-flex flex-column justify-content-center align-items-center "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <Image src={Process1} className="process-1" alt="process 1"/>
              <h4
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#f8673a",
                }}
              >
                Step 1
              </h4>
              <p className="px-3">{step1}</p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div
              className="process-section text-center d-flex flex-column justify-content-center align-items-center "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <Image src={Process2} className="process-2" alt="process 2"/>
              <h4
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#b01ddd",
                }}
              >
                Step 2
              </h4>
              <p className="px-3">{step2}</p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div
              className="process-section text-center d-flex flex-column justify-content-center align-items-center "
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
              data-aos-delay="1000"
              data-aos-offset="0"
            >
              <Image src={Process3} className="process-3" alt="process 3"/>
              <h4
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#00f381",
                }}
              >
                Step 3
              </h4>
              <p className="px-3"> {step3}</p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div
              className="process-section text-center d-flex flex-column justify-content-center align-items-center "
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
              data-aos-delay="1500"
            >
              <Image src={Process4} className="process-4" alt="process 4"/>
              <h4
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#f3da40",
                }}
              >
                Step 4
              </h4>
              <p className="px-3">{step4}</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <button className="hire_a_professional" onClick={()=>router.push("/get-a-quote")}>{CTA}</button>
        </Row>
      </Container>
    </div>
  );
};

export default SectionContent5;
