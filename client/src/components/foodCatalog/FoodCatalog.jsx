import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./FoodCatalog.css";
import { useEffect } from "react";
import { fadeIn } from "../../variants.js";
import { motion } from "framer-motion";

const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndpoint = location.pathname.split("/")[2];
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodType = async () => {
      const res = await fetch(
        `http://localhost:4000/product?category=${foodEndpoint}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setFilteredFoods(data);
    };
    fetchFoodType();
  }, [foodEndpoint]);

  return (
    <div className="fccontainer">
      <div className="fcwrapper">
        {filteredFoods?.length !== 0 && (
          <h2 className="fctitle">The best {foodEndpoint} in the region</h2>
        )}
        <div className="fcfoods">
          {filteredFoods.length !== 0 ? (
            filteredFoods.map((f) => (
              <Link to={`/food/${f._id}`} key={f._id} className="fcfood">
                <motion.div
                  className="md:w-full mx-auto rounded mb-32"
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="fcimgContainer">
                    <img
                      src={`http://localhost:4000/images/${f?.img}`}
                      className="foodImg"
                      alt=""
                    />
                  </div>
                </motion.div>
                <div className="fcfoodDetails">
                  <h4 className="fcfoodTitle">{f?.title}</h4>
                  <span className="fcprice">
                    <span>$</span> {f?.price}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <h1 className="fcnoQuantity">No {foodEndpoint} right now</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCatalog;
