import MessageItem from "../messageItem/MessageItem";
import listMessage from "../../mock/listMessage";
import "./index.css";

const MessageList = () => {
  return (
    <div className="MessageList">
      {listMessage.map((data) => (
        <MessageItem messageData={data} key={data.id} />
      ))}
    </div>
  );
};

export default MessageList;
