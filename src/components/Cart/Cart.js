import React from "react";
import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Toplam Tutar</span>
        <span>29.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Kapat</button>
        <button className={classes.button}>Sipariş Ver</button>
      </div>
    </Modal>
  );
};

export default Cart;
