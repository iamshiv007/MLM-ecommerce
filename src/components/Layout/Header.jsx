import React from "react";
import "../../styles/Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import Profile from "../../assets/profile.png";

const Header = ({ setPageWidth, setNavDisplay, pageWidth, navDisplay }) => {
  const toggleNavMenuFun = () => {
    setPageWidth(pageWidth === "80%" ? "100%" : "80%");

    setNavDisplay(navDisplay === "block" ? "none" : "block");
  };

  return (
    <div>
      <header className="header">
        <div onClick={toggleNavMenuFun} className="navMenuToggle">
          <AiOutlineMenu />
        </div>
        <div className="user-info">
          <span className="username">John Doe</span>
          <img className="avatar" src={Profile} alt="User Avatar" />
        </div>
      </header>
    </div>
  );
};

export default Header;
