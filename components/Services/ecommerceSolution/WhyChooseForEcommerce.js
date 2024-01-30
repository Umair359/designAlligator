import React, { useState } from "react";
import { Col } from "react-bootstrap";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { ecommerceServicesList } from "../servicesData";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";

const WhyChooseForEcommerce = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("EcommerceSolution/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="What Makes Us Best Ecommerce Development Agency?"
        servicesList={ecommerceServicesList}
      />
      <div className="py-5">
        <SectionContent6
          heading="What Makes Us Best Ecommerce Development Agency?"
          bgClass={bgClass}
          img={img}
        >
          {ecommerceServicesList.map((service, idx) => (
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

export default WhyChooseForEcommerce;
