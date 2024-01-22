import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import { catalogueServicesList } from "../servicesData";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";

const CatalogueDesignServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("CatalogueDesign/service-1");

  return (
    <>
      <MobileServiceCard
        heading="Craft Your Story with Design Alligators' Catalogue Design Services"
        text="At Design Alligators, we believe that your brochure should tell a story that captivates your audience. "
        servicesList={catalogueServicesList}
      />
      <SectionContent6
        heading="Craft Your Story with Design Alligators' Catalogue Design Services"
        text="At Design Alligators, we believe that your brochure should tell a story that captivates your audience. "
        bgClass={bgClass}
        img={img}
      >
        {catalogueServicesList.map((service, idx) => (
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

export default CatalogueDesignServices;
