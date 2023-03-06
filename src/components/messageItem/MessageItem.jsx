import "./index.css";

const MessageItem = ({ messageData }) => {
  const { photo, name, email, body, reactions } = messageData;
  return (
    <div className="MessageItem">
      <img className="userPhoto" src={photo} alt="user" />
      <div className="MessageItem__content">
        <span className="userName">{name}</span>
        <em className="userEmail"> {email}</em>
        <p className="post">{body}</p>
        <div className="MessageItem__icons">
          <img
            className="comment"
            src="https://img.icons8.com/fluency-systems-regular/48/null/comments--v2.png"
            alt="comment"
          />
          <img
            className="repost"
            src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/512/external-repost-arrows-inkubators-detailed-outline-inkubators.png"
            alt="repost"
          />
          <div className="MessageItem__like">
            <img
              className="like"
              src="https://img.icons8.com/material-outlined/512/filled-like.png"
              alt="like"
            />
            <span className="num_like">{reactions}</span>
          </div>

          <img
            className="upload"
            src="https://img.icons8.com/sf-regular/512/upload.png"
            alt="upload"
          />
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
