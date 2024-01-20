import React from "react";
import Catalogue from "../../../public/images/catalogue-design-1.webp";
import SectionContent2 from "../../ServicesInnerPagesLayout/SectionContent2";
import { useRouter } from "next/router";
import Link from "next/link";

const CatalogueDesignInfo = () => {
  const router = useRouter();
  return (
    <div className="custom_tshirt_design">
      <SectionContent2 image={Catalogue} center>
        <h2>Elevate Your Brand with our Catalogue Design Services</h2>
        <p>
          Our team of creative and innovative Catalogue Designers has years of
          experience creating stunning and effective catalogues that make an
          impact.
        </p>
        <p>
          We understand that your business is unique and your catalogue should
          reflect that. We make sure to understand the essence of your brand by
          working closely with you to create a customized design that perfectly
          captures your message and showcases your products or services.
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

export default CatalogueDesignInfo;
