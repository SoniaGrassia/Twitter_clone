import { useRef } from "react";
import Navbar from "../navbar/Navbar";
import MessageList from "../messagelist";
import ButtonTweet from "../buttontweet/ButtonTweet";
import "./index.css";

const Content = () => {
  // Esercizio 09-03-2023 - useRef
  // Se la lunghezza dello scroll è maggiore
  // o uguale a 1 il background di Content diventa rosso,
  // viceversa, diventa bianco
  const contentRef = useRef(null);

  return (
    <div
      ref={contentRef}
      className="Content"
      onScroll={() =>
        contentRef.current.scrollTop >= 1
          ? (contentRef.current.style.backgroundColor = "red")
          : (contentRef.current.style.backgroundColor = "white")
      }
    >
      <Navbar />
      <MessageList />
      <ButtonTweet />
    </div>
  );
};

export default Content;
