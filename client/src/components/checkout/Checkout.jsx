import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = () => {
  const { products } = useSelector((state) => state.cart);

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));
  return (
    <div className="checkoutcontainer">
      <div className="checkoutwrapper">
        <h2>Your order is successful</h2>
        <p>Expect it in 1 hour</p>
        <span>Total Price: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
