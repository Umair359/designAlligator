import React from "react";
import SectionContent2 from "../../ServicesInnerPagesLayout/SectionContent2";
import Tshirt from "../../../public/images/tshirt.png"
import Link from "next/link";
import { useRouter } from "next/router";
const GetCustomTshirt = () => {
  const router = useRouter()
  return (
    <div className="custom_tshirt_design">

    <SectionContent2 image={Tshirt} center>
      <h2>Custom T-Shirt Design</h2>
      <p>
        Welcome to <Link href="/">Design Alligators</Link>, where we make your T-Shirt design dreams a
        reality! Our T-Shirt Design Team is talented and passionate individuals
        is on a mission to create unique and practical T-Shirt Design Solutions
        that will blow your mind.
      </p>
      <p>
        From graphic design to the latest technology, we've got you covered!
      </p>
      <h5>We are also known for:</h5>
      <ul className="services_known_for">
          <li>
            <Link href="/services/poster-design">
              Poster Design Design
            </Link>
          </li>
          <li>
            <Link href="/services/menu-design">Menu Design Services</Link>
          </li>
          <li>
            <Link href="/services/catalogue-design">Catalogue design services</Link>
          </li>
          <li>
            <Link href="/services/brochure-design">
              Brochure Design Services
            </Link>
          </li>
          <li>
            <Link href="/services/invitation-design">
              Invitation Card Designing Services
            </Link>
          </li>
          <li>
            <Link href="/services/flyer-design">
              Flyer Design Services
            </Link>
          </li>
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

export default GetCustomTshirt;
