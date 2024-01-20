import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import { menuServicesList } from "../servicesData";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";

const MenuDesignServices = () => {
  const [img, setImg] = useState("MenuDesign/service-1");
  const [bgClass, setBgClass] = useState("service_bg_1");

  return (
    <>
      <MobileServiceCard
        heading="Expert Menu Design That Captures Your Brand Identity"
        text="At Design Alligators, we specialize in creating menus that showcase your brand's unique identity and messaging. Here's why we're the best choice for your menu design needs:"
        servicesList={menuServicesList}
      />
      <SectionContent6
        heading="Expert Menu Design That Captures Your Brand Identity"
        text="At Design Alligators, we specialize in creating menus that showcase your brand's unique identity and messaging. Here's why we're the best choice for your menu design needs:"
        bgClass={bgClass}
        img={img}
      >
        {menuServicesList.map((service, idx) => (
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

export default MenuDesignServices;
