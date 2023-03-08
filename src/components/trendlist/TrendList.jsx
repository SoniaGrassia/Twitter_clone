import "./index.css";
import TrendItem from "../trenditem";
import listTrends from "../../mock/listTrends";

const TrendList = () => {
  return (
    <div className="TrendList">
      {listTrends.map((news) => (
        <TrendItem newsData={news} />
      ))}
    </div>
  );
};

export default TrendList;
