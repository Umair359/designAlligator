import React, { useState } from "react";
import { Col } from "react-bootstrap";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import { emailServicesList } from "../servicesData";

const EmailServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("EmailMarketing/service-1");

  return (
    <>
      <MobileServiceCard
        heading="Why Choose Design Alligators for Email Marketing Services?"
        text="Design Alligators is a trusted provider of Email Marketing Services in the USA. Here are some reasons why you should choose us for your email marketing needs."
        servicesList={emailServicesList}
      />
      <SectionContent6
        heading="Why Choose Design Alligators for Email Marketing Services?"
        text="Design Alligators is a trusted provider of Email Marketing Services in the USA. Here are some reasons why you should choose us for your email marketing needs."
        bgClass={bgClass}
        img={img}
      >
        {emailServicesList.map((service, idx) => (
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

export default EmailServices;
