import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  //   const [userInput, setUserImput] = useState({
  //     name: "",
  //     amount: "",
  //     date: "",
  //   });
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    // setUserImput(
    //     {
    //         ...userInput,
    //         name: event.target.value
    //     }
    // )
    // setUserImput((previousState) => {
    //     return {
    //         ...previousState,
    //         name: event.target.value
    //     }
    // });
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUserImput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };

  const dateChangeGandler = (event) => {
    setInputDate(event.target.value);
    // setUserImput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costDate = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costDate);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost_control">
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost_control">
          <label>Сумма</label>
          <input
            value={inputAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost_control">
          <label>Дата</label>
          <input
            value={inputDate  }
            onChange={dateChangeGandler}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit" >Добавить Расход</button>
          <button type='button' onClick={props.OnCancel}> Отмена </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
