import React, { useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
// import Recaptcha from "../Layouts/ReCaptcha/Recaptcha";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import axios from "axios";
import { successNotify } from "../../utils/toast";
const GetAQuoteForm = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [quoteDetails, setQuoteDetails] = useState({
    service: "Branding & Design",
    name: "",
    email: "",
    organization: "",
    message: "",
    service_required: "",
    hear_by: "",
  });
  // const captchaRef = useRef(null);
  // const [recaptcha, setRecaptcha] = useState("");

  const handleQuote = (e) => {
    setQuoteDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (recaptcha) {
    const res = await axios.post("/api/send-quote", { ...quoteDetails, phone: phoneNumber });
    console.log(res?.data?.message, "res");
    successNotify(res?.data?.message);
    // captchaRef.current.reset();
    setQuoteDetails({
      service: "Branding & Design",
      name: "",
      email: "",
      organization: "",
      message: "",
      service_required: "",
      hear_by: "",
    });
    setPhoneNumber("");
    // } else {
    //   alert("Please confirm you're not a robot!");
    // }
  };
  return (
    <div className="mt-5 get_a_quote_main">
      <Container fluid className="w-90">
        <Row>
          <Col lg={8} className="d-flex justify-content-end">
            <div className="get_a_quote_form_container">
              <h5 className="text-center">
                Which services can we help you with today?
              </h5>

              <form onSubmit={handleSubmit}>
                <Row className="mt-4 gx-4">
                  <label>
                    Choose Ther Services <span>*</span>
                  </label>
                  <Col md={12} className="d-flex flex-wrap gap-3 mb-4">
                    <Form.Check
                      type="radio"
                      id="1"
                      label="Branding & Design"
                      name="service"
                      value="Branding & Design"
                      onChange={handleQuote}
                      defaultChecked
                    />
                    <Form.Check
                      type="radio"
                      id="2"
                      label="Website Related Services"
                      value="Website Related Services"
                      name="service"
                      onChange={handleQuote}
                    />
                    <Form.Check
                      type="radio"
                      id="3"
                      label="Marketing & Strategy"
                      value="Marketing & Strategy"
                      name="service"
                      onChange={handleQuote}
                    />
                    <Form.Check
                      type="radio"
                      id="4"
                      label="Print"
                      value="Print"
                      name="service"
                      onChange={handleQuote}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <input
                      placeholder="First Name"
                      type="text"
                      name="name"
                      value={quoteDetails.name}
                      onChange={handleQuote}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <input
                      placeholder="Email Address"
                      type="text"
                      name="email"
                      value={quoteDetails.email}
                      onChange={handleQuote}
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      placeholder="Organization Name"
                      type="text"
                      name="organization"
                      value={quoteDetails.organization}
                      onChange={handleQuote}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Phone</label>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                    />
                  </Col>
                  <Col md={12} className="mt-3">
                    <label>
                      Services Required <span>*</span>
                    </label>
                    <select
                      style={{ width: "100%" }}
                      name="service_required"
                      onChange={handleQuote}
                      value={quoteDetails.service_required}
                    >
                      {quoteDetails?.service === "Branding & Design" ?
                        <>
                          <option value="">Select</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Mobile App Design">
                            Mobile App Design
                          </option>
                          <option value="Brand And Visual Design">
                            Brand And Visual Design
                          </option>
                          <option value="Logo Design">Logo Design</option>
                          <option value="Video Animation">Video Animation</option>
                        </>
                        : quoteDetails?.service === "Website Related Services" ?
                          <>
                            <option value="">Select</option>

                            <option value="Website Development">Website Development</option>
                            <option value="Ecommerce Solutions">
                              Ecommerce Solutions
                            </option>
                            <option value="Web App Development">
                              Web App Development
                            </option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Website Redesign">Website Redesign</option>
                          </>
                          : quoteDetails?.service === "Marketing & Strategy" ?
                            <>
                              <option value="">Select</option>

                              <option value="Search Engine Optimization(SEO)">Search Engine Optimization(SEO)</option>
                              <option value="Social Media Marketing(SMM)">
                                Social Media Marketing(SMM)
                              </option>
                              <option value="Email Marketing">
                                Email Marketing
                              </option>
                              <option value="Paid Campaigns(PPC)">Paid Campaigns(PPC)</option>
                              <option value="Ecommerce Marketing">Ecommerce Marketing</option>
                            </>
                            :
                            <>
                              <option value="">Select</option>

                              <option value="T-Shirt Design">T-Shirt Design</option>
                              <option value="Invitation Card Design">
                                Invitation Card Design
                              </option>
                              <option value="Flyer Design">
                                Flyer Design
                              </option>
                              <option value="Brochure Design">Brochure Design</option>
                              <option value="Catalogue Design">Catalogue Design</option>
                              <option value="Menu Design">Menu Design</option>
                              <option value="Poster Design">Poster Design</option>
                            </>

                      }
                    </select>
                  </Col>
                  <Col md={12} className="mt-3">
                    <label>How did you hear about us?</label>
                    <select
                      style={{ width: "100%" }}
                      name="hear_by"
                      value={quoteDetails.hear_by}
                      onChange={handleQuote}
                    >
                      <option value="">Select</option>

                      <option value="Search Engine(Google, Bing, etc.)">
                        Search Engine(Google, Bing, etc.)
                      </option>
                      <option value="Social Media">Social Media</option>
                      <option value="Blog Or Publication">
                        Blog Or Publication
                      </option>
                      <option value="Newspaper">Newspaper</option>
                      <option value="Recommmended By Friend">
                        Recommmended By Friend
                      </option>
                    </select>
                  </Col>
                  <Col md={12}>
                    <textarea
                      rows="5"
                      cols="33"
                      placeholder="Message"
                      name="message"
                      value={quoteDetails.message}
                      onChange={handleQuote}
                    />
                  </Col>
                  <p>
                    How can we help you with your web project? Please enter your
                    details in the above box.
                  </p>
                  <Col md={12}>
                    {/* <Recaptcha setRecaptcha={setRecaptcha} ref={captchaRef} /> */}
                  </Col>

                  <Col md={12}>
                    <button className="theme_btn w-100" type="submit">
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

export default GetAQuoteForm;
