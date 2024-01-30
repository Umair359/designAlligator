import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import { SSMServicesList } from "../servicesData";

const SSMServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("SSM/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="Why Most Business Leaders Choose Design Alligators"
        text="At Design Alligators, we are committed to providing exceptional SMM Services in United States. Contact us today to learn more about how we can help your business thrive on social media."
        servicesList={SSMServicesList}
      />

      <SectionContent6
        heading="Why Most Business Leaders Choose Design Alligators"
        text="At Design Alligators, we are committed to providing exceptional SMM Services in United States. Contact us today to learn more about how we can help your business thrive on social media."
        bgClass={bgClass}
        img={img}
      >
        {SSMServicesList.map((service, idx) => (
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

export default SSMServices;
