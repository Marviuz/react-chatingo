import { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import firebase from '../lib/firebase'

class Login extends Component {

  constructor (props) {
    super (props)

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
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

  handleSignOut () {
    firebase.auth().signOut()
      .catch(err => console.log('Something went wrong when you were signing out. Please Contact the developer.', err))
  }

  render () {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Chatingo - Login</title>
        </Head>
        <div>
          <input type="text"/>
          <button onClick={this.handleSignIn}>sign in with google</button>
          <button onClick={this.handleSignOut}>sign out</button>
          <p>This is the login page. To go to the chat room, please click <Link href="/"><a>this link</a></Link></p>
        </div>
      </div>
    )
  }
}

export default Login
