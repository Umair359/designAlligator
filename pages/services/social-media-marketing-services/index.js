import Head from 'next/head'
import React from 'react'
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Banner from '../../../components/Services/SocialMediaMarketing/Banner'
import InnovativeContentCreation from '../../../components/Services/SocialMediaMarketing/InnovativeContentCreation'
import MediaSlider from '../../../components/Services/SocialMediaMarketing/MediaSlider'
import OurCompanyInfo from '../../../components/Services/SocialMediaMarketing/OurCompanyInfo'
import SSMProcess from '../../../components/Services/SocialMediaMarketing/SSMProcess'
import SSMServices from '../../../components/Services/SocialMediaMarketing/SSMServices'
import Testimonial1 from "../../../public/images/SSM/testimonial-1.png";
import Testimonial2 from "../../../public/images/SSM/testimonial-2.png";
import Testimonial3 from "../../../public/images/SSM/testimonial-3.png";

const index = () => {
  const data = [
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I highly recommend Design Alligators' Social Media Marketing Services to anyone looking to expand their business online. Their team is professional, creative, and always updated with social media trends.",
      designation: "- Mario Fernandez,  Senior Marketer at JC",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "Design Alligators' SMM Agency is hands down the best in the business. Their team is knowledgeable, efficient, and genuinely cares about helping our business grow. We've worked with other social media agencies but they are the best.",
      designation: "- John Smith, Owner at Farlow Smiths",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "As the founder of a small business, I was hesitant to invest in Social Media Marketing Services. But after working with Design Alligators, I can confidently say that it was the best decision I ever made for my business.",
      designation: "- Maria Martinez, Owner at CC Cometics",
    },
    {
      bgColor: "white",
      person: Testimonial1,
      comment:
        "I highly recommend Design Alligators' Social Media Marketing Services to anyone looking to expand their business online. Their team is professional, creative, and always updated with social media trends.",
      designation: "- Mario Fernandez,  Senior Marketer at JC",
    },
    {
      bgColor: "white",
      person: Testimonial2,
      comment:
        "Design Alligators' SMM Agency is hands down the best in the business. Their team is knowledgeable, efficient, and genuinely cares about helping our business grow. We've worked with other social media agencies but they are the best.",
      designation: "- John Smith, Owner at Farlow Smiths",
    },
    {
      bgColor: "white",
      person: Testimonial3,
      comment:
        "As the founder of a small business, I was hesitant to invest in Social Media Marketing Services. But after working with Design Alligators, I can confidently say that it was the best decision I ever made for my business.",
      designation: "- Maria Martinez, Owner at CC Cometics",
    },
  ];
  return (
    <div className='service_page'>
      <Head>
        <title>
          Social Media Marketing Services in USA | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Our Social Media Marketing Experts can create the best plan for you. Get Professional Social Media Marketing Services in affordable prices."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/services/social-media-marketing-services"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">

        <OurCompanyInfo />
        <InnovativeContentCreation />
        <SSMProcess />
      </div>
      <SSMServices />
      <MediaSlider />
      <Testimonial data={data} />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  )
}

export default index