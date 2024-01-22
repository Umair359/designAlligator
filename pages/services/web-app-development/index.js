import Head from 'next/head'
import React from 'react'
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Banner from '../../../components/Services/webAppDevelopment/Banner'
import WebAppApproach from '../../../components/Services/webAppDevelopment/WebAppApproach'
import WebAppSlider from '../../../components/Services/webAppDevelopment/WebAppSlider'
import WebDevProcess from '../../../components/Services/webAppDevelopment/WebAppDevProcess'
import WebAppDevServices from '../../../components/Services/webAppDevelopment/WebAppDevServices'
import Testimonial1 from "../../../public/images/WebAppDev/testimonial-1.png"
import Testimonial2 from "../../../public/images/WebAppDev/testimonial-2.png"
import Testimonial3 from "../../../public/images/WebAppDev/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "#50320c",
      person: Testimonial1,
      comment:
      "I am so grateful for the exceptional Web Application Development Services provided by Design Alligators. Their team was responsive, professional, and innovative in their approach to building my website. I highly recommend them!",
      designation: "- Meryl Ferguson, Owner of Xetra",
    },
    {
      bgColor: "#060059",
      person: Testimonial2,
      comment:
        "Design Alligators has been an invaluable partner in our business's success. Their Web Application Development expertise allowed us to create a unique, user-friendly platform that has helped us grow and thrive. Thank you, Design Alligators!",
        designation:"- Ron Smith, Marketing Manager at Ronalds"
    },
    {
      bgColor: "#00062b",
      person: Testimonial3,
      comment:
        "I was impressed with the speed and quality of service I received from Design Alligators. Their team was friendly, knowledgeable, and patient in guiding me through the entire Web Application Development process. I couldn't be happier with the final result.",
      designation: "- Emily Davis, CEO at Trix",
    },
  ];
  return (
    <div className='service_page'>
      <Head>
        <title>
          Professional Web Application Development Services
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators is a known Web Application Development Company for providing Professional Web Application Development Services."
        />
         <link
          rel="canonical"
          href="https://designalligators.com/services/web-app-development"
          key="canonical"
        />
      </Head>
        <Banner />
        <div className="Logo_designers_background">
            <WebAppApproach />
            <WebDevProcess />
        </div>
        <WebAppDevServices />
            <WebAppSlider />
            <Testimonial data={data}/>
            <Achievements />
            <OurClients />
            <HomeContact />
    </div>
  )
}

export default index