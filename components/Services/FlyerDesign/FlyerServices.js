import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import { flyerServicesList } from "../servicesData";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";

const FlyerServices = () => {
  const [img, setImg] = useState("FlyerDesign/service-1.webp");
  const [bgClass, setBgClass] = useState("service_bg_1");

  return (
    <>
      <MobileServiceCard
        heading="Expert Flyer Design That Grabs Attention"
        text="At Design Alligators, we don't just specialize in invitation card design; we also offer expert Flyer Design Services. Here are some of the reasons why you should choose us:"
        servicesList={flyerServicesList}
      />
      <SectionContent6
        heading="Expert Flyer Design That Grabs Attention"
        text="At Design Alligators, we don't just specialize in invitation card design; we also offer expert Flyer Design Services. Here are some of the reasons why you should choose us:"
        bgClass={bgClass}
        img={img}
      >
        {flyerServicesList.map((service, idx) => (
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

export default FlyerServices;
