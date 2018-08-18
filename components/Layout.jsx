import { Component } from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'

class Layout extends Component {
  
  constructor (props) {
    super (props)
  }

  componentDidUpdate() {
    // Scroll to the end of the chat log when component is updated
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
  }

  render () {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Chatingo</title>
          <link rel="stylesheet" href="/_next/static/style.css"/>
        </Head>
        <Navbar/>
        <div className="chat-container">
          {this.props.children}
          <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>
          <form onSubmit={this.props.submit} className="chat-form">
            <input type="text" autoComplete="off" value={this.props.message} onChange={this.props.change} placeholder="Where're you comin' from?"/>
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Layout