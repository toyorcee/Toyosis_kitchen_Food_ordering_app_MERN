import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeProduct } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));

  const handleRemoveProduct = (id) => {
    console.log(id);
    dispatch(removeProduct({ _id: id }));
  };

  const handleOrder = () => {
    if (products.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <div className="cartcontainer">
      <div className="cartwrapper pt-20">
        <div className="cartleft flex">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="cartproduct">
                <div
                  onClick={() => handleRemoveProduct(product._id)}
                  className="cartcloseBtn"
                >
                  <AiOutlineClose />
                </div>
                <img
                  src={`http://localhost:4000/images/${product.img}`}
                  className="cartimg"
                  alt=""
                />
                <div className="cartproductData">
                  <h3 className="carttitle">{product.title}</h3>
                  <div className="cartproductAndQuantity">
                    <span className="cartquantity">{product.quantity} x </span>
                    <span className="cartprice">
                      <span>$</span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="nocartproducts">
              No products in the cart. Go shopping!
            </h1>
          )}
        </div>
        <div className="cartright">
          <div className="carttotalProductMsg">
            Total products: {products.length}
          </div>
          <div className="cartsubtotalCheckoutBtns">
            <span className="cartsubtotal">Subtotal: ${totalPrice}</span>
            <span
              onClick={handleOrder}
              disabled={products.length === 0}
              className="cartorderNowBtn"
            >
              Order now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
