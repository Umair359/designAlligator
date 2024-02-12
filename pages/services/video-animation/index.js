import React from "react";
import Banner from "../../../components/Services/VideoAnimation/Banner";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import VideoAnimationServices from "../../../components/Services/VideoAnimation/VideoAnimationServices";
import WhyChooseUsForAnimations from "../../../components/Services/VideoAnimation/WhyChooseUsForAnimations";
import VideoAnimationSlider from "../../../components/Services/VideoAnimation/VideoAnimationSlider";
import VideoAnimationInfo from "../../../components/Services/VideoAnimation/VideoAnimationInfo";
import Head from "next/head";
import VideoAnimationProcesses from "../../../components/Services/VideoAnimation/VideoAnimationProcesses";
import Testimonial1 from "../../../public/images/VideoAnimation/testimonial-1.png"
import Testimonial2 from "../../../public/images/VideoAnimation/testimonial-2.png"
import Testimonial3 from "../../../public/images/VideoAnimation/testimonial-3.png"
import Packages from "../../../components/Home/Packages";
const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I had a fantastic experience working with Design Alligators for my video animation needs. As a small business owner, I was looking for a way to showcase my products and services in a fun and engaging way, and their team delivered exactly what I was looking for",
      designation: "- Jane Smith, Owner of Smith's Boutique",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "Design Alligators is the best Video Animation Service I have ever used. Their team is professional, creative, and really took the time to understand my vision. They created a video that exceeded my expectations, and I cannot recommend them enough!",
      designation: "- John Doe, Marketing Manager at Xyro Company",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "I was blown away by the quality of the video animation that Design Alligators created for my brand. It was visually stunning and helped us stand out from our competitors. Their team was easy to work with, responsive, and went above and beyond to ensure our satisfaction.",
      designation: "- Sarah Lee, CEO of Lee Enterprises",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title> Video Animation Service | Video Animation Company</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators is a Leading Video Animation Company that provides Best Video Animation Services in the USA. Best 2D & 3D Animators in Town"
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/video-animation"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <VideoAnimationInfo />
        <VideoAnimationServices />
        <VideoAnimationProcesses />
      </div>
      <WhyChooseUsForAnimations />
      <VideoAnimationSlider />
      <Packages title="Video Animation Packages" page="Video Animation" />

      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
