import React from "react";
import Head from "next/head";
import GetAQuoteForm from "../../components/GetAQuote/GetAQuoteForm";

const index = () => {
  return (
    <div>
      <Head>
        <title>Get A Quote | Design Alligators</title>
        <link rel="icon" href="/favicon2.png" />
        <meta
          name="description"
          content="Choose from our existing packages or provide us the scope of work and get a custom quote for your project."
        />
        <link
          rel="canonical"
          href="https://designalligators.com/get-a-quote"
          key="canonical"
        />
      </Head>

      <GetAQuoteForm />
    </div>
  );
};

export default index;
