import { useEffect } from "react";
import GoTop from "../components/Layouts/GoTop";
import "../public/css/style.css";
import "../public/css/globals.css";
import "../public/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/Home.css";
import "../public/css/developmentAgency.css"
import "../public/css/aboutus.css";
import "../public/css/portfolio.css";
import "../public/css/navbar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SSRProvider } from "react-bootstrap";
import Footer from "../components/Layouts/Footer";
import "../public/css/services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import "react-whatsapp-chat-widget/index.css";
import "react-phone-number-input/style.css";
import Head from "next/head";
import "../public/css/SiteModal.css"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Layouts/NavBar"),
  { ssr: false }
);
const DynamicWhatsappWidgetWithNoSSR = dynamic(
  () => import("react-whatsapp-chat-widget"),
  { ssr: false }
);
const HotjarScript = () => {
  const script = `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3392446,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    import("bootstrap");
  }, []);
  // Your custom layout and behavior here
  return (
    <div style={{ width: "100vw", maxWidth: "100%" }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <Head>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <meta name="googlebot" content="index" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="xY_UltYbfvFr1ulKXK46fi4R--AWfyko1hbNfvnreQU" />
        <HotjarScript />
      </Head>
      <SSRProvider>
        <DynamicComponentWithNoSSR />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
      <GoTop scrollStepInPx="50" delayInMs="16.66" />
      <DynamicWhatsappWidgetWithNoSSR
        phoneNo="+19173101802"
        position="right"
        widgetWidth="370px"
        widgetWidthMobile="260px"
        autoOpen={true}
        autoOpenTimer={5000}
        // messageBox={true}
        // iconSize="40"
        // iconColor="white"
        // iconBgColor="tomato"
        // headerIcon="https://www.pdapps.net.in/_next/static/media/android-chrome-192x192.9a39c2c7.png"
        // headerIconColor="pink"
        // headerTxtColor="black"
        headerBgColor="#2db742"
        headerTitle="Design Alligators"
        // headerCaption="Online"
        bodyBgColor="#f6faf6"
        chatPersonName="Design Alligators"
        // chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
        footerBgColor="#f6faf6"
        // placeholder="Type a message.."
        btnBgColor="#2db742"
        // btnTxt="Start Chat"
        // btnTxtColor="black"
      />
    </div>
  );
}

export default MyApp;
