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

const handleModal = (title, price, setShow, setModalData) => {
  setShow(true)
  setModalData({
    title: title,
    price: price
  })
}

function Packages({ home, title, page }) {
  const [serviceType, setServiceType] = useState(page ? page : "Logo");
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    price: ""
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

        <div className="mega-Package" >
          <div className="mega-Package-heading" >
            <h2>ALL IN ONE COMBO</h2>
            <p>Our services are suitable for potential super-startups and brand to revamp</p>
          </div>
          <div className="mega-Package-content" >
            <div>
              <div>
                <h5>LOGO DESIGN SERVIES</h5>
                <ul>
                  <li>5 Cusotm Logo Design Concept</li>
                  <li>Dedicated Designer Team</li>
                  <li>Icon Design</li>
                  <li>File Formats (PSD,ADF,AI,JPEG,PNG)</li>
                </ul>
              </div>
              <div>
                <h5>STATIONARY SERVICES</h5>
                <ul>
                  <li>MS Word Letterhead</li>
                  <li>Buisness Card</li>
                  <li>Letterhead</li>
                  <li>Envelop, Fax Template</li>
                </ul>
              </div>
              <div>
                <h5>SOCIAL MEDIA SERVICES</h5>
                <ul>
                  <li>Facebook Page Design</li>
                  <li>Twitter Page Design</li>
                  <li>Youtube Page Design</li>
                  <li>Google+ Page Design</li>
                  <li>All Final File Formats</li>
                </ul>
              </div>
              <div>
                <h5>WEBSITE SERVICES</h5>
                <ul>
                  <li>10 Pages Website Design</li>
                  <li>CMS/Admin Panel</li>
                  <li>Mobile Responsive</li>
                  <li>Team of Expert Web Designer & Developer</li>
                  <li>8 Stock images</li>
                  <li>5 Banner Design</li>
                  <li>Jquery Sliders</li>
                  <li>Free Google Friendly Sitemap</li>
                  <li>Complete W3C Certified HTMI</li>
                  <li>Complete Deployment</li>
                </ul>
              </div>
              <div>
                <h5>VALUE-ADDED SERVICES</h5>
                <ul>
                  <li>All Final File Formats</li>
                  <li>Dedicated Account Manager</li>
                  <li>100% Ownership Rights</li>
                  <li>100% Satisfaction Guarantee</li>
                  <li>100% Unique Design Guarantee</li>
                  <li>100% Money-Back Guarantee</li>
                </ul>
              </div>
            </div>
            <div className="combo-package-card" >
              <div>
                <h3>COMBO PACKAGES</h3>
                <h5>Company Branding Solution</h5>
              </div>
              <div>
                <h1>$4499</h1>
                <h5>$5000</h5>
                <p>Only</p>
              </div>
              <div>
                <h4>03 Months Installments</h4>
              </div>
              <button>
                Order Now
              </button>
            </div>
          </div>
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
