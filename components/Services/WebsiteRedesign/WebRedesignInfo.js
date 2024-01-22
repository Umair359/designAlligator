import React from "react";
import SectionContent1 from "../../ServicesInnerPagesLayout/SectionContent1";
import WebRedesign1 from "../../../public/images/web-redesign-section-img.png";
import Link from "next/link";
const WebRedesignInfo = () => {
  return (
    <SectionContent1 image={WebRedesign1}>
      <div className="p-4">
        <h6>Web Redesign Services in the USA</h6>
        <h2>Expert Redesign Services</h2>
        <p>
          A poorly designed website is like a bad business card; it sends the
          wrong message to potential clients. With the help of <Link href="/">Design
          Alligators</Link>, your website will have a fresh new appearance and feel,
          resulting in a more pleasant user experience and better conversion
          rates. We are a group of skilled Website Designers and Developers
          situated in New York, Chicago, and Edison, and we work with customers
          all around the country. When you choose us to revamp your website,
          we'll make sure it looks great and helps your business succeed. We
          begin with a thorough evaluation of your existing website to determine
          its weak points and formulate an in-depth strategy for redesigning it.
          From the initial idea through the final product's release, our team
          will work closely with you to make your dreams a reality. If you hire
          us to redesign your website, not only will it appear and function
          better, but it will also aid you in meeting your business goals.
        </p>
      </div>
    </SectionContent1>
  );
};

export default WebRedesignInfo;
