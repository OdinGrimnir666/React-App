import Costs from "./components/Costs/Costs.js";
import NewCost from "./components/NewCost/NewCost.js";
import React, { useState } from "react";
const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 11, 25),
    description: "Mackbook",
    amount: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2021, 4, 1),
    description: "Джинсы",
    amount: 49.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prewCosts => {
      return [cost, ...prewCosts]
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
