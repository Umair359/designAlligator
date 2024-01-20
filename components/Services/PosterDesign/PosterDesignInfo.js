import React from "react";
import Poster from "../../../public/images/poster-design-1.webp";
import SectionContent2 from "../../ServicesInnerPagesLayout/SectionContent2";
import { useRouter } from "next/router";
import Link from "next/link";

const PosterDesignInfo = () => {
  const router = useRouter();
  return (
    <div className="custom_tshirt_design">
      <SectionContent2 image={Poster} center>
        <h2>Get Exceptional Poster Design Services from Design Alligators</h2>
        <p>
          We are the real deal when it comes to poster design. We can help you
          bring your vision to life. Our team of experts specializes in
          providing exceptional Poster Design Services that will help your brand
          stand out from the competition.
        </p>
        <p>
          Whether you're looking for a professional and elegant style or a more
          creative and eye-catching approach, our team will collaborate closely
          with you to ensure that your poster design accurately represents your
          brand and effectively captures the attention of your target audience.
        </p>
        <h5>We are also known for:</h5>
        <ul className="services_known_for">
          <li>
            <Link href="/services/t-shirt-design">
              Custom T-Shirt Design
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

export default PosterDesignInfo;
