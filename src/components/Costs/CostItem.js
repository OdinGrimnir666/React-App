import "./CostItem.css";
import CostDate from "./CostDate.js";
import Card from "../UI/Card";

const CostItem = (props) => { 
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cos t-item__price">${props.amount} </div>
      </div> 
    </Card>
  );
};

export default CostItem;
