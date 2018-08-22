import Linkify from 'react-linkify'
import { getEmbedUrl } from '../lib/yt-validate'

const ChatOthers = (props) => (
  <div className="chat-message others">
    <div className="chat-profile">
      <img src={props.profileImage}/>
    </div>
    <div className="chat-bubble">
      <div className="chat-user">{props.name}</div>
      {checkYTLink(props.embed)}
      <p className="chat-content">
        <Linkify properties={{target: '_blank'}}>{props.children}</Linkify>
      </p>
      <div className="chat-time">{props.timeDate}</div>
    </div>
  </div>
)

const checkYTLink = ($) => {
  if (getEmbedUrl($)) {
    return <iframe className="chat-yt" src={getEmbedUrl($)} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
  }
}

export default ChatOthers
