import Head from 'next/head'
import React from 'react'
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Banner from '../../../components/Services/PaidCompaign/Banner'
import GoogleSERP from '../../../components/Services/PaidCompaign/GoogleSERP'
import PPCServices from '../../../components/Services/PaidCompaign/PPCServices'
import PPCSlider from '../../../components/Services/PaidCompaign/PPCSlider'
import WhyChooseUsForPPC from '../../../components/Services/PaidCompaign/WhyChooseUsForPPC'
import PPCProcess from '../../../components/Services/PaidCompaign/PPCProcess'
import Testimonial1 from "../../../public/images/PPC/testimonial-1.png"
import Testimonial2 from "../../../public/images/PPC/testimonial-2.png"
import Testimonial3 from "../../../public/images/PPC/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "#341d00",
      person: Testimonial1,
      comment:
      "I cannot recommend Design Alligators enough for their outstanding Web Redesign Services. They transformed our outdated website into a modern and visually stunning platform that truly represents our brand!",
      designation: "- Alex Lee, Marketing Director at GreenLife",
    },
    {
      bgColor: "#000000",
      person: Testimonial2,
      comment:
        "Working with Design Alligators for our Website Redesign was a seamless and enjoyable experience. They took the time to understand our goals and vision for the website and delivered beyond our expectations.",
        designation:"- Samantha Hernandez, CEO at Spark Agency"
    },
    {
      bgColor: "#161117",
      person: Testimonial3,
      comment:
        "Design Alligators exceeded our expectations with their Web Redesign Services. They not only enhanced the website's aesthetics but also optimized its functionality and user experience.",
      designation: "- John Doe, COO at TechNation",
    },
  ];
  return (
    <div className='service_page'>
      <Head>
        <title>
          Best PPC Services in USA | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Our Google Certified experts can cut your PPC Marketing costs in half. Get Best PPC Services In USA for managing Paid Search Campaigns."
        />
         <link
          rel="canonical"
          href="https://designalligators.com/services/paid-campaigns"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <PPCServices />
        <PPCProcess />
        <GoogleSERP />
      </div>
      <WhyChooseUsForPPC />
      <PPCSlider />
      <Testimonial data={data}/>
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  )
}

export default index