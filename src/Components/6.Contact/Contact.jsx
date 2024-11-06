// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <motion.div
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4, type: "spring" }}
        className="paddings innerWidth contact-container"
      >
        <div className="flexColStart paddings innerWidth contact-header">
          {/* left corner */}
          <motion.h1
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
            }}
            className="contactTitle"
          >
            Contact Us
          </motion.h1>
          <form
            className="contact-form"
            action="mailto:gladysando0206@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="formGroup">
              <label htmlFor="name" hidden>
                Name
              </label>
              <input
                className="contact-name"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email" hidden>
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="message" hidden>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <input className="hover btn" type="submit" value="Submit" />
          </form>
        </div>
        {/* right corner */}
        <div className="flexCenter contact-info-image">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 5,
              type: "spring",
            }}
            className="flexColEnd paddings c-right-container"
          >
            <img
              className="contact-image"
              src="../../../public/PreventionShieldBlank.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
