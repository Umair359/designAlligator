import { Container, Row } from "react-bootstrap";
const SectionContent6 = ({
  heading,
  text,
  children,
  bgClass,
  btnText,
  img,
}) => {
  return (
    <div className="services-images-section">
      <Container fluid className="w-95">
        <Row className="mt-5 mb-4">
          <h2
            style={{
              fontSize: "38px",
              textAlign: "center",
              fontWeight: "800",
              paddingBottom: "10px",
            }}
          >
            {heading}
          </h2>
          <p className="text-center">{text}</p>
        </Row>
        <Row
          className={`new_services_container gx-0 p-0 ${bgClass}`}
          style={{
            backgroundImage: `url(../images/${img})`,
          }}
        >
          {children}
        </Row>
        <Row className="justify-content-center">
          <a href="https://api.whatsapp.com/send/?phone=%2B19173101802&text&type=phone_number&app_absent=0" className="d-flex justify-content-center text-decoration-none">
            <button className="talk_to_expert">
            {btnText ? btnText : "Talk to an Expert"}
          </button></a>
        </Row>
      </Container>
    </div>
  );
};

export default SectionContent6;
