import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import { mobileAppServicesList } from "../servicesData";

const MobileAppServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("mobileAppDevelopment/service-1");

  return (
    <>
      <MobileServiceCard
        heading="Why Most Business Leaders Choose Design Alligators"
        text=""
        servicesList={mobileAppServicesList}
      />
      <SectionContent6
        heading="Why Most Business Leaders Choose Design Alligators"
        bgClass={bgClass}
        img={img}
      >
        {mobileAppServicesList.map((service, idx) => (
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

export default MobileAppServices;
