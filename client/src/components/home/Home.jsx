import React from "react";
import "./Home.css";
import Hero from "../hero/Hero";
import illustration1 from "../../assets/scooter-guy.svg";
import illustration2 from "../../assets/delivery-location.svg";
import illustration3 from "../../assets/pizza-delivery.svg";
import Foods from "../foods/Foods";
import Newsletter from "../newsletter/Newsletter";
import { fadeIn } from "../../variants.js";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div classNameNameName="home-container">
      <div classNameNameName="wrapper">
        <Hero />
        <div className="team text-gray-400 bg-gray-900 body-font">
          <div className="homecontainer px-5 py-24">
            <div className="delivery-infos flex flex-wrap -m-4">
              <div class="home-title flex flex-col text-center w-full gap-5">
                <span className="deliverySubtitle">Delivery</span>
                <h2 class="text-3xl deliveryTitle title-font mb-4 text-[#fff]">
                  Always on time for you
                </h2>
              </div>
              <div className="p-4 md:w-1/3">
                <motion.div
                  className="md:w-full mx-auto py-8 rounded"
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden delivery-info">
                    <img
                      className="lg:h-48 md:h-36 w-full object-contain object-center"
                      src={illustration1}
                      alt=""
                    />
                    <h3>Our delivery guy is always on time</h3>
                  </div>
                </motion.div>
              </div>
              <div className="p-4 md:w-1/3">
                <motion.div
                  className="md:w-full mx-auto py-8 rounded"
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden delivery-info">
                    <img
                      className="lg:h-48 md:h-36 w-full object-contain object-center"
                      src={illustration2}
                      alt=""
                    />
                    <h3>He works very hard</h3>
                  </div>
                </motion.div>
              </div>
              <div className="p-4 md:w-1/3">
                <motion.div
                  className="md:w-full mx-auto py-8 rounded"
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden delivery-info">
                    <img
                      className="lg:h-48 md:h-36 w-full object-contain object-center"
                      src={illustration3}
                      alt=""
                    />
                    <h3>He is friendly and social</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Foods />
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
