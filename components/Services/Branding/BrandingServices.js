import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { brandingServicesList } from "../servicesData";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";

const BrandingServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("branding/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="Best Branding Services"
        text="We're a full-service digital machine specializing in branding services that create long-lasting relationships between customers and companies."
        servicesList={brandingServicesList}
      />
      <SectionContent6
        heading="Best Branding Services"
        text="We're a full-service digital machine specializing in branding services that create long-lasting relationships between customers and companies."
        bgClass={bgClass}
        img={img}
      >
        {brandingServicesList.map((service, idx) => (
          <ServicesCard
            key={idx}
            number={service.number}
            title={service.title}
            desc={service.desc}
            img={service.img}
            setImg={setImg}
            bgClass={service.bgClass}
            sectionNo={service.sectionNo}
            setBgClass={setBgClass}
          />
        ))}
      </SectionContent6>
    </>
  );
};

export default BrandingServices;
