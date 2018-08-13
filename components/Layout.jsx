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
        <Navbar />
        <div className="chat">
          <div>
            <div className="chat-log-container">
              {this.props.children}
              {/* Scroll to end reference div */}
              <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>
            </div>
          </div>
          <form onSubmit={this.props.submit} className="chat-container mt-auto">
            <div>
              <div>
                <input type="text" autoComplete="off" value={this.props.name} onChange={this.props.nameChange} placeholder="Username?"/>
              </div>
              <div>
                <input type="text" autoComplete="off" value={this.props.msg} onChange={this.props.change} placeholder="Say something..."/>
              </div>
              <button type="submit">send</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Layout