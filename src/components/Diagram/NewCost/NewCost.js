import React, {useState} from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const [isFromVisisble, setIsFromVisible ] = useState(false);

  const saveCostDateHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFromVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFromVisible(true)
  }

  const cancelCostHandler = () =>{
     setIsFromVisible(false);
  }
  return (
    <div className="new-cost">
      {!isFromVisisble && <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>}
      {isFromVisisble && <CostForm onSaveCostData={saveCostDateHandler}
      OnCancel= {cancelCostHandler} />}
    </div>
  );
};

export default NewCost;
