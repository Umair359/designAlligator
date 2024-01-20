import React from "react";
import SectionContent1 from "../../ServicesInnerPagesLayout/SectionContent1";
import UIUXDesign1 from "../../../public/images/UI-UX-section-img.jpg";
import Link from "next/link";

const DesignsInfo = () => {
  return (
    <SectionContent1 image={UIUXDesign1} center>
      <h6>Website Design Services in the United States</h6>
      <h2>Diverse Website Designing Options</h2>
      <p>
        At <Link href="/">Design Alligators</Link>, we pride ourselves on providing top-notch Web
        Design Services catering to small and large businesses. We understand
        the importance of having a unique website that stands out from the
        crowd, and our team of Professional Web Designers is ready to work with
        you to create a website that perfectly represents your brand.
      </p>
      <p>
        We have a team of highly qualified Web Designers who specialize in all
        aspects of Custom Web Design Services. Our mission is to make your
        business more successful by providing exceptional Web Design Services
        that meet your needs.
      </p>
    </SectionContent1>
  );
};

export default DesignsInfo;
