import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { webRedesignServicesList } from "../servicesData";

const WebRedesignServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("webReDesign/service-1-update.png");

  return (
    <>
      <MobileServiceCard
        heading="Why Choose Us for Website Designing Services"
        servicesList={webRedesignServicesList}
      />

      <SectionContent6
        heading="Why Choose Us for Website Designing Services"
        text=""
        bgClass={bgClass}
        img={img}
      >
        {webRedesignServicesList.map((service, idx) => (
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

export default WebRedesignServices;
