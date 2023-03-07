import "./index.css";
import { BiMessageDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiUpload } from "react-icons/bi";

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
          <BiMessageDetail className="comment" />
          <BiRepost className="repost" />
          <div className="MessageItem__like">
            <BiHeart className="like" />
            <span className="num_like">{reactions}</span>
          </div>

          <BiUpload className="upload" />
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
