import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import WebDev1 from "../../public/images/web-dev-1.webp";
import WebDev2 from "../../public/images/web-dev-2.webp";
import WebDev3 from "../../public/images/web-dev-3.webp";

const VideoAnimation = () => {
  const webDevs = [
    {
      link: "https://www.youtube.com/watch?v=Rv6OLp44qdg",
    },
    {
      link: "https://www.youtube.com/watch?v=sQ3axZuoYRg",
    },
    {
      link: "https://www.youtube.com/watch?v=6-MPuYKkatA",
    },
    {
      link: "https://www.youtube.com/watch?v=mS8jp2cxo-E",
    },
    {
      link: "https://www.youtube.com/watch?v=2MR5oM5B7nQ",
    },
  ];
  return (
    <Row className="video_animations_main gx-3 gy-3">
        {webDevs && webDevs.map((item,i)=>(
      <Col md={4} key={i}>
        <div className="video_animations">

       <ReactPlayer
            width={"100%"}
            height={"300px"}
            controls={true}
            url={item.link}
          />
            </div>
      </Col>
        ))}
    </Row>
  );
};

export default VideoAnimation;