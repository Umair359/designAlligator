import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { mobileAppDesignServicesList } from "../servicesData";

const WhyChooseForMobileApp = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("mobileAppDesign/service-1");

  return (
    <>
      <MobileServiceCard
        heading="Why Most Business Leaders Choose Design Alligators ?"
        text=""
        servicesList={mobileAppDesignServicesList}
      />

      <div className="py-5">
        <SectionContent6
          heading="Why Most Business Leaders Choose Design Alligators ?"
          bgClass={bgClass}
          img={img}
        >
          {mobileAppDesignServicesList.map((service, idx) => (
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
      </div>
    </>
  );
};

export default WhyChooseForMobileApp;
