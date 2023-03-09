import { useState } from "react";
import "./index.css";
import TrendList from "../trendlist/TrendList";

function Trendbar() {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <div className="Trendbar">
      <input
        className="Trendbar__search"
        type="text"
        placeholder="Cerca su Twitter"
        value={inputValue}
        onChange={changeInputValue}
      />
      <TrendList inputValue={inputValue} />
    </div>
  );
}
export default Trendbar;
