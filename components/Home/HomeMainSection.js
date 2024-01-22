import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rated from '../../public/images/NewUI/rated.png'
import Image from "next/image";

const HomeMainSection = () => {
  const router = useRouter();
  const options = {
    in: {
      effect: 'fadeIn',
    },
  };
  return (
    <div className="home">
      <Image src={Rated} alt="rated.png" />
      <h1>Revolutionize Your  {" "}
        <span> Brand's </span> Digital
        Presence</h1>
      <h2 style={{ fontSize: "80px !important" }} >
        Design
      </h2>
      <h2 style={{ fontSize: "80px !important" }} >Creative</h2>
    </div>
  );
};

export default HomeMainSection;
