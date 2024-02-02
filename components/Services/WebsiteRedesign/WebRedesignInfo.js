import React from "react";
import SectionContent1 from "../../ServicesInnerPagesLayout/SectionContent1";
import WebRedesign1 from "../../../public/images/web-redesign-section-img-1.png";
import WebRedesign2 from "../../../public/images/web-redesign-section-img-2.png";
import Link from "next/link";
const WebRedesignInfo = () => {
  return (
    <SectionContent1 image={WebRedesign1} image2={WebRedesign2}>
      <div className="p-4">
        <h6>Web Designing Services Near Me</h6>
        <h2>Expert Redesign Services</h2>
        <p>
        With a decade of experience as web designers, we prioritize high-conversion marketing, combining both elements to deliver websites that not only boast impressive visuals and swift loading times but are strategically designed to guide your visitors toward becoming customers.</p>
        <p>In today's digital era, ensuring mobile-friendliness is paramount. Design Alligators excels in creating responsive websites with our <span className="pink-bold"> web designing services </span>  that effortlessly adapt to various screen sizes and devices. This guarantees an excellent user experience on smartphones, tablets, and desktop computers, expanding your online reach. Avail our <span className="pink-bold text-sm"> professional web designing services in Edmonton, Canada, </span> and discover <span className="pink-bold"> web designing solutions near me.</span></p>
      </div>
    </SectionContent1>
  );
};

export default WebRedesignInfo;
