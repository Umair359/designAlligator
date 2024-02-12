import Head from 'next/head'
import React from 'react'
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Banner from "../../../components/Services/CatalogueDesign/Banner"
import CatalogueDesignInfo from '../../../components/Services/CatalogueDesign/CatalogueDesignInfo'
import CatalogueProcess from '../../../components/Services/CatalogueDesign/CatalogueProcess'
import BestCatalogueDesignServices from '../../../components/Services/CatalogueDesign/BestCatalogueDesignServices'
import CatalogueDesignServices from '../../../components/Services/CatalogueDesign/CatalogueDesignServices'
import CatalogueDesignPortfolio from '../../../components/Services/CatalogueDesign/CatalogueDesignPortfolio'
import Testimonial1 from "../../../public/images/CatalogueDesign/testimonial-1.png"
import Testimonial2 from "../../../public/images/CatalogueDesign/testimonial-2.png"
import Testimonial3 from "../../../public/images/CatalogueDesign/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I was blown away by the Catalogue Design Services provided by Design Alligators. The team listened to my vision and brought it to life in a way that exceeded my expectations. The design was visually stunning and easy to navigate, making it a pleasure for customers to use!",
      designation: "- Rachel Jones, Owner of Jones Fine Jewelry",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "Design Alligators did an amazing job with our Catalogue Design. The team was responsive, professional, and took the time to understand our brand and target audience. The final product was functional and beautiful, and we have received numerous compliments on its design.",
      designation: "- John Kim, Marketing Director at Zenith Electronics"
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "I am so happy I chose Design Alligators for my catalogue design needs. They could turn my scattered ideas into a cohesive and visually stunning catalogue. The team was patient, communicative, and willing to make revisions until I was completely satisfied with the final product.",
      designation: " - Lisa Chen, Founder of Little Sprouts Children's Boutique",
    },
  ];
  return (
    <div>
      <Head>
        <title>
          Catalogue Design Services in Los Angles | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Get professional and eye-catching catalogue design services in Los Angeles. Let our team of experts create a high-quality catalog."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/catalogue-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <CatalogueDesignInfo />
        <CatalogueProcess />
        <BestCatalogueDesignServices />
      </div>
      <CatalogueDesignServices />
      <CatalogueDesignPortfolio />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  )
}

export default index