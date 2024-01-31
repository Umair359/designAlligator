import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { PPCServicesList } from "../servicesData";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";

const WhyChooseUsForPPC = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("PPC/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="Why Choose Design Alligators for PPC Services?"
        text="We offer a wide range of PPC Services at Design Alligators to help businesses maximize their online advertising efforts."
        servicesList={PPCServicesList}
      />
      <SectionContent6
        heading="Why Choose Design Alligators for PPC Services?"
        text="We offer a wide range of PPC Services at Design Alligators to help businesses maximize their online advertising efforts."
        bgClass={bgClass}
        img={img}
      >
        {PPCServicesList.map((service, idx) => (
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

export default WhyChooseUsForPPC;
