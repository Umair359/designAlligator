import Head from 'next/head'
import React from 'react'
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Banner from '../../../components/Services/EcommerceMarketing/Banner'
import EcommerceMarketingInfo from '../../../components/Services/EcommerceMarketing/EcommerceMarketingInfo'
import EcommerceMarketingSlider from '../../../components/Services/EcommerceMarketing/EcommerceMarketingSlider'
import OurEcommerceMarketing from '../../../components/Services/EcommerceMarketing/OurEcommerceMarketing'
import WhyChooseUsForEcommerceMarketing from '../../../components/Services/EcommerceMarketing/WhyChooseUsForEcommerceMarketing'
import WhyShouldYouHireUs from '../../../components/Services/EcommerceMarketing/WhyShouldYouHireUs'
import WhyYouNeed from '../../../components/Services/EcommerceMarketing/WhyYouNeed'
import EcommerceMarketingProcess from '../../../components/Services/EcommerceMarketing/EcommerceMarketingProcess'
import EcommerceMarketingServices from '../../../components/Services/EcommerceMarketing/EcommerceMarketingServices'
import Testimonial1 from "../../../public/images/EcommerceMarketing/testimonial-1.png"
import Testimonial2 from "../../../public/images/EcommerceMarketing/testimonial-2.png"
import Testimonial3 from "../../../public/images/EcommerceMarketing/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I have been working with Design Alligators for over a year and am extremely satisfied with their eCommerce Marketing Services. Their team is knowledgeable, professional, and always goes above and beyond to ensure my campaigns succeed.",
      designation: "- John Smith, CEO of Smith's Sporting Goods",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "I recently hired Design Alligators to revamp my Email Marketing Campaigns, and I am thrilled with the results. Their team created engaging and personalized emails that helped me connect with my customers and increase my sales.",
      designation: "- Jane Doe, Owner of Doe's Jewelry Store"
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "I can't say enough good things about Design Alligators. Their eCommerce Marketing Solutions have helped my online business grow significantly over the past few months. They took the time to understand my business needs and goals.",
      designation: "- Michael Johnson, Founder of Johnson's Electronics",
    },
  ];
  return (
    <div className='service_page'>
      <Head>
        <title>
          Best Ecommerce Marketing Services | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators have Professional eCommerce Marketers who can grow your Business through Ecommerce Marketing Services."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/ecommerce-marketing"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <EcommerceMarketingInfo />
        <EcommerceMarketingProcess />
        {/* <OurEcommerceMarketing /> */}
        {/* <WhyYouNeed /> */}
        {/* <WhyShouldYouHireUs /> */}
      </div>
      <EcommerceMarketingServices />
      {/* <WhyChooseUsForEcommerceMarketing /> */}
      <EcommerceMarketingSlider />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  )
}

export default index