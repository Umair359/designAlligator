import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import { WebDevServicesList } from "../servicesData";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";

const WebDevServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("WebDev/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="Why Most Business Leaders Choose Design Alligators"
        text=""
        servicesList={WebDevServicesList}
      />
      <SectionContent6
        heading="Why Most Business Leaders Choose Design Alligators"
        text="We offer an immersive digital experience that goes beyond just Web Development Services."
        bgClass={bgClass}
        img={img}
      >
        {WebDevServicesList.map((service, idx) => (
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

export default WebDevServices;
