import React from "react";
import Invitation from "../../../public/images/Invitation-card-1.webp";
import SectionContent2 from "../../ServicesInnerPagesLayout/SectionContent2";
import { useRouter } from "next/router";
import Link from "next/link";

const InvitationCardInfo = () => {
  const router = useRouter()
  return (
    <div className="custom_tshirt_design">
      <SectionContent2 image={Invitation} center>
        <h2>
          Get Custom Invitation Card Design, From The Best Designers in The
          Business
        </h2>
        <p>
          Get ready to impress your guests with Custom Invitation Card Designs
          from the best Invitation Card Designers in the business! Our team of
          experts will work closely with you to create the perfect design that
          reflects your event's style and theme. At our Invitation Card Design
          Company, we value customer satisfaction and deliver nothing but the
          best.
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

export default InvitationCardInfo;
