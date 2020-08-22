import { DokzProvider, GithubLink, ColorModeSwitch } from "dokz";
import React, { Fragment } from "react";
import Head from "next/head";
import "../styles.css";

const order = {
  "index.mdx": true,
  "why.mdx": true,
  "intro.mdx": true,
  "getting-started.mdx": true,
  changelog: true, // use false to exclude directories and files
  guidelines: true, // you can omit the mdx extension
  components: true,
  playbook: {
    "tools-we-use.mdx": true,
    "how-we-work.mdx": true,
    "resources.mdx": true,
  },
  samplefolder: {
    page1: true,
    page2: true,
    page3: true,
    subfolder: {
      page3: true,
      page4: true,
    },
  },
  // paths not present will be put at the end
};

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Code"
          rel="stylesheet"
          key="google-font-Fira"
        />
      </Head>
      <DokzProvider
        headerItems={[
          <GithubLink key="0" url="https://github.com/remorses/dokz" />,
          <ColorModeSwitch key="1" />,
        ]}
        sidebarOrdering={order}
      >
        <Component {...pageProps} />
      </DokzProvider>
    </div>
  );
}
