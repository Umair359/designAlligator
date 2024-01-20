import Head from "next/head";
import React from "react";

import OurWork from "../../components/Portfolio/OurWork";

const index = () => {
  return (
    <div>
      <Head>
        <title>
          Explore Our Work
        </title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Are you Looking for Best Logo Design or Website Design for your Business? Wait No More, Hire the Best Logo Designers & Web Designers"
        />
        <link
          rel="canonical"
          href="https://designalligators.com/portfolios"
          key="canonical"
        />
      </Head>
      <OurWork />
    </div>
  );
};

export default index;
