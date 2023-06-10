import type { NextPage } from "next";
import Head from "next/head";

import { Button } from "@the-repo/ui/components/button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>Select a file</Button>
    </>
  );
};

export default Home;
