const ChatMe = (props) => (
  <div className="chat-message me">
    <div className="chat-bubble">
      <div className="chat-user">{props.name}</div>
      <p className="chat-content">{props.message}</p>
    </div>
    <div className="chat-profile">
      <img src="https://steamusercontent-a.akamaihd.net/ugc/357276631061310293/91FEC9CB15B08560B51FBBAD68D8F12280D58D8C/"/>
    </div>
  </div>
)

export default ChatMe
