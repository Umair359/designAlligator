import Image from "next/image";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact1 from "../../public/images/contact-1.webp";
import Recaptcha from "../Layouts/ReCaptcha/Recaptcha";
import axios from "axios";
import { useState } from "react";
import { successNotify } from "../../utils/toast";

const ContactForm = () => {
  const [contactDetails,setContactDetails]=useState({
    name:"",
    email:"",
    phone:"",
    company:"",
    message:"",
  })
  const captchaRef = useRef(null);

  const [recaptcha,setRecaptcha]=useState("")
  const handleEmail = async (e,data) => {
    e.preventDefault();
    await axios.post("/api/send-email",data);

  };
  const handleChange=(name)=>(e)=>{
    console.log(name,e.target.value)
    setContactDetails((prev)=>{return {...prev,[name]:e.target.value}})
  }
  // console.log(contactDetails)
  console.log(recaptcha)
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(recaptcha)
    {
      handleEmail(e,contactDetails)
      successNotify("details submitted successfully!");


      captchaRef.current.reset();
      setContactDetails({
      name:"",
      email:"",
      phone:"",
      company:"",
      message:""
    })
  }
  else{
    alert("Please confirm you're not a robot!")
  }
  }
  return (
    <div className="contact_form_main">
      <Container fluid className="w-90">
        <Row className="gx-0">
          <Col lg={4}>
            <Image
              className="contact-page-img"
              src={Contact1}
              alt="contact-img"
            />
          </Col>
          <Col lg={8}>
            <div
              className="contact_form_container home_contact_form_container"
              style={{ width: "100%" }}
            >
              <h1>
                Write Us <span className="text-green">a Message</span>
              </h1>
              <p className="py-2">
                We have talked enough about us. Now it’s time to know you
                better. Let’s talk about what you need and we can get started!
              </p>
              <p>
                Contact us today! Let us know more about your project and
                together we will create a smashing start into your business.
              </p>
              <form onSubmit={handleSubmit}>
                <Row className="mt-4 gx-4">
                  <Col md={6}>
                    <input placeholder="First Name" type="text" value={contactDetails.name} required onChange={handleChange("name")}/>
                  </Col>
                  <Col md={6}>
                    <input placeholder="Email Address" type="text" value={contactDetails.email} required onChange={handleChange("email")}/>
                  </Col>
                  <Col md={6}>
                    <input placeholder="Phone Number" type="text"  value={contactDetails.phone} required onChange={handleChange("phone")}/>
                  </Col>
                  <Col md={6}>
                    <input placeholder="Company" type="text" required value={contactDetails.company} onChange={handleChange("company")}/>
                  </Col>
                  <Col md={12}>
                    <textarea rows="5" cols="33" placeholder="Message" value={contactDetails.message} required onChange={handleChange("message")}/>
                  </Col>
                  <Col md={12}><Recaptcha setRecaptcha={setRecaptcha} ref={captchaRef}/></Col>
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

export default ContactForm;
