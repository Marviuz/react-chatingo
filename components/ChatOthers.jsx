const ChatOthers = (props) => (
  <div className="chat-message others">
    <div className="chat-profile">
      <img src={props.profileImage}/>
    </div>
    <div className="chat-bubble">
      <div className="chat-user">{props.name}</div>
      {/* <iframe className="chat-yt" src="https://www.youtube.com/embed/J5ntXqQtK1E" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> */}
      <p className="chat-content">{props.message}</p>
      <div className="chat-time">{props.timeDate}</div>
    </div>
  </div>
)

export default ChatOthers
