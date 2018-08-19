const ChatMe = (props) => (
  <div className="chat-message me">
    <div className="chat-bubble">
      <div className="chat-user">{props.name}</div>
      <p className="chat-content">{props.message}</p>
    </div>
    <div className="chat-profile">
      <img src={props.profileImage}/>
    </div>
  </div>
)

export default ChatMe
