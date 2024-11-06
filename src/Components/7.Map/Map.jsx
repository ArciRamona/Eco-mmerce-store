// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Map.css";

const MapPS = () => {
  return (
    <section className="map-wrapper">
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1203.3064104739951!2d39.1782550344109!3d21.52711105588929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cf59121e2867%3A0x4a1dc469e911f1e0!2z2LfZgdmI2YTYqtmKINin2LfZgdin2YTZig!5e0!3m2!1sen!2ssa!4v1729081790206!5m2!1sen!2ssa"
          width="1450"
          height="650"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Responsive Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default MapPS;
