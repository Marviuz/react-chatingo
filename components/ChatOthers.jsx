const ChatOthers = (props) => (
  <div className="chat-message others">
    <div className="chat-profile">
      <img src="https://i.imgur.com/oW1dGDI.jpg"/>
    </div>
    <div className="chat-bubble">
      <div className="chat-user">{props.name}</div>
      <p className="chat-content">{props.message}</p>
    </div>
  </div>
)

export default ChatOthers
