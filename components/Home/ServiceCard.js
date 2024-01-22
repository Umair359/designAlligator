import Image from "next/image";
import React from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";

const ServiceCard = ({
  icon,
  title,
  subtitle,
  features,
  price,
  oldPrice,
  discount,
  orderLink,
  setShow,
  setModalData,
  tag,
  handleModal
}) => {
  return (
    <>
      <div className="Card">
        {/* {tag === "Popular" &&<Image src="/images/popular.png" width={80} height={100} style={{position:"absolute",right:"-2px",top:"-2px"}} alt="popular" priority/>}
          {tag === "TOP RATED" &&<Image src="/images/top-rated.png" width={80} height={100} style={{position:"absolute",right:"-10px",top:"-10px"}} alt="top rated" priority/>} */}
        <div className="Price">
          <h4 className="Cost">${price}</h4>
          <p className="Discount">
            <span className="OldPrice">${oldPrice}</span>
            <span> {discount}% off ! </span>
          </p>
        </div>
        <h3 className="Title">{title}</h3>
        <h5 className="SubTitle">{subtitle}</h5>


        <div className="Info">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button className="Button" onClick={() => handleModal(title, price, setShow, setModalData)}>
          Order Now
        </button>
        <ul className="Links">
          <li>

            <a href="https://api.whatsapp.com/send/?phone=%2B19173101802&text&type=phone_number&app_absent=0">
              <HiChatBubbleLeftRight fill="#61127d" /> Live Chat
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="tel:+19173101802">
              <IoCall fill="#61127d" /> +1 917 310 1802
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ServiceCard;
