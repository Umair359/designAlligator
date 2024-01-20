import React from "react";
import SectionContent1 from "../../ServicesInnerPagesLayout/SectionContent1";
import EmailMarketing2 from "../../../public/images/email-marketing-2.webp";
import Link from "next/link";
const ProfessionalEmailMarketers = () => {
  return (
    <div className="my-5">

    <SectionContent1 image={EmailMarketing2} center>
      <h6>Professional Email Marketers in New York</h6>
      <h2>Analysing and Improving Campaigns</h2>
      <p>
        <Link href="/">Design Alligators</Link> delivers the most dependable Email Marketing Services
        in New York. The Email Marketing Experts keep on analyzing the Email
        Marketing Campaigns by going through detailed statistics and reports
        which show your recipient’s behavior. Through click maps, detailed link
        click monitoring, and delivery statistics, the Email Marketing Campaigns
        are analyzed professionally to make sure the profitable results come to
        the board. In case, any negative result appears, our Expert Email
        Marketing Team hunts for the reason behind it and eliminates it.
      </p>
      
    </SectionContent1>
    </div>
  );
};

export default ProfessionalEmailMarketers;
