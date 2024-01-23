import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rated from '../../public/images/NewUI/rated.png'
import Image from "next/image";
import AnimatedText from '../AnimatedText/AnimatedText.js'
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
        <span> Brand's</span>&nbsp;&nbsp;Digital
        Presence</h1>
      <AnimatedText text="Design" />
      <AnimatedText text="Creative" />
    </div>
  );
};

export default HomeMainSection;
