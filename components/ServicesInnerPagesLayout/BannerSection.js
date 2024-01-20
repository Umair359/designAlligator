import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LogoBanner from "../../public/images/logo-mockup.webp";
import Recaptcha from "../Layouts/ReCaptcha/Recaptcha";
import Image from "next/image";
import axios from "axios";
import { successNotify } from "../../utils/toast";
const BannerSection = ({ children, image }) => {
  const [contactDetails,setContactDetails]=useState({
    name:"",
    email:"",
    phone:"",
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
      message:""
    })
    alert("details submitted successfully!")
  }
  else{
    alert("Please confirm you're not a robot!")
  }
  }
  return (
    <div className="logo_banner_main">
      <Container fluid className="w-90">
        <div>
          <Row>
            <Col md={6} className="logo-banner-left">
              {children}
              <div className="logo_form_container">
                <form onSubmit={handleSubmit}>

                <Row>
                  <Col md={6} lg={4}>
                    <input placeholder="Name" type="text"  value={contactDetails.name} required onChange={handleChange("name")}/>
                  </Col>
                  <Col md={6} lg={4}>
                    <input placeholder="Phone Number" type="text" value={contactDetails.phone}required onChange={handleChange("phone")}/>
                  </Col>
                  <Col md={6} lg={4}>
                    <input placeholder="Email Address" type="text" value={contactDetails.email} required onChange={handleChange("email")}/>
                  </Col>
                  <Col md={6} lg={12}>
                    <input placeholder="Message" type="text" value={contactDetails.message} required onChange={handleChange("message")}/>
                  </Col>
                  <Col md={12} className="mt-4 banner-recaptcha">
                    <Recaptcha setRecaptcha={setRecaptcha} ref={captchaRef}/>
                  </Col>
                  <Col md={6} lg={6}>
                    <button className="theme_btn w-100">Submit</button>
                  </Col>
                  <Col md={6} lg={6}>
                    <a href="https://api.whatsapp.com/send/?phone=%2B19173101802&text&type=phone_number&app_absent=0">

                    <button type="button" className="chat_btn w-100">Live Chat</button>
                    </a>
                  </Col>
                </Row>
                </form>
              </div>
              {/* <Row className="mt-3 gx-4" >
                  <Image src={Partners} alt="partners"/>
                </Row> */}
            </Col>
            <Col
              md={6}
              className="d-flex align-items-end justify-content-center logo_banner_right"
            >
              <Image src={image ? image : LogoBanner} alt="logo-image" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BannerSection;
