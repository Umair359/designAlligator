import Head from 'next/head'
import React from 'react'
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Banner from "../../../components/Services/MenuDesign/Banner"
import MenuDesignInfo from '../../../components/Services/MenuDesign/MenuDesignInfo'
import MenuDesignProcess from '../../../components/Services/MenuDesign/MenuDesignProcess'
import BestMenuDesignServices from '../../../components/Services/MenuDesign/BestMenuDesignServices'
import MenuDesignServices from '../../../components/Services/MenuDesign/MenuDesignServices'
import MenuDesignPortfolio from '../../../components/Services/MenuDesign/MenuDesignPortfolio'
import Testimonial1 from "../../../public/images/MenuDesign/testimonial-1.png"
import Testimonial2 from "../../../public/images/MenuDesign/testimonial-2.png"
import Testimonial3 from "../../../public/images/MenuDesign/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I worked with Design Alligators to create a menu design for my restaurant, and I was blown away by their attention to detail and creativity.",
      designation: "- John Smith, Owner of Smith's Restaurant",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "Design Alligators created a custom menu design for our bar, which turned out amazing! The team was responsive, professional, and really listened to our needs.",
      designation: "- Sarah Johnson, Manager of The Pour House"
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "I was in a rush to get a menu design done for my restaurant, and Design Alligators came through for me in a big way.",
      designation: " - James Lee, Owner of Lee's Asian Cuisine",
    },
  ];
  return (
    <div>
      <Head>
        <title>
          Affordable Custom Menu Design Services | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Get Noticed with Affordable Custom Menu Design Services - Click Here for Eye-Catching Menus That Impress! Stand out with our Expert Menu Designers."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/menu-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <MenuDesignInfo />
        <MenuDesignProcess />
        <BestMenuDesignServices />
      </div>
      <MenuDesignServices />
      <MenuDesignPortfolio />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  )
}

export default index