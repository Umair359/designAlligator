import React from "react";
import Achievements from "../../../components/Home/Achievements";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/LogoDesign/Banner";
import ServiceInfo from "../../../components/Services/LogoDesign/ServiceInfo";
import LogoPackages from "../../../components/Services/LogoDesign/LogoPackages";
import LogoSliders from "../../../components/Services/LogoDesign/LogoSliders";
import Head from "next/head";
import LogoDesignServices from "../../../components/Services/LogoDesign/LogoDesignServices";
import LogoProcesses from "../../../components/Services/LogoDesign/LogoProcesses";
import Testimonial1 from "../../../public/images/logoDesign/testimonial-1.png"
import Testimonial2 from "../../../public/images/logoDesign/testimonial-2.png"
import Testimonial3 from "../../../public/images/logoDesign/testimonial-3.png"
import Packages from "../../../components/Home/Packages"

const index = () => {
  const data = [
    {
      bgColor: "#b7adad",
      person: Testimonial1,
      comment:
      "I had been struggling to create a logo for my business for months until I stumbled upon Design Alligators. Their team of talented designers worked with me every step of the way to create the perfect logo that truly represents my brand. I couldn't be happier with the end result",
      designation: "- Sarah Johnson, owner of Sarah's Sweets Bakery",
    },
    {
      bgColor: "#3f5548",
      person: Testimonial2,
      comment:
        "Design Alligators made the logo design process so easy and stress-free. Their team of designers is extremely talented, and they were able to create a logo that was exactly what I had envisioned for my business. I would highly recommend their services to anyone needing a high-quality logo",
        designation:"- John Smith, owner of Smith Consulting"
    },
    {
      bgColor: "#aa061b",
      person: Testimonial3,
      comment:
        "Design Alligators exceeded my expectations with their logo design services. They truly took the time to understand my business and what I wanted my logo to represent. Their team of designers are not only talented but also professional and easy to work with. I am so grateful for their expertise and would highly recommend them to anyone needing a new logo.",
      designation: "- Emily Davis, owner of Emily's Floral Shop",
    },
  ];
  return (
    <div className="service_page">
      <Head>
        <title>
        Professional Logo Design Services in USA | Design Alligators 
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators is well known Top Logo Design Company in the United States. Get Professional Logo Design Services from Expert Logo Designers."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/logo-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <ServiceInfo />
        <LogoProcesses />
      </div>
      <LogoDesignServices />
      <LogoSliders />
      {/* <LogoPackages /> */}
      <Packages title="Logo Packages"/>
      {/* <LogoPackages /> */}
      <Testimonial data={data}/>
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};

export default index;
