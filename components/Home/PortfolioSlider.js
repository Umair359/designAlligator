import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Portfolio1 from "../../public/images/NewUI/portfolio1.png"
import Portfolio2 from "../../public/images/NewUI/portfolio2.png";
import Portfolio3 from "../../public/images/NewUI/portfolio3.png";
import Portfolio4 from "../../public/images/NewUI/portfolio4.png";
import Portfolio5 from "../../public/images/NewUI/portfolio1.png";
import Portfolio6 from "../../public/images/NewUI/portfolio2.png";
import Portfolio7 from "../../public/images/NewUI/portfolio3.png";
import Portfolio8 from "../../public/images/NewUI/portfolio1.png";
import MiniLogo from "../../public/images/NewUI/miniLogo.png"
import { useRouter } from "next/router";

const portfolioData = [
  {
    image: Portfolio1,
    title: "Mobile Application",
    link: "/services/mobile-app-design"
  },
  {
    image: Portfolio2,
    title: "UI / UX Design",
    link: "/services/website-ui-ux-design"

  },
  {
    image: Portfolio3,
    title: "Flyer Design",
    link: "/services/flyer-design"

  },
  {
    image: Portfolio4,
    title: "Tshirt Design",
    link: "/services/t-shirt-design"

  },
  {
    image: Portfolio5,
    title: "Ecommerce Development",
    link: "/services/ecommerce-solution"

  },
  {
    image: Portfolio6,
    title: "Logo Design",
    link: "/services/logo-design"

  },
  {
    image: Portfolio8,
    title: "Product Design",
    link: "/portfolios"

  },
  {
    image: Portfolio8,
    title: "Product Design",
    link: "/portfolios"

  },
  {
    image: Portfolio8,
    title: "Product Design",
    link: "/portfolios"

  },
  {
    image: Portfolio8,
    title: "Product Design",
    link: "/portfolios"

  },
];
const PortfolioSlider = () => {
  const router = useRouter()
  const settings = {
    dots: false,
    infinite: true,
    draggable: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-4">

      <div class="slider slide portfolio-slide ">
        <div class="slide-track">
          {portfolioData.map((d, i) => (
            <div className="text-center d-flex flex-column align-items-center slide porfolio-slide" style={{ position: "relative" }} key={i}>
              <div className="portfolio_image_container">
                <Image src={d.image} alt="portfolio" priority />
              </div>
              <div className="portfolio_content_container">
                <Image src={MiniLogo} alt="" />
                <h3>|</h3>
                <h3 >{d.title}</h3>

                <button onClick={() => router.push(d.link)}>View Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PortfolioSlider;
