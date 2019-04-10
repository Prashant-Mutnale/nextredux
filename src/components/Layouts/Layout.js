import React, { PureComponent } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Header from '../Layouts/header'
import Head from 'next/head'


export default class Layout extends PureComponent {
	render() {
		return (
			<div className='layout'>
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width,initial-scale=1" />
					<meta name="renderer" content="webkit" />
					<meta name="keywords" content="Thonatos,Thonatos.Yang" />
					<meta name="description" content="Life is short, Play more?" />
				</Head>
				<Header />
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}
