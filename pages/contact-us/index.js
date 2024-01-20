import Head from "next/head";
import React from "react";
import ContactForm from "../../components/ContactUs/ContactForm";
const index = () => {
  return (
    <div>
      <Head>
        <title>
          Contact Us | Top Digital Design Company in Brooklyn, New York
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Design Alligators is one of the Leading Brooklyn, New York Digital Agency that provides Logos, Animations, Web Development & more. Get Web Design Today."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/contact-us"
          key="canonical"
        />
      </Head>
      <ContactForm />
    </div>
  );
};

export default index;
