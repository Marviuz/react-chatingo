import Head from 'next/head'
import { Fragment } from 'react'

import Navbar from '../components/Navbar'

const Layout = props => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="theme-color" content="#383838"/>
      <title>Chatingo</title>
      <link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <link rel="stylesheet" href="/_next/static/style.css"/>
    </Head>

    <Navbar signOut={props.signOut}/>
    <div>
      {props.children}
    </div>
  </Fragment>
)

export default Layout
