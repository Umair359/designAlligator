import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import { posterServicesList } from "../servicesData";

const PosterDesignServices = () => {
  const [img, setImg] = useState("PosterDesign/service-1");
  const [bgClass, setBgClass] = useState("service_bg_1");

  return (
    <>
      <MobileServiceCard
        heading="Eye-Catching Poster Design for Your Business"
        text="At Design Alligators, we specialize in creating visually stunning posters that effectively communicate your brand's message. Here's why we're the best choice for your poster design needs:"
        servicesList={posterServicesList}
      />
      <SectionContent6
        heading="Eye-Catching Poster Design for Your Business"
        text="At Design Alligators, we specialize in creating visually stunning posters that effectively communicate your brand's message. Here's why we're the best choice for your poster design needs:"
        bgClass={bgClass}
        img={img}
      >
        {posterServicesList.map((service, idx) => (
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

export default PosterDesignServices;
