// import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar/Sidebar";
import Trendbar from "./components/trendbar/Trendbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Sidebar />
      <Content />
      <Trendbar />
      <Footer />
    </div>
  );
}

export default App;
