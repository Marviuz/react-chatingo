import Linkify from 'react-linkify'

export default (props) => {
  if (props.isUser) {
    return (
      <div className="chat-message me">
        <div className="chat-bubble">
          <div className="chat-user">{props.name}</div>
          {props.file &&
            <div className="chat-img-upload">
              <img src={props.file}/>
            </div>
          }
          {props.embed &&
            <iframe className="chat-yt" src={props.embed} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          }
          {props.children &&
            <p className="chat-content">
              <Linkify properties={{target: '_blank'}}>{props.children}</Linkify>
            </p>
          }
          <div className="chat-time">{props.timeDate}</div>
        </div>
        <div className="chat-profile">
          <img src={props.profileImage}/>
        </div>
      </div>
    )
  }
  return (
    <div className="chat-message others">
      <div className="chat-profile">
        <img src={props.profileImage}/>
      </div>
      <div className="chat-bubble">
        <div className="chat-user">{props.name}</div>
        {props.embed &&
          <iframe className="chat-yt" src={props.embed} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        }
        <p className="chat-content">
          <Linkify properties={{target: '_blank'}}>{props.children}</Linkify>
        </p>
        <div className="chat-time">{props.timeDate}</div>
      </div>
    </div>
  )
}
