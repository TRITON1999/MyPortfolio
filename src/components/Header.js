import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [rub, setRub] = useState("header__logo-sub");
  const [hamMenuBtn, seThamMenuBtn] = useState("header__main-ham-menu-cont");
  const [smallMenu, setSmallMenu] = useState("header__sm-menu");
  const [headerHamMenuBtn, setHeaderHamMenuBtn] = useState(
    "header__main-ham-menu"
  );
  const [headerHamMenuCloseBtn, setHeaderHamMenuCloseBtn] = useState(
    "header__main-ham-menu-close"
  );
  const [headerSmallMenuLinks, setHeaderSmallMenuLinks] = useState(
    "header__sm-menu-link"
  );
  const deactivateSmallMenu = () => {
    setSmallMenu("header__sm-menu");
    setHeaderHamMenuBtn("header__main-ham-menu");
    setHeaderHamMenuCloseBtn("header__main-ham-menu-close  d-none");
  };
  const me = require("./me.jpg");
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={me}
              alt="Akshat's Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className={rub}>Akshat Tripathi</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./" className="header__link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link">
                About{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link">
                {" "}
                Projects{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
          <div
            className={hamMenuBtn}
            onClick={() => {
              if (smallMenu === "header__sm-menu header__sm-menu--active") {
                setSmallMenu("header__sm-menu");
              } else setSmallMenu("header__sm-menu header__sm-menu--active");
              if (headerHamMenuBtn === "header__main-ham-menu d-none") {
                setHeaderHamMenuBtn("header__main-ham-menu");
                setHeaderHamMenuCloseBtn("header__main-ham-menu-close d-none");
              } else {
                setHeaderHamMenuBtn("header__main-ham-menu d-none");
                setHeaderHamMenuCloseBtn("header__main-ham-menu-close");
              }
            }}
          >
            <img
              src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className={headerHamMenuBtn}
            />
            {/* <img
              src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={headerHamMenuCloseBtn}
            /> */}
          </div>
        </div>
      </div>
      <div className={smallMenu}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className={headerSmallMenuLinks} onClick={deactivateSmallMenu}>
              <a href="./"> Home </a>
            </li>

            <li className={headerSmallMenuLinks} onClick={deactivateSmallMenu}>
              <a href="./#about"> About </a>
            </li>

            <li className={headerSmallMenuLinks} onClick={deactivateSmallMenu}>
              <a href="./#projects"> Projects </a>
            </li>

            <li className={headerSmallMenuLinks} onClick={deactivateSmallMenu}>
              <a href="./#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
