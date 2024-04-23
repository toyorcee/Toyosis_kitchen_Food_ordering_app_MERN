import React from "react";
import { foodTypes } from "../../data/data";
import { Link } from "react-router-dom";
import "./Foods.css";
import { fadeIn } from "../../variants.js";
import { motion } from "framer-motion";

const Foods = () => {
  return (
    <section id="foods" className="foodscontainer">
      <div className="foodswrapper">
        <h4 className="foodssubtitle">What we sell</h4>
        <h2 className="foodstitle">Best meals in the city</h2>
        <div className="foods">
          {foodTypes.map((foodType) => (
            <Link
              to={`/foods/${foodType.name}`}
              key={foodType.id}
              className="food"
            >
              <h4>{foodType.name}</h4>
              <div className="foodsimgContainer">
                <motion.div
                  className="md:w-full mx-auto py-8 rounded mb-32"
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <img src={foodType.img} alt="" />
                </motion.div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foods;
