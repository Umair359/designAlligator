import React from "react";
import SectionContent1 from "../../ServicesInnerPagesLayout/SectionContent1";
import Hosting1 from "../../../public/images/hosting-2.webp";
import Link from "next/link";
const OurHostingInfo = () => {
  return (
    <SectionContent1 image={Hosting1} center>
      <div className="p-4">
        <h6>Website Hosting Services in the USA</h6>
        <h2>Every Business is an Online Landscape</h2>
        <p>
          Put your online business in the reliable hands of <Link href="/">Design Alligators</Link>!
          Our Website Hosting Services For Small Business are perfect for anyone looking to reach a
          larger audience and boost their internet presence. From coast-to-coast
          across North America, over to England, down under Australia's lands –
          wherever you call home - we've got an effective solution that'll have
          your site running like clockwork. So what're ya waiting for? Let us
          help you do things just right with our amazing web hosting solutions
          today!
        </p>
        <p>
          Our dashboard gives you an effortless website management experience,
          ensuring hosting your webpage is simplified. With our various web
          hosting options available, we’re sure to have one that fits all your
          requirements! At Design Alligators, providing effective and efficient
          services for accessible web hosting are part of the job – something we
          pride ourselves on achieving so you can fulfil any online objectives
          at hand.
        </p>
      </div>
    </SectionContent1>
  );
};

export default OurHostingInfo;
