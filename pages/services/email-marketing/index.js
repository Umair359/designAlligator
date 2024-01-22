import Head from 'next/head'
import React from 'react'
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Banner from '../../../components/Services/EmailMarketing/Banner'
import EmailMarketingInfo from '../../../components/Services/EmailMarketing/EmailMarketingInfo'
import EmailMarketingSlider from '../../../components/Services/EmailMarketing/EmailMarketingSlider'
import ProfessionalEmailMarketers from '../../../components/Services/EmailMarketing/ProfessionalEmailMarketers'
import EmailProcess from '../../../components/Services/EmailMarketing/EmailProcess'
import EmailServices from '../../../components/Services/EmailMarketing/EmailServices'
import Testimonial1 from "../../../public/images/EmailMarketing/testimonial-1.png"
import Testimonial2 from "../../../public/images/EmailMarketing/testimonial-2.png"
import Testimonial3 from "../../../public/images/EmailMarketing/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "#2e151f",
      person: Testimonial1,
      comment:
      "I highly recommend Design Alligators for their exceptional PPC Services. Their team is professional, knowledgeable, and always willing to go the extra mile to ensure our Email Marketing Campaigns are successful.",
      designation: "- Mark Johnson, CEO of XYZ Corporation",
    },
    {
      bgColor: "#321313",
      person: Testimonial2,
      comment:
        "Design Alligators has been an amazing partner for our Email Marketing needs. They take the time to understand our business and audience, and their Email Marketing Campaigns have consistently exceeded our expectations.",
        designation:"- Farrah Nick, Marketing Director of ABC Company"
    },
    {
      bgColor: "#161117",
      person: Testimonial3,
      comment:
        "I've worked with several Email Marketing Companies, but none have been as effective and responsive as Professional Email Marketing Company in USA. Their team is truly dedicated to our success, and they always go above and beyond to ensure our campaigns deliver results.",
      designation: "- Jane Smith, Owner of XYZ Boutique",
    },
  ];
  return (
    <div className='service_page'>
      <Head>
        <title>
          Best Email Marketing Company | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Our Email Marketing Services will complement all of your current marketing efforts. We're an award-winning Email Marketing Company in USA."
        />
         <link
          rel="canonical"
          href="https://designalligators.com/services/email-marketing"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">

      <EmailMarketingInfo />
      <EmailProcess />
      <ProfessionalEmailMarketers />
      </div>
      <EmailServices />
      <EmailMarketingSlider />
      <Testimonial data={data}/>
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  )
}

export default index