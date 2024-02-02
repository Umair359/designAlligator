import React, { useState } from "react";
import { Col } from "react-bootstrap";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { SEOServicesList } from "../servicesData";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";

const SEOServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("SEO/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="Why Choose Design Alligators for SEO Services?"
        text="At Design Alligators, we offer comprehensive SEO services to help your business grow and reach its full potential. "
        servicesList={SEOServicesList}
      />

      <div className="py-5">
        <SectionContent6
          heading="Why Choose Design Alligators for SEO Services?"
          text="At Design Alligators, we offer comprehensive SEO services to help your business grow and reach its full potential. "
          bgClass={bgClass}
          img={img}
        >
          {SEOServicesList.map((service, idx) => (
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

export default SEOServices;
