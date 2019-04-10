import React, { Component } from "react";
import Layout from "../src/components/Layouts/Layout";
import HomePage from "../src/components/homepage";
import Head from "next/head";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Tag me too</title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="../static/css/styles.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
          />
          {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        </Head>
        <HomePage />
      </Layout>
    );
  }
}
