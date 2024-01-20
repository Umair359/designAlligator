import Head from 'next/head'
import React from 'react'
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Banner from '../../../components/Services/ecommerceSolution/Banner'
import EasyPayment from '../../../components/Services/ecommerceSolution/EasyPayment'
import EcommerceInfo from '../../../components/Services/ecommerceSolution/EcommerceInfo'
import EcommerceSlider from '../../../components/Services/ecommerceSolution/EcommerceSlider'
import WhyChooseForEcommerce from '../../../components/Services/ecommerceSolution/WhyChooseForEcommerce'
import EcommerceProcess from '../../../components/Services/ecommerceSolution/EcommerceProcess'
import Testimonial1 from "../../../public/images/EcommerceSolution/testimonial-1.png";
import Testimonial2 from "../../../public/images/EcommerceSolution/testimonial-2.png";
import Testimonial3 from "../../../public/images/EcommerceSolution/testimonial-3.png";
const index = () => {
  const data = [
    {
      bgColor: "linear-gradient(to right,#8CACAC,#AF8C9D)",
      person: Testimonial1,
      comment:
      "I am so grateful to Design Alligators for creating an amazing eCommerce website for my business! The team took the time to understand my vision and turned it into a reality. Their attention to detail and professionalism was top-notch.",
      designation: "- Sarah Smith, owner of Sarah's Boutique",
    },
    {
      bgColor: "linear-gradient(to right,#04619F,#000000)",
      person: Testimonial2,
      comment:
        "I was blown away by the incredible eCommerce Development Services provided by Design Alligators. The team was easy to work with, communicated clearly throughout the entire process, and delivered a website that exceeded my expectations",
      designation: "- John Doe, owner of Doe's Electronics",
    },
    {
      bgColor: "#ff6d1a",
      person: Testimonial3,
      comment:
        "Design Alligators is hands down the best eCommerce Development Agency out there! Their team of experts went above and beyond to ensure that my website was functional and visually stunning",
      designation: "- Emily Jones, owner of Emily's Art Gallery",
    },
  ];
  return (
    <div className='service_page'>
      <Head>
        <title>
        Ecommerce Development Services in USA | Design Alligators 
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Get your custom ecommerce store developed from best ecommerce website development agency."
        />
         <link
          rel="canonical"
          href="https://designalligators.com/services/ecommerce-solution"
          key="canonical"
        />
      </Head>
        <Banner />
        <div className="Logo_designers_background">
        <EcommerceInfo />
        <EcommerceProcess />
        <EasyPayment />
        </div>          
        <WhyChooseForEcommerce />
        <EcommerceSlider />
        <Testimonial data={data}/>
        <Achievements />
        <OurClients />
        <HomeContact />
    </div>
  )
}

export default index