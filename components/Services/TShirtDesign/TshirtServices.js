import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import { tshirtServicesList } from "../servicesData";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";

const TshirtServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("TShirtDesigning/service-1");

  return (
    <>
      <MobileServiceCard
        heading="Why Most Business Leaders Choose Design Alligators"
        text="Design Alligators is your one-stop shop for all things T-shirt Design. Here are some of the T-Shirt Design Services we offer:"
        servicesList={tshirtServicesList}
      />

      <SectionContent6
        heading="Why Most Business Leaders Choose Design Alligators"
        text="Design Alligators is your one-stop shop for all things T-shirt Design. Here are some of the T-Shirt Design Services we offer:"
        bgClass={bgClass}
        img={img}
      >
        {tshirtServicesList.map((service, idx) => (
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

export default TshirtServices;
