import Head from 'next/head'

import Navbar from '../components/Navbar'

const Layout = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Chatingo</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <link rel="stylesheet" href="/_next/static/style.css"/>
    </Head>

    <Navbar signOut={props.signOut}/>
    <div>
      {props.children}
    </div>
  </div>
)

export default Layout
