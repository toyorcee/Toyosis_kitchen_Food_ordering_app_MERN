import React from "react";
import "./FoodDetails.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addProduct } from "../../redux/cartSlice";

const FoodDetails = () => {
  const [foodDetails, setFoodsDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);
  console.log(products);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const res = await fetch(`http://localhost:4000/product/find/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setFoodsDetails(data);
    };
    fetchFoodDetails();
  }, [id]);

  const changeQuantity = (command) => {
    if (command === "dec") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else if (command === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...foodDetails, quantity }));
  };

  return (
    <div className="fdcontainer">
      <div className="fdwrapper">
        <div className="fdleft">
          <img
            src={`http://localhost:4000/images/${foodDetails?.img}`}
            alt=""
          />
        </div>
        <div className="fdright">
          <h2 className="fdtitle">{foodDetails?.title}</h2>
          <div className="fdprice">
            Price: <span>$</span> {foodDetails?.price}
          </div>
          <div className="fdquantity">
            <button
              disabled={quantity === 1}
              onClick={() => changeQuantity("dec")}
            >
              -
            </button>
            <span className="quantityNumber">{quantity}</span>
            <button onClick={() => changeQuantity("inc")}>+</button>
          </div>
          <div className="fdcategory">
            <h3>Category: </h3>
            <span className="categoryName">{foodDetails?.category}</span>
          </div>
          <div className="fdproductDesc">
            <div>Description: </div>
            <p>
              {foodDetails?.desc?.length > 50
                ? `${foodDetails?.desc}`.slice(0, 50)
                : foodDetails?.desc}
            </p>
          </div>
          <button onClick={addToCart} className="addToCart">
            Add To Cart <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
