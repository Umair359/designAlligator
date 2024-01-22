import Head from "next/head";
import React from "react";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";

const index = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Design Alligators</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="This page is used to inform website visitors regarding our policies regarding the collection, use, and disclosure of Personal Information if anyone decided to use our Services."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/privacy-policy"
          key="canonical"
        />
      </Head>
      <PrivacyPolicy />
    </div>
  );
};

export default index;
