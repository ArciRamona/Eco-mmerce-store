// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

// import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="header-Wrapper">
      <div className="flexCenter paddings innerWidth header-container">
        <img
          className="PS-logo"
          src="/Green Simple Medical Logo.png"
          alt="logo"
          width={150}
        />
        <OutsideClickHandler
          OutsideClickHandler={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter header-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Mission</a>
            <a href="">Product</a>
            <a href="">Contact Us</a>
            <button className="header-button">
              <a href="">Shop</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
