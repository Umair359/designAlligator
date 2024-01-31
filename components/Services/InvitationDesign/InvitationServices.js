import React, { useState } from "react";
import SectionContent6 from "../../ServicesInnerPagesLayout/SectionContent6";
import ServicesCard from "../../ServicesInnerPagesLayout/ServicesCard";
import MobileServiceCard from "../../ServicesInnerPagesLayout/MobileServiceCard";
import { invitationServicesList } from "../servicesData";

const InvitationServices = () => {
  const [bgClass, setBgClass] = useState("service_bg_1");
  const [img, setImg] = useState("InvitationCard/service-1.webp");

  return (
    <>
      <MobileServiceCard
        heading="What Makes Us The Best Invitation Card Designers in the USA"
        servicesList={invitationServicesList}
      />
      <SectionContent6
        heading="What Makes Us The Best Invitation Card Designers in the USA"
        bgClass={bgClass}
        img={img}
      >
        {invitationServicesList.map((service, idx) => (
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

export default InvitationServices;
