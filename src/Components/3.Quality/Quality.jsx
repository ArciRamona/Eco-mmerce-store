// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Quality.css";
import { motion } from "framer-motion";

const Quality = () => {
  return (
    <section className="quality-wrapper">
      <div className="paddings flexCenter quality-container">
        <div className="">
          {" "}
          {/* <h3 className="quality">
            Quality <hr />
          </h3> */}
        </div>
        <div className="paddings flexCenter ">
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            className="q-description1"
          >
            Providing Reliable Medical Supplies for All Your Needs
          </motion.h1>
        </div>
        <div className="flexCenter ">
          <p className="q-description2">
            At our e-commerce website, we are committed to delivering
            high-quality medical supplies to ensure the well-being of our
            customers. With a wide range of products and a seamless shopping
            experience, we strive to be your trusted source for all your medical
            needs.
          </p>
        </div>
        <div className="q-button">
          <button className="q-button">Learn More</button>
          <button className="q-button2">Sign Up &gt; </button>
        </div>
        <div className=" flexCenter ">
          <img
            className="quality-image"
            src="../../../public/AdobeStock_259322854.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Quality;
