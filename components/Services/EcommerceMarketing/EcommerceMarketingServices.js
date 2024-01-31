import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import { ecommerceMarketingServicesList } from "../servicesData";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";

const EcommerceMarketingServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("EcommerceMarketing/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="Why Most Business Leaders Choose Design Alligators"
        text="If you are looking for effective eCommerce Marketing Solutions in the United States, look no further than our Online Marketing Firm, a leading eCommerce Marketing provider in the area. Here are some reasons why you should choose us as your eCommerce Marketing Services provider:"
        servicesList={ecommerceMarketingServicesList}
      />
      <SectionContent6
        heading="Why Most Business Leaders Choose Design Alligators"
        text="If you are looking for effective eCommerce Marketing Solutions in the United States, look no further than our Online Marketing Firm, a leading eCommerce Marketing provider in the area. Here are some reasons why you should choose us as your eCommerce Marketing Services provider:"
        bgClass={bgClass}
        img={img}
      >
        {ecommerceMarketingServicesList.map((service, idx) => (
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

export default EcommerceMarketingServices;
