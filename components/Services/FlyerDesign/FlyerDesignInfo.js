import React from "react";
import Flyer from "../../../public/images/flyer-design-1.webp";
import SectionContent2 from "../../ServicesInnerPagesLayout/SectionContent2";
import { useRouter } from "next/router";
import Link from "next/link";

const FlyerDesignInfo = () => {
  const router = useRouter();
  return (
    <div className="custom_tshirt_design">
      <SectionContent2 image={Flyer} center>
        <h2>Get Creative Flyer Design Service From the Pros</h2>
        <p>
          Looking for a creative and eye-catching Flyer Design that stands out
          from the rest? Look no further than our team of professional Flyer
          Designers! We specialize in creating Custom Flyer Designs that are
          tailored to your brand and message.
        </p>
        <p>
          Whether you need flyers for a business promotion, an event, or a
          fundraiser, we've got you covered. Our Flyer Designers will work
          closely with you to ensure your flyer captures your vision and
          effectively communicates your message to your target audience.
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

export default FlyerDesignInfo;
