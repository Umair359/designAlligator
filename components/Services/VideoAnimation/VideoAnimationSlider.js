import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SectionContent4 from "../../ServicesInnerPagesLayout/SectionContent4";
import ReactPlayer from "react-player";
import { sliderSettings2 } from "../../../utils/sliderConfiguration";

const VideoAnimationLinks = [
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
const VideoAnimationSlider = () => {
  const [videoslider, setVideoSlider] = useState();
  useEffect(() => {
    setVideoSlider(
      <Slider {...sliderSettings2} aria-hidden="false">
        {VideoAnimationLinks.map((d, i) => (
          <div key={i}>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ReactPlayer
                width={"94%"}
                height={"300px"}
                controls={true}
                url={d.link}
              />
            </div>
          </div>
        ))}
      </Slider>
    );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    draggable: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SectionContent4 slider={videoslider}>
      <>
        <h6>Video Animation Portfolio</h6>
        <h4>Creative Video Animation Works</h4>
        <p>
          Our video animation portfolio is a testament to our expertise and
          creativity. With hundreds of successful projects under our belt, we
          have honed our skills to provide the best Video Animation Services in
          United States and beyond. Our team of the best Video Animators in USA
          works tirelessly to ensure that every project exceeds our client's
          expectations.
        </p>
        <span>
          Check out our video animation portfolio to see our work and contact us
          today to get started on your next project!
        </span>
      </>
    </SectionContent4>
  );
};

export default VideoAnimationSlider;
