import React from "react";
import Menu from "../../../public/images/menu-design-1.webp";
import SectionContent2 from "../../ServicesInnerPagesLayout/SectionContent2";
import { useRouter } from "next/router";
import Link from "next/link";

const MenuDesignInfo = () => {
  const router = useRouter();
  return (
    <div className="custom_tshirt_design">
      <SectionContent2 image={Menu} center>
        <h2>Affordable Custom Menu Design Services</h2>
        <p>
          Looking for an affordable custom menu design service to make your
          business or event truly captivating? Our team of experts at Design
          Alligators excels at crafting standout menu designs that set your
          brand apart.
        </p>
        <p>
          We offer customized menu designs that are tailored to your specific
          needs and preferences, whether you're looking for a professional and
          elegant style or a more playful and creative approach.
        </p>
        <h5>We are also known for:</h5>
        <ul className="services_known_for">
          <li>
            <Link href="/services/website-development">
              Website Development Services
            </Link>
          </li>
          <li>
            <Link href="/services/logo-design">Logo Design Services</Link>
          </li>
          <li>
            <Link href="/services/branding">Branding Services</Link>
          </li>
          <li>
            <Link href="/services/web-app-development">
              Web Applications Development
            </Link>
          </li>
          <li>
            <Link href="/services/search-engine-optimization">
              Search Engine Optimization
            </Link>
          </li>
          <li>
            <Link href="/services/ecommerce-solution">
              Ecommerce Development Solutions
            </Link>
          </li>
        </ul>
        <div className="d-flex gap-3">
          <a
            href="https://api.whatsapp.com/send/?phone=1917310802&text&type=phone_number&app_absent=0"
            className="d-flex justify-content-center text-decoration-none"
          >
            <button className="chat_btn service_chat_btn">Live Chat</button>
          </a>
          <button
            className="order_now"
            style={{ boxShadow: "0px" }}
            onClick={() => router.push("/get-a-quote")}
          >
            Order Now
          </button>
        </div>
      </SectionContent2>
    </div>
  );
};

export default MenuDesignInfo;
