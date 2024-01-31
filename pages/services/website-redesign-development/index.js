import Head from "next/head";
import React from "react";
import HomeContact from "../../../components/Home/HomeContact";
import OurClients from "../../../components/Home/OurClients";
import Testimonial from "../../../components/Home/Testimonial";
import Banner from "../../../components/Services/WebsiteRedesign/Banner";
import WebRedesignInfo from "../../../components/Services/WebsiteRedesign/WebRedesignInfo";
import WebsiteRedesignSlider from "../../../components/Services/WebsiteRedesign/WebsiteRedesignSlider";
import WebRedesignProcess from "../../../components/Services/WebsiteRedesign/WebRedesignProcess";
import WebRedesignServices from "../../../components/Services/WebsiteRedesign/WebRedesignServices";
import Testimonial1 from "../../../public/images/webReDesign/testimonial-1.png";
import Testimonial2 from "../../../public/images/webReDesign/testimonial-2.png";
import Testimonial4 from "../../../public/images/webReDesign/testimonial-4.png";
import Packages from "../../../components/Home/Packages";
import NumberCounter from "../../../utils/NumberCounter"
import DevelopmentAgency from "../../../components/Home/DevelopmentAgency";
const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I cannot recommend Design Alligators enough for their outstanding Web Redesign Services. They transformed our outdated website into a modern and visually stunning platform that truly represents our brand!",
      designation: "- Alex Lee, Marketing Director at GreenLife",
    },
    {
      bgColor: "white",
      person: Testimonial1,

      comment:
        "Working with Design Alligators for our Website Redesign was a seamless and enjoyable experience. They took the time to understand our goals and vision for the website and delivered beyond our expectations.",
      designation: "Samantha Hernandez, CEO at Spark Agency",
    },
    {
      bgColor: "white",
      person: Testimonial4,
      comment:
        "Design Alligators exceeded our expectations with their Web Redesign Services. They not only enhanced the website's aesthetics but also optimized its functionality and user experience.",
      designation: "- John Doe, COO at TechNation",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I cannot recommend Design Alligators enough for their outstanding Web Redesign Services. They transformed our outdated website into a modern and visually stunning platform that truly represents our brand!",
      designation: "- Alex Lee, Marketing Director at GreenLife",
    },
    {
      bgColor: "white",
      person: Testimonial1,

      comment:
        "Working with Design Alligators for our Website Redesign was a seamless and enjoyable experience. They took the time to understand our goals and vision for the website and delivered beyond our expectations.",
      designation: "Samantha Hernandez, CEO at Spark Agency",
    },
  ];
  return (
    <>
      <div className="service_page">
        <Head>
          <title>
            Website Redesign Services | New York Company
          </title>
          <link rel="icon" href="/favicon2.png" />
          <meta
            name="description"
            content="Transform your Website's existing look and feel by getting Professional Website Redesign Services in New York."
          />
          <link
            rel="canonical"
            href="https://designalligators.com/services/website-redesign-development"
            key="canonical"
          />
        </Head>
        <Banner />
        <WebRedesignInfo />
        <WebRedesignServices />
        <WebRedesignProcess />
        <WebsiteRedesignSlider />
        <Packages title="Our Packages" home={true} />
        <DevelopmentAgency heading="Development Agency" subHeading="Website Designing Services Portfolio" text="Years of experience and a long list of satisfied clients have enabled us to become a Leading Website Development Agency in the fraternity. We thank Goodfirms to recognize us as a Top SEO Services Company." />
        <Testimonial data={data} />
        <div className="achievement">
        <div>
          <NumberCounter startNumber={0} endNumber={1.2} duration={0.042} fixed={1} symbol="k +" />
          <h5>Website Developed</h5>
        </div>
        <div>
          <NumberCounter startNumber={0} endNumber={400} duration={0.042} fixed={0} symbol="+" />
          <h5>Marketing Collateral</h5>
        </div>
        <div>
          <NumberCounter startNumber={0} endNumber={1.5} duration={0.042} fixed={1} symbol="k +" />

          <h5>Logos identity</h5>
        </div>
        <div>
          <NumberCounter startNumber={0} endNumber={7.3} duration={0.042} fixed={1} symbol="k +" />

          <h5>Secs Animated</h5>
        </div>
        <div>
          <NumberCounter startNumber={0} endNumber={5} duration={0.042} fixed={0} symbol="+" />
          <h5>Years of experience</h5>
        </div>

      </div>
        <OurClients />
        <HomeContact />
      </div>

    </>
  );
};

export default index;
