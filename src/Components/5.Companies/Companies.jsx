// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Companies.css";
import { motion } from "framer-motion";

const Companies = () => {
  return (
    <section className="companies-wrapper">
      <div className="flexColStart innerWidth">
        <div className="paddings  companies-wrapper">
          <div className="paddings innerWidth flexColStart Our-partners">
            Our Partners <hr className="hr3" />
          </div>
          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="paddings flexCenter c-partnership"
          >
            <h2 className="flexColStart service-title">
              Takes pride in its collaborations
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 5, type: "spring" }}
            className="paddings innerwidth flexCenter companies-container"
          >
            <div className="card-companies">
              <img src="/Green Simple Medical Logo/1.png" alt="" />{" "}
            </div>
            <div className="card-companies">
              {" "}
              <img src="/Green Simple Medical Logo/2.png" alt="" />{" "}
            </div>
            <div className="card-companies">
              {" "}
              <img src="/Green Simple Medical Logo/3.png" alt="" />{" "}
            </div>
            <div className="card-companies">
              {" "}
              <img src="/Green Simple Medical Logo/4.png" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
