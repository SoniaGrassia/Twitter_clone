import { useState } from "react";
import "./index.css";
import TrendList from "../trendlist/TrendList";

function Trendbar() {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputValue);
  };

  return (
    <div className="Trendbar">
      <form onSubmit={onHandleSubmit}>
        <input
          className="Trendbar__search"
          type="text"
          placeholder="Cerca su Twitter"
          value={inputValue}
          onChange={changeInputValue}
        />
        <TrendList inputValue={inputValue} />
      </form>
    </div>
  );
}
export default Trendbar;
