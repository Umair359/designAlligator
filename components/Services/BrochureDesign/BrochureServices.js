import React, { useState } from "react";
import { Col } from "react-bootstrap";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import { brochureServicesList } from "../servicesData";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";

const BrochureServices = () => {
  const [img, setImg] = useState("BrochureDesign/service-1.webp");
  const [bgClass, setBgClass] = useState("service_bg_1");

  return (
    <>
      <MobileServiceCard
        heading="Expert Brochure Design That Tells Your Story"
        text="At Design Alligators, we don't just create brochures; we craft stories that captivate your audience."
        servicesList={brochureServicesList}
      />
      <SectionContent6
        heading="Expert Brochure Design That Tells Your Story"
        text="At Design Alligators, we don't just create brochures; we craft stories that captivate your audience."
        bgClass={bgClass}
        img={img}
      >
        {brochureServicesList.map((service, idx) => (
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

export default BrochureServices;
