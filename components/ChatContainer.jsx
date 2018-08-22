import { Component } from 'react'

import Dropzone from 'react-dropzone'

class ChatContainer extends Component {
  constructor (props) {
    super (props)
  }

  componentDidUpdate() {
    // Scroll to the end of the chat log when component is updated
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
  }

  render () {
    return (
      <Dropzone disableClick className="chat-container" onDrop={this.props.setFiles}>

        {this.props.children}

        <div style={{ float:"left", clear: "both" }} ref={el => this.messagesEnd = el}></div>
        <form onSubmit={this.props.submit} className="chat-form">
          <input autoFocus type="text" autoComplete="off" value={this.props.message} onChange={this.props.change} placeholder="Say something..."/>
          <button type="submit">
            <i className="material-icons">send</i>
          </button>
        </form>
      </Dropzone>
    )
  }
}

export default ChatContainer