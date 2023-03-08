import { useState, useEffect } from "react";
import MessageItem from "../messageItem/MessageItem";
// import listMessage from "../../mock/listMessage";
import "./index.css";

const MessageList = () => {
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(({ posts }) => setMessageData(posts));
    // console.log(messageData);
  }, []);

  return (
    <div className="MessageList">
      {messageData.map((message) => (
        <MessageItem messageData={message} key={message.id} />
      ))}
    </div>
  );
};

export default MessageList;
