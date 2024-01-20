import React from "react";
import Brochure from "../../../public/images/brochure-design-1.webp";
import SectionContent2 from "../../ServicesInnerPagesLayout/SectionContent2";
import { useRouter } from "next/router";
import Link from "next/link";

const BrochureDesignInfo = () => {
  const router = useRouter()
  return (
    <div className="custom_tshirt_design">
      <SectionContent2 image={Brochure} center>
        <h2>Elevate Your Brand with our Brochure Design Services</h2>
        <p>
          Transform your branding with the <Link href="/">Design Alligators</Link> top notch brochure
          design services. We meticulously design your brochures so that it
          reflects the heart and soul of your business.
        </p>
        <p>
          We understand that every business is unique, which is why we work
          closely with our clients to create customized Brochure Designs that
          perfectly reflect their brand and message. Whether you're looking for
          a sleek and professional look or something more fun and playful, we
          have the skills and expertise to deliver exactly what you need.
        </p>
        <h5>We are also known for:</h5>
      <ul className="services_known_for">
        <li><Link href="/services/website-development">Website Development Services</Link></li>
        <li><Link href="/services/logo-design">Logo Design Services</Link></li>
        <li><Link href="/services/branding">Branding Services</Link></li>
        <li><Link href="/services/web-app-development">Web Applications Development</Link></li>
        <li><Link href="/services/search-engine-optimization">Search Engine Optimization</Link></li>
        <li><Link href="/services/ecommerce-solution">Ecommerce Development Solutions</Link></li>
      </ul>
      <div className="d-flex gap-3">
      <a href="https://api.whatsapp.com/send/?phone=1917310802&text&type=phone_number&app_absent=0" className="d-flex justify-content-center text-decoration-none">
        <button className="chat_btn service_chat_btn">Live Chat</button>
        </a>
        <button className="order_now" style={{boxShadow:"0px"}} onClick={()=>router.push("/get-a-quote")}>Order Now</button>
      </div>
      </SectionContent2>
    </div>
  );
};

export default BrochureDesignInfo;
