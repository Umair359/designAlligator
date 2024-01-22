import Image from "next/image";
import React from "react";
import BestSeller from "../../../public/images/best-seller.png";

const PackageCard = ({
  children,
  title,
  amount,
  bestSeller,
  bgClass,
  stars,
  text,
  timeline,
  CTA,
}) => {
  return (
    <div className={`logo_card_main ${bgClass}`}>
      <div>
        <div className="logo_package_header">
          <div className="d-flex flex-column align-items-center">
            <h3>{title}</h3>
            <Image src={stars} className="card-svg" />
          </div>
        </div>

        <div className="px-3 pt-2">
          {text && <p className="pt-2 text-white">{text}</p>}
          <hr />
        </div>
        <div className="package_content">{children}</div>
      </div>

      <div style={{ width: "100%", textAlign: "center", color: "white" }}>
        <hr />
        <h2 className="amount">{amount}</h2>
        <h6 className="month">USD {!timeline ? "MONTH" : timeline}</h6>

        <button style={{ width: "fit-content", fontSize: "15px" }}>
          {!CTA ? "BUY NOW" : CTA}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
