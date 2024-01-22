import React from 'react'
import Slider from 'react-slick';
import Blog1 from '../../public/images/NewUI/blog1.png';
import Blog2 from '../../public/images/NewUI/blog2.png';
import Blog3 from '../../public/images/NewUI/blog3.png';
import Image from 'next/image';
import { sliderSettings3, sliderSettings4 } from '../../utils/sliderConfiguration';
import { FaCaretRight } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";


const Blogs = () => {
    const settings = {
        dots: false,
        infinite: true,
        draggable: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 3,
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
        <div style={{ marginTop: "100px" }} >
            <h2 style={{ textAlign: "center", fontSize: "60px" }} >Blog</h2>
            <div style={{ width: "90%", margin: "auto" }}>

                <Slider style={{ marginTop: "40px" }}  {...sliderSettings4} >
                    <div className='blog-slider' style={{ width: "150px !important" }} >
                        <Image src={Blog1} alt="blog1.png" />
                        <div className='blog-slider-content' >
                            <div>
                                <CiClock2 />
                                <h5 style={{ color: "black" }}>July 31 , 2022</h5>
                            </div>
                            <h3>Cracking The Code: Brochure Design
                                For Cafe</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority  words which don't look even slightly believable.</p>
                            <div>
                                <FaCaretRight />
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className='blog-slider' style={{ width: "150px !important" }} >
                        <Image src={Blog1} alt="blog1.png" />
                        <div className='blog-slider-content' >
                            <div>
                                <CiClock2 />
                                <h5 style={{ color: "black" }}>July 31 , 2022</h5>
                            </div>
                            <h3>Cracking The Code: Brochure Design
                                For Cafe</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority  words which don't look even slightly believable.</p>
                            <div>
                                <FaCaretRight />
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className='blog-slider' style={{ width: "150px !important" }} >
                        <Image src={Blog2} alt="blog1.png" />
                        <div className='blog-slider-content' >
                            <div>
                                <CiClock2 />
                                <h5 style={{ color: "black" }}>July 31 , 2022</h5>
                            </div>
                            <h3>Cracking The Code: Brochure Design
                                For Cafe</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority  words which don't look even slightly believable.</p>
                            <div>
                                <FaCaretRight />
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className='blog-slider' style={{ width: "150px !important" }} >
                        <Image src={Blog3} alt="blog1.png" />
                        <div className='blog-slider-content' >
                            <div>
                                <CiClock2 />
                                <h5 style={{ color: "black" }}>July 31 , 2022</h5>
                            </div>
                            <h3>Cracking The Code: Brochure Design
                                For Cafe</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority  words which don't look even slightly believable.</p>
                            <div>
                                <FaCaretRight />
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>




                </Slider>
            </div>
        </div>
    )
}

export default Blogs
