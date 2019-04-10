import React, { Component } from 'react';
import { connect } from "react-redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../src/redux/store";
import App, { Container } from "next/app";

class MyApp extends App {

	static async getInitialProps({ Component, ctx }) {

		// we can dispatch from here too
		// ctx.store.dispatch({ type: 'FOO', payload: 'foo' });

		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

		return { pageProps };

	}


	render() {
		const { Component, pageProps, store } = this.props;
		console.log("Component", store)
		return (
			<Container>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}

};

export default withRedux(makeStore)(MyApp);
