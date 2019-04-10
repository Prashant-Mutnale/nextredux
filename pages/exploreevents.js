import React, { Component } from "react";
import { connect } from "react-redux";
import { new_posts } from "../src/redux/actions/postActions";
import Head from "next/head";
import Layout from "../src/components/Layouts/Layout";
import fetch from "isomorphic-unfetch";
import Events from "../src/components/events";
// import console = require('console');
class ExploreEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getInitialProps({ query }) {
    return { query };
  }
  async componentDidMount() {
    console.log("da", this.props);
    this.props.new_posts(this.props.query.name);
    console.log("props", this.props);
  }
  render() {
    return (
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Explore Events</title>
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
        <Events />
      </Layout>
    );
  }
}
function mapStateToProps(state) {
  console.log("state", state);
  return {
    recentdata: state
  };
}

export default connect(
  mapStateToProps,
  { new_posts }
)(ExploreEvents);
