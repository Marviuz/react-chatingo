const ChatOthers = (props) => (
  <div className="chat-message others">
    <div className="chat-message-image">
      <img src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"/>
    </div>
    <div className="chat-message-msg">
      <div className="chat-name">
        <span>{props.name}</span>
      </div>
      <p>{props.msg}</p>
    </div>
  </div>
)

export default ChatOthers
