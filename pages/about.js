import React, { Component } from "react";
import { connect } from "react-redux";
import { new_posts } from "../src/redux/actions/postActions";
import Head from "next/head";
import Layout from "../src/components/Layouts/Layout";
// import console = require('console');
class about extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getInitialProps({ query }) {
    return { query };
  }
  componentDidMount() {
    // console.log("da", this.props)
    this.props.new_posts(this.props.query.name);
    console.log("props", this.props);
  }
  render() {
    return (
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Hello title</title>
          <link
            rel="stylesheet"
            type="text/css"
            href="../static/css/styles.css"
          />
          {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        </Head>
        <div>
          <h1>Hello About</h1>
        </div>
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
)(about);
