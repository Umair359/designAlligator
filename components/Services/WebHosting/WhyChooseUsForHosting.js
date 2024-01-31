import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { hostingServicesList } from "../servicesData";

const WhyChooseUsForHosting = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("webHosting/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="Why Choose Design Alligators for Web Hosting Solutions?"
        servicesList={hostingServicesList}
      />
      <div className="py-5">
        <SectionContent6
          heading="Why Choose Design Alligators for Web Hosting Solutions?"
          bgClass={bgClass}
          img={img}
        >
          {hostingServicesList.map((service, idx) => (
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

export default WhyChooseUsForHosting;
