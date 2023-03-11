import "./index.css";

const TrendItem = ({ newsData }) => {
  const { category, title, image, tweeting } = newsData;
  return (
    <div className="TrendItem">
      <p>{category}</p>
      <div className="TrendItem__content">
        <p>{title}</p>
        <img src={image} alt="" />
      </div>

      <em>{tweeting} persone stanno twittando su questo` </em>
    </div>
  );
};

export default TrendItem;

// DA COMPLETARE
