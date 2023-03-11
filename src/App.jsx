import { useState } from "react";
import Content from "./components/content";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar/Sidebar";
import Trendbar from "./components/trendbar/Trendbar";
import ModalPutMessage from "./components/modalPutMessage/ModalPutMessage";

import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [idMessage, setIdMessage] = useState(null);
  return (
    <div className="App">
      {isVisible ? (
        <ModalPutMessage setIsVisible={setIsVisible} idMessage={idMessage} />
      ) : null}
      <Sidebar />
      <Content setIsVisible={setIsVisible} setIdMessage={setIdMessage} />
      <Trendbar />
      <Footer />
    </div>
  );
}

export default App;
