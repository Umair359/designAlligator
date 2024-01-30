import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { animationServicesList } from "../servicesData";

const WhyChooseUsForAnimations = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("VideoAnimation/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="Why Design Alligators is the Best Choice for Video Animation Services"
        btnText="Contact us today to learn more!"
        servicesList={animationServicesList}
      />
      <SectionContent6
        heading="Why Design Alligators is the Best Choice for Video Animation Services"
        btnText="Contact us today to learn more!"
        bgClass={bgClass}
        img={img}
      >
        {animationServicesList.map((service, idx) => (
          <ServicesCard
            key={idx}
            number={service.number}
            title={service.title}
            desc={service.desc}
            img={service.img}
            bgClass={service.bgClass}
            sectionNo={service.sectionNo}
            setImg={setImg}
            setBgClass={setBgClass}
          />
        ))}
      </SectionContent6>
    </>
  );
};

export default WhyChooseUsForAnimations;
