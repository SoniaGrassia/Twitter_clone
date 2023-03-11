import { useState, useEffect } from "react";
import "./index.css";
import { BiMessageDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiUpload } from "react-icons/bi";

const MessageItem = ({ messageData, setIsVisible, setIdMessage }) => {
  const { id, userId, body, reactions } = messageData;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const onHandleClick = () => {
    setIsVisible(true);
    setIdMessage(userData.id);
    // console.log(userData.id);
  };

  return (
    <div className="MessageItem">
      <img className="userPhoto" src={userData.image} alt={userData.username} />
      <div className="MessageItem__content">
        <span className="userName">{userData.username}</span>
        <em className="userEmail"> {userData.email}</em>
        <p className="post">{body}</p>

        <div className="MessageItem__icons">
          <BiMessageDetail className="comment" onClick={onHandleClick} />
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
