import Navbar from "../navbar/Navbar";
import MessageList from "../messagelist";
import ButtonTweet from "../buttontweet/ButtonTweet";
import "./index.css";

const Content = () => {
  return (
    <div className="Content">
      <Navbar />
      <MessageList />
      <ButtonTweet />
    </div>
  );
};

export default Content;
