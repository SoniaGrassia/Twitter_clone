import { useState } from "react";
import Content from "./components/content";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar/Sidebar";
import Trendbar from "./components/trendbar/Trendbar";
import ModalPutMessage from "./components/modalPutMessage/ModalPutMessage";

import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      {isVisible ? <ModalPutMessage setIsVisible={setIsVisible} /> : null}
      <Sidebar />
      <Content setIsVisible={setIsVisible} />
      <Trendbar />
      <Footer />
    </div>
  );
}

export default App;
