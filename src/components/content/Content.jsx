import MessageList from "../messagelist";
import ButtonTweet from "../buttontweet/ButtonTweet";
import "./index.css";

const Content = () => {
  return (
    <div className="Content">
      <MessageList />
      <ButtonTweet />
    </div>
  );
};

export default Content;
