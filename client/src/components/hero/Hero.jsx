import React from "react";
import "./Hero.css";
import man_meal from "../../assets/man-meal.svg";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fadeIn } from "../../variants.js";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-container text-gray-600 body-font">
      <div className="hero-wrapper mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="hero-left mb-16 md:mb-0 items-center text-center">
          <motion.div
            className="md:w-full mx-auto py-1 rounded mb-5"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1 className="hero-title title-font mb-30 font-medium">
              Do you crave delicious food
            </h1>
          </motion.div>
          <motion.div
            className="md:w-full mx-auto rounded"
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="hero-fstmsg font-small">
              But going out to get <span>food costs time...</span>
            </p>
          </motion.div>
          <motion.div
            className="md:w-full mx-auto rounded"
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="heroscdmsg">
              Why not order <span>pizza</span> or something <br />
              <span> delicious </span> from our restaurant.
            </p>
          </motion.div>
          <marquee behavior="" direction="left">
            <p className="hero-desc leading-relaxed py-4">
              Our restaurant always puts the client first.
            </p>
          </marquee>
          <div className="flex justify-center gap-1 mt-3">
            <button className="hero-order-now inline-flex text-white py-2 px-6 focus:outline-none hover:bg-[#fff] hover:text-[#f00] rounded text-lg">
              Order now
            </button>
            <Link to="/foods">
              <button className="hero-available ml-4 inline-flex gap-1 text-gray-700 bg-gray-100 py-2 px-6 focus:outline-none  hover:bg-[#f00] hover:text-[#fff] rounded text-lg">
                See what's available
                <AiOutlineArrowDown className="available-btn mt-1" />
              </button>
            </Link>
          </div>
        </div>
        <div className="manmeal lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <motion.div
            className="md:w-full mx-auto py-8 rounded"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              className="object-cover object-center rounded hero-img"
              alt="hero"
              src={man_meal}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
