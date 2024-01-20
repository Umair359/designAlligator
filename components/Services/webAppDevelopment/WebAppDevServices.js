import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { WebAppDevServicesList } from "../servicesData";

const WebAppDevServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("WebAppDev/service-1");

  return (
    <>
      <MobileServiceCard
        heading="Why Most Business Leaders Choose Design Alligators"
        text=""
        servicesList={WebAppDevServicesList}
      />

      <SectionContent6
        heading="Why Most Business Leaders Choose Design Alligators"
        text="As a Web Application Development Agency based in Brooklyn, Chicago, and Edison, we offer a range of Professional Web Application Development Services throughout the United States. "
        bgClass={bgClass}
        img={img}
      >
        {WebAppDevServicesList.map((service, idx) => (
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

export default WebAppDevServices;
