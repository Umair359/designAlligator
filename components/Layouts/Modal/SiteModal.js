import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { IoMdCloseCircleOutline } from "react-icons/io";
import FormBg from "../../../public/images/form_bg.jpg"
import axios from "axios";

const SiteModal = ({
  show,
  setShow,
  size,
  onCloseModal,
  style,
  modalData
}) => {
  const [showChild, setShowChild] = useState(false);
  const [contactDetails,setContactDetails]=useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  })
  const handleEmail = async (e,data) => {
    e.preventDefault();
    await axios.post("/api/service-email",data);

  };
  const handleChange=(name)=>(e)=>{
    console.log(name,e.target.value)
    setContactDetails((prev)=>{return {...prev,[name]:e.target.value}})
  }
  // console.log(contactDetails)
  const handleSubmit=(e)=>{
    e.preventDefault()
      handleEmail(e,{...contactDetails,title:modalData.title,price:modalData.price})
      setContactDetails({
      name:"",
      email:"",
      phone:"",
      message:""
    })
    setShow(false)
  }
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
    <Modal show={show} size={size} className={style ? style :"site_modal"} onHide={()=>setShow(false)}>
      <Modal.Body>
        <div className={"review_header"}>
          <IoMdCloseCircleOutline onClick={onCloseModal} />
        </div>
        <Container fluid className="">
          <Row className="gx-4 p-0">
            <Col md={7} className="p-0">
              <Image src={FormBg} alt="form-bg" className="form_bg"/>
            </Col>
            <Col md={5} className="modal_form px-4 pt-4">
        <h1>{modalData?.title}</h1>
        <h4>In Just ${modalData?.price}</h4>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Full Name" required value={contactDetails.name} onChange={handleChange("name")}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email address" required value={contactDetails.email} onChange={handleChange("email")}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" required value={contactDetails.phone} onChange={handleChange("phone")}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" type="text" rows={2} placeholder="Message" required value={contactDetails.message} onChange={handleChange("message")}/>
        </Form.Group>

          <Button type="submit" >Submit</Button>
        </Form>

            </Col>
          </Row>
        </Container>

        </Modal.Body>
    </Modal>
  );
    }
};
export default SiteModal;
