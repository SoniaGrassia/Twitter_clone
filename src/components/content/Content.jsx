import { useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import MessageList from "../messagelist";
import ButtonTweet from "../buttontweet/ButtonTweet";
import "./index.css";

const Content = ({ setIsVisible, setIdMessage }) => {
  // Esercizio 09-03-2023 - useRef
  // Se la lunghezza dello scroll è maggiore
  // o uguale a 100 il setNavbarHidden modificherà il valore di navbarHidden a true,
  // viceversa, a false. Questo valore lo passo come props a Navbar per
  // far visualizzare o meno una porzione di Navbar.
  const contentRef = useRef(null);
  const [navbarHidden, setNavbarHidden] = useState(false);

  return (
    <div
      ref={contentRef}
      className="Content"
      onScroll={() =>
        contentRef.current.scrollTop >= 100
          ? setNavbarHidden(true)
          : setNavbarHidden(false)
      }
    >
      <Navbar hidden={navbarHidden} />
      <MessageList setIsVisible={setIsVisible} setIdMessage={setIdMessage} />
      <ButtonTweet />
    </div>
  );
};

export default Content;
