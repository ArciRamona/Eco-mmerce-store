// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import "./Services.css";
import { sliderSettings } from "../../common";
import { motion } from "framer-motion";
function Services() {
  return (
    <section className="services-wrapper">
      <div className="paddings services-container">
        {/* left corner */}
        <div className="flexColStart services-rightSection">
          <div className="paddings innerWidth services-right-container">
            <div className="flexColStart RS-head">
              <span className="blueText our-services">Our Services</span>
              <hr className="hr-line2" />

              <div className="services-title">
                <motion.h2
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, type: "spring" }}
                >
                  Prevention Shield is a Comprehensive Product Range and Service
                  Provider{" "}
                </motion.h2>
              </div>
            </div>

            {/* right corner */}

            <div className="service-right">
              <div className="service-right-container">
                <div className="paddings flexColEnd">
                  <motion.p
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 4, type: "spring" }}
                    className="services-description"
                  >
                    Ensures the availability of high-quality, certified medical
                    supplies from trusted manufacturers. Offers a variety of
                    medical products including personal protective equipment
                    (PPE), surgical tools, diagnostic devices, wound care
                    products, infection control supplies, and more. Delivers
                    medical supplies directly to homes for patients requiring
                    ongoing care, such as oxygen therapy, mobility aids, or
                    diabetic supplies.
                  </motion.p>
                </div>
              </div>
            </div>

            <div className="paddings innerWidth service-containerSwiper">
              <motion.div
                initial={{ x: "7rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
              >
                <Swiper {...sliderSettings}>
                  <SliderButtons />
                  {data.map((card, i) => (
                    <SwiperSlide key={i}>
                      <div className="flexColStart service-card">
                        <img src={card.image} alt="service" />

                        <span className="primaryText s-card-name">
                          {card.name}
                        </span>
                        <br />
                        <span className="secondaryText">{card.detail}</span>

                        <span></span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter service-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
