import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "isomorphic-unfetch";
import Router from "next/router";
import clientCredentials from "../../../credentials/client";
import { connect } from "react-redux";
import { new_posts } from "../../redux/actions/postActions";
const exploreEvents = () => {
  Router.push({
    pathname: "/exploreevents",
    query: { name: "Zeit", mark: 636636366 }
  });
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.storeData = this.storeData.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  storeData(data) {
    console.log("data", data);
  }
  async componentDidMount() {
    // firebase.initializeApp(clientCredentials);
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials);
    }
    this.props.new_posts();

    // if (this.state.user) this.addDbListener();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user });
        return user
          .getIdToken()
          .then(token => {
            // eslint-disable-next-line no-undef
            return fetch("/api/login", {
              method: "POST",
              // eslint-disable-next-line no-undef
              headers: new Headers({ "Content-Type": "application/json" }),
              credentials: "same-origin",
              body: JSON.stringify({ token })
            });
          })
          .then(res => this.storeData(res));
        //  .then(res => this.addDbListener());
        // .then(res => {
        //   console.log("res", res);
        // })
      } else {
        this.setState({ user: null });
        // eslint-disable-next-line no-undef
        fetch("/api/logout", {
          method: "POST",
          credentials: "same-origin"
        }).then(() => this.removeDbListener());
      }
    });
  }
  handleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    firebase.auth().signInWithPopup(provider);
  }
  removeDbListener() {
    // firebase.database().ref('messages').off()
    if (this.state.unsubscribe) {
      this.state.unsubscribe();
    }
  }
  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("successfully signed out");
      })
      .catch(function(error) {
        // An error happened.
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>

        <a onClick={exploreEvents}>Explore Events</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    recentdata: state
  };
}

export default connect(
  mapStateToProps,
  { new_posts }
)(Header);
