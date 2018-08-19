import { Component } from 'react'
import Router from 'next/router'
import io from 'socket.io-client'

import firebase from '../lib/firebase'
import ChatMe from '../components/ChatMe'
import ChatOthers from '../components/ChatOthers'
import ChatContainer from '../components/ChatContainer'
import Layout from '../components/Layout'

import '../assets/bundle.sass'

class Index extends Component {

  constructor (props) {
    super(props)

    this.state = {
      messages: [],

      // User
      id: null,
      name: '',
      profileImage: null,
      message: ''
    }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          id: user.uid,
          name: user.displayName,
          profileImage: user.photoURL
        })
      } else {
        Router.push('/signin')
      }
    })

    this.socket = io()
    this.socket.on('chat', user => {
      this.setState({
        messages: [...this.state.messages, user]
      }, () => {
        // When state changes, play sound
        this.audioEl.play ()
        setTimeout(() => {
          this.audioEl.currentTime = 0
          this.audioEl.pause ()
        }, 1450)
      })
    })
  }

  // Change input value
  handleChange (evt) {
    this.setState({
      message: evt.target.value
    })
  }

  // Submit messages
  handleSubmit (evt) {
    evt.preventDefault()

    // Send message if it's not empty
    if (!!this.state.message) {
      this.socket.emit('chat', {
        id: this.state.id,
        name: this.state.name,
        message: this.state.message,
        profileImage: this.state.profileImage
      })
      // Set value back to empty after send
      this.setState({
        message: ''
      })
    }
  }

  // Sign out the current user
  handleSignOut() {
    firebase.auth().signOut()
      .catch(err => console.log('Something went wrong when you were signing out. Please contact the developer for help.', err))
  }

  render () {
    return (
      <Layout signOut={this.handleSignOut.bind(this)}>

        <audio ref={(el) => this.audioEl = el}>
          <source src="../static/messaged.mp3"/>
        </audio>
        
        <ChatContainer
          message={this.state.message}
          change={this.handleChange.bind(this)}
          submit={this.handleSubmit.bind(this)}
        >
          {this.state.messages.map((user, i) => {
            if (user.id === this.state.id) {
              return (<ChatMe message={user.message} name={user.name} profileImage={user.profileImage} key={i}/>)
            }
            return (<ChatOthers message={user.message} name={user.name} profileImage={user.profileImage} key={i}/>)
          })}
        </ChatContainer>
      </Layout>
    )
  }
}

export default Index