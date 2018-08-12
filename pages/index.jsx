import { Component } from 'react'
import io from 'socket.io-client'

import ChatYou from '../components/ChatYou'
import ChatOthers from '../components/ChatOthers'
import Layout from '../components/Layout'

import '../assets/bundle.sass'

class Index extends Component {

  constructor (props) {
    super(props)

    this.state = {
      msg: '',
      messages: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.socket = io()
    this.socket.on('chat', msg => {
      this.setState({
        messages: this.state.messages.concat(msg)
      })
    })
  }

  // Change input data
  handleChange (evt) {
    this.setState({
      msg: evt.target.value
    })
  }

  // Submit messages
  handleSubmit (evt) {
    evt.preventDefault()

    // Send message if it's not empty
    if (!!this.state.msg) {
      this.socket.emit('chat', this.state.msg)
      this.setState({ msg: '' })
    }
  }

  render () {
    return (
      <Layout msg={this.state.msg} change={this.handleChange.bind(this)} submit={this.handleSubmit.bind(this)}>
        {this.state.messages.map((msg, i) => {
          return (
            <ChatYou msg={msg} name={'ChatYou'} key={i}/>
          )
        })}
      </Layout>
    )
  }
}

export default Index