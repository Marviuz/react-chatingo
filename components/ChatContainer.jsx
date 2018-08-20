import { Component } from 'react'

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
      <div className="chat-container">
        {this.props.children}
        <div style={{ float:"left", clear: "both" }} ref={el => this.messagesEnd = el}></div>
        <form onSubmit={this.props.submit} className="chat-form">
          <input type="text" autoComplete="off" value={this.props.message} onChange={this.props.change} placeholder="Say something..."/>
          <button type="submit">send</button>
        </form>
      </div>
    )
  }
}

export default ChatContainer