const ChatOthers = (props) => (
  <div className="chat-message others">
    <div className="chat-profile">
      <img src={props.profileImage}/>
    </div>
    <div className="chat-bubble">
      <div className="chat-user">{props.name}</div>
      <p className="chat-content">{props.message}</p>
      <div className="chat-time">{props.timeDate}</div>
    </div>
  </div>
)

export default ChatOthers
