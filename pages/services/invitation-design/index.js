import Head from 'next/head'
import React from 'react'
import Achievements from '../../../components/Home/Achievements'
import HomeContact from '../../../components/Home/HomeContact'
import OurClients from '../../../components/Home/OurClients'
import Testimonial from '../../../components/Home/Testimonial'
import Banner from "../../../components/Services/InvitationDesign/Banner"
import InvitationCardInfo from '../../../components/Services/InvitationDesign/InvitationCardInfo'
import InvitationProcess from '../../../components/Services/InvitationDesign/InvitationProcess'
import InvitationServices from '../../../components/Services/InvitationDesign/InvitationServices'
import InvitationPortfolio from '../../../components/Services/InvitationDesign/InvitationPortfolio'
import Testimonial1 from "../../../public/images/InvitationCard/testimonial-1.png"
import Testimonial2 from "../../../public/images/InvitationCard/testimonial-2.png"
import Testimonial3 from "../../../public/images/InvitationCard/testimonial-3.png"

const index = () => {
  const data = [
    {
      bgColor: "#000000",
      person: Testimonial1,
      comment:
      "I had a great experience working with Design Alligators for my wedding invitation cards. Their team was very professional and patient with all of my requests. The final product was beautiful and exceeded my expectations. Thank you, Design Alligators!",
      designation: "- Stephany Ian, Madlabs",
    },
    {
      bgColor: "#0d1c2b",
      person: Testimonial2,
      comment:
        "Design Alligators provided exceptional service for our business event invitations. The team was responsive and worked within our tight deadline. The quality of the invitation cards was outstanding and we received many compliments from our guests.",
        designation:"- David Lee, Owner at Floratronics"
    },
    {
      bgColor: "#2b250d",
      person: Testimonial3,
      comment:
        "I am so glad I found Design Alligators for my daughter's birthday invitations. Their team was creative, flexible and went above and beyond to bring my vision to life. The invitations turned out better than I could have imagined and my daughter loved them.",
      designation: "- Jennifer Smith, Housewife",
    },
  ];
  return (
    <div>
      <Head>
        <title>
          Invitation Card Designing Services in USA | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="We at Design Alligators can provide you with high-quality Invitation Card Designing Services for your upcoming event. With our help"
        />
         <link
          rel="canonical"
          href="https://designalligators.com/services/invitation-design"
          key="canonical"
        />
      </Head>
      <Banner />
      <div className="Logo_designers_background">
        <InvitationCardInfo />
        <InvitationProcess />
      </div>
      <InvitationServices />
      <InvitationPortfolio />
      <Testimonial data={data}/>
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  )
}

export default index