import "./index.css";
import TrendItem from "../trenditem";
import listTrends from "../../mock/listTrends";

const TrendList = ({ inputValue }) => {
  const filteredTrends = () =>
    listTrends.filter((trend) => trend.title.includes(inputValue));

  return (
    <div className="TrendList">
      {filteredTrends().map((news) => (
        <TrendItem newsData={news} key={news.id} />
      ))}
    </div>
  );
};

export default TrendList;
