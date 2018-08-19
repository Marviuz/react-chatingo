import { Component } from 'react'
import Router from 'next/router'
import firebase from '../lib/firebase'
import Head from 'next/head'

import '../assets/bundle.sass'
import Layout from '../components/Layout'

class Login extends Component {

  constructor (props) {
    super (props)
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Router.push('/')
      }
    })
  }

  handleSignIn () {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  render () {
    return (
      <Layout>
        <Head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/brands.css" integrity="sha384-nT8r1Kzllf71iZl81CdFzObMsaLOhqBU1JD2+XoAALbdtWaXDOlWOZTR4v1ktjPE" crossorigin="anonymous"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css" integrity="sha384-HbmWTHay9psM8qyzEKPc8odH4DsOuzdejtnr+OFtDmOcIVnhgReQ4GZBH7uwcjf6" crossorigin="anonymous"/>
        </Head>
        <div class="sign-in-container">
          <p>Sign in with</p>
          <button onClick={this.handleSignIn} className="btn-google">
            <i class="fab fa-google"></i>
            <span>google</span>
          </button>
        </div>
      </Layout>
    )
  }
}

export default Login
