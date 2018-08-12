const ChatOthers = (props) => (
  <div className="chat-message others">
    <div className="chat-message-image">
      <img src="https://media.mnn.com/assets/images/2017/07/blue_hydrangea.jpg.653x0_q80_crop-smart.jpg"/>
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
