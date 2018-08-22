import { Component } from 'react'
import Router from 'next/router'
import io from 'socket.io-client'
import moment from 'moment'

import firebase from '../lib/firebase'
import { getEmbedUrl } from '../lib/yt-validate'

import ChatBubble from '../components/ChatBubble'
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
      message: '',
      file: null
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
        if (user.id !== this.state.id && !document.hasFocus()) {
          this.audioEl.play ()
          setTimeout(() => {
            this.audioEl.currentTime = 0
            this.audioEl.pause ()
          }, 1450)
        }
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
        profileImage: this.state.profileImage,
        timeDate: moment().format('h:mm A MMM D, YYYY')
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
      .catch(err => console.error('Something went wrong when you were signing out. Please contact the developer for help.', err))
  }

  setFiles (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      if (file.type.indexOf('image/') > -1) {
        
        const fileReader = new FileReader()
        fileReader.onload = (evt) => {
          this.socket.emit('chat', {
            id: this.state.id,
            name: this.state.name,
            file: evt.target.result,
            profileImage: this.state.profileImage,
            timeDate: moment().format('h:mm A MMM D, YYYY')
          })
        }
        fileReader.readAsDataURL(file)
        break;
      }
    }
  }

  render () {
    return (
      <Layout signOut={this.handleSignOut.bind(this)}>

        <audio ref={el => this.audioEl = el}>
          <source src="../static/messaged.mp3"/>
        </audio>

        <ChatContainer
          message={this.state.message}
          change={this.handleChange.bind(this)}
          submit={this.handleSubmit.bind(this)}
          setFiles={this.setFiles.bind(this)}
        >
          {this.state.messages.map((user, i) => (
            <ChatBubble
              isUser={user.id === this.state.id}
              key={i}
              name={user.name}
              profileImage={user.profileImage}
              timeDate={user.timeDate}
              file={user.file}
              embed={getEmbedUrl(user.message)}
            >{user.message}</ChatBubble>
          ))}
        </ChatContainer>
      </Layout>
    )
  }
}

export default Index