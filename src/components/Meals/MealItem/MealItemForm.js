import React, { useState, useRef } from "react";
import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 9
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Miktar"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 9,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Ekle +</button>
      {!amountIsValid && <p>Lütfen geçerli bir değer giriniz (1-9).</p>}
    </form>
  );
};

export default MealItemForm;
