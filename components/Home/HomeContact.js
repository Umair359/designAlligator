import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Recaptcha from "../Layouts/ReCaptcha/Recaptcha";
import axios from "axios";
import { successNotify } from "../../utils/toast";

const HomeContact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const captchaRef = useRef(null);
  const [recaptcha, setRecaptcha] = useState("");
  const handleEmail = async (e, data) => {
    e.preventDefault();
    await axios.post("/api/send-email", data);
  };
  const handleChange = (name) => (e) => {
    console.log(name, e.target.value);
    setContactDetails((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };
  // console.log(contactDetails)
  console.log(recaptcha);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (recaptcha) {
      handleEmail(e, contactDetails);
      successNotify("details submitted successfully!");
      captchaRef.current.reset();
      setContactDetails({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } else {
      alert("Please confirm you're not a robot!");
    }
  };
  return (
    <div className="mt-5 home_contact_main">
      <Container fluid className="w-90">
        <Row className="contact-row ">
          <Col lg={8} md={12} className="d-flex justify-content-end">
            <div className="home_contact_form_container">
              <h3>Get In Touch</h3>
              <p>
                We have talked enough about ourselves. Now it’s time to know you
                better.{" "}
              </p>
              <p className="my-3">
                Contact Us Today and together we will create a smashing start
                for your business.
              </p>
              <form onSubmit={handleSubmit}>
                <Row className="mt-4 gx-4">
                  <Col md={6}>
                    <input
                      placeholder="First Name"
                      type="text"
                      value={contactDetails.name}
                      required
                      onChange={handleChange("name")}
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      placeholder="Email Address"
                      type="text"
                      value={contactDetails.email}
                      required
                      onChange={handleChange("email")}
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      placeholder="Phone Number"
                      type="text"
                      value={contactDetails.phone}
                      required
                      onChange={handleChange("phone")}
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      placeholder="Company"
                      type="text"
                      required
                      value={contactDetails.company}
                      onChange={handleChange("company")}
                    />
                  </Col>
                  <Col md={12}>
                    <textarea
                      rows="5"
                      cols="33"
                      placeholder="Message"
                      value={contactDetails.message}
                      required
                      onChange={handleChange("message")}
                    />
                  </Col>
                  <Col md={12}>
                    <Recaptcha setRecaptcha={setRecaptcha} ref={captchaRef} />
                  </Col>
                  <Col md={12}>
                    <button
                      type="submit"
                      className="theme_btn w-100"
                      // onClick={(e) => handleEmail(e)}
                    >
                      Send
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContact;
