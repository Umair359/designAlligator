import React from "react";
import SectionContent1 from "../../ServicesInnerPagesLayout/SectionContent1";
import Ecommerce1 from "../../../public/images/Ecommerce2.webp";
import Link from "next/link";
const EcommerceInfo = () => {
  return (
    <SectionContent1 image={Ecommerce1} center>
      <h6>Ecommerce Development Solutions</h6>
      <h2>Customized Ecommerce Development Solutions</h2>
      <p>
        At <Link href="/">Design Alligators</Link>, we understand how important it is to create a
        straightforward process for online buyers. Therefore, we offer
        comprehensive Ecommerce Development Services, covering
        everything from initial concept to go-live, including SKU management and
        cataloguing.
      </p>
      <p>
        Working as an Ecommerce Development Agency has taught us the value of
        keeping track of inventory levels. You may rest easy knowing that your
        inventory is being tracked and maintained effectively with the help of
        our Ecommerce Development Services. We offer inventory
        management services to help you maintain an accurate supply and meet the
        needs of your clientele at all times.
      </p>
    </SectionContent1>
  );
};

export default EcommerceInfo;
