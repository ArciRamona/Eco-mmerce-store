// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentAngle, setCurrentAngle] = useState(0);
  const slides = [
    "/Download free image of Sick female patient with an oxygen mask by McKinsey  about oxygen mask, oxygen, asthma, person photo, and adult 2318696.jpeg",
    "/Premium Photo _ Front view doctor holding stethoscope.jpeg",
    "/Premium Photo _ Medical equipment.jpeg",
    "/Patient Receiving Oxygen Mask Stock Photo - Image of administering, ailment_ 12011092.jpeg",
  ];

  const totalSlides = slides.length;
  const anglePerSlide = 360 / totalSlides;

  const nextSlide = () => {
    setCurrentAngle((prevAngle) => prevAngle - anglePerSlide);
  };

  const prevSlide = () => {
    setCurrentAngle((prevAngle) => prevAngle + anglePerSlide);
  };

  return (
    <section className="hero-wrapper">
      <div className=" paddings innerWidth hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="blue-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Medical <br />
              Supplies
            </motion.h1>
            <div className="flexColStart hero-description">
              <br />
              <p>
                <span className="hero-descrition1">
                  Providing Medical Supplies for Better Health
                </span>{" "}
              </p>{" "}
              <br />
              <br />
              <p className="hero-descrition2">
                <span>
                  Welcome to our online store, where you can find a wide range
                  of high-quality medical supplies to meet your healthcare
                  needs.
                </span>{" "}
              </p>
            </div>
            <br />
            {/* <div className="flexCenter search-bar">
              <img
                className="location-icon"
                src="../../../public/gps.png"
                color="var (--blue)"
                alt=""
              />
              <input
                className="map-search-bar"
                type="text"
                placeholder="Search"
              ></input>
              <button className="s-bar-button">Search</button>
            </div> */}

            <br />
            <div className="flexCenter hero-stats ">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={150} end={250} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp end={15} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Partners</span>
              </div>
            </div>
          </div>
        </div>

        {/* rigth side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <div className="carousel-3d-wrapper">
              <div
                className="carousel-3d"
                style={{ transform: `rotateY(${currentAngle}deg)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="carousel-3d-slide"
                    style={{
                      transform: `rotateY(${
                        index * anglePerSlide
                      }deg) translateZ(500px)`,
                    }}
                  >
                    <img src={slide} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-3d-button left" onClick={prevSlide}>
                &#10094;
              </button>
              <button className="carousel-3d-button right" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
