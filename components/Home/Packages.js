"use client";
import React from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import Slider from "react-slick";
import { sliderSettings3 } from "../../utils/sliderConfiguration";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Modal from "../Layouts/Modal/SiteModal";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
// import {} from "../../public/images"
import { packages } from "../../lib/packages";

const handleModal = (title,price,setShow,setModalData)=>{
setShow(true)
setModalData({
    title:title,
    price:price
})
}

function Packages({ home, title,page }) {
  const [serviceType, setServiceType] = useState(page ? page :"Logo");
  const [show, setShow] = useState(false);
  const [modalData,setModalData] = useState({
    title:"",
    price:""
  })

  return (
    <div className="PackageSection">
      {/* <h1>Packages</h1> */}
      <h2>{title}</h2>

      <Container>
        {home && (
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 packages_tabs">
            <button
              className={`${serviceType === "Logo" ? "active" : ""}`}
              onClick={() => setServiceType("Logo")}
            >
              Logo
            </button>
            <button
              className={`${serviceType === "Website" ? "active" : ""}`}
              onClick={() => setServiceType("Website")}
            >
              Website
            </button>
            <button
              className={`${serviceType === "Video Animation" ? "active" : ""}`}
              onClick={() => setServiceType("Video Animation")}
            >
              Video Animation
            </button>
          </div>
        )}
        <div className="Packages">
          <Slider {...sliderSettings3} aria-hidden="false">
            {packages.map((card, index) => {
              if (card.type === serviceType) {
                return (
                  <ServiceCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    subtitle={card.subtitle}
                    features={card.features}
                    price={card.price}
                    oldPrice={card.oldPrice}
                    discount={card.discount}
                    orderLink={card.orderLink}
                    setShow={setShow}
                    setModalData={setModalData}
                    tag={card.tag}
                    handleModal={handleModal}
                  />
                );
              } else {
                return null;
              }
            })}
          </Slider>
        </div>
      </Container>
      <Modal
        show={show}
        setShow={setShow}
        onCloseModal={() => setShow(false)}
        size={"lg"}
        modalData={modalData}
      />
    </div>
  );
}

export default Packages;
