import AwardsAndRecognition from "../components/Home/AwardsAndRecognition";
import Achievements from "../components/Home/Achievements";
import HomeMainSection from "../components/Home/HomeMainSection";
import HomePortfolio from "../components/Home/HomePortfolio";
import SmallInfo from "../components/Home/SmallInfo";
import OurClients from "../components/Home/OurClients";
import HomeContact from "../components/Home/HomeContact";
import Head from "next/head";
import Testimonial from "../components/Home/Testimonial";
import Blogs from '../components/Home/Blogs.js'
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useMediaQuery } from 'react-responsive';
import Packages from "../components/Home/Packages";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  console.log(isMobile)
  return (
    <div className="home_page">
      <Head>
        <title>
          Professional Digital Design Agency in USA | Design Alligators
        </title>
        <link rel="icon" href="/favicon2.png" />
        <link href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" />


        <meta
          name="description"
          content="Design Alligators is an award-winning Digital Design Agency in the USA. We offer Design, Development, Digital Marketing & Print Solutions."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/"
          key="canonical"
        />


      </Head>
      <HomeMainSection />
      <SmallInfo />
      <AwardsAndRecognition />
      {!isMobile && <HomePortfolio />}
      <Blogs />
      <Packages title="Our Packages" home={true} />
      {/* <Testimonials /> */}
      <Testimonial />
      <Achievements />
      <OurClients />
      <HomeContact />
    </div>
  );
};
export default Home;
