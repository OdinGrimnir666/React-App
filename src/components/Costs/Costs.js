  import Card from "../UI/Card";
import "./Costs.css";
import CostList from "./CostList";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostsDiagram from "./CostsDiagram";
  
const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() == selectedYear;
  });

  

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs = {filteredCosts}/>
      </Card>
    </div>
  );
};

export default Costs;