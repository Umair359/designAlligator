import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { LogoDesignServicesList } from "../servicesData";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";

const LogoDesignServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("logoDesign/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="Affordable Logo Design Services in USA"
        text="We can help you create a Logo Design from scratch, or even Redesign an existing Logo Design."
        servicesList={LogoDesignServicesList}
      />
      <SectionContent6
        heading="Affordable Logo Design Services in USA"
        text="We can help you create a Logo Design from scratch, or even Redesign an existing Logo Design."
        bgClass={bgClass}
        img={img}
      >
        {LogoDesignServicesList.map((service, idx) => (
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

export default LogoDesignServices;
