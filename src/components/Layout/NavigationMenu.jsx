import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/NavigationMenu.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FaUserShield, FaCoins } from "react-icons/fa";
import { BsCashCoin, BsGraphUp } from "react-icons/bs";
import { ImFolderUpload } from "react-icons/im";

const NavigationMenu = () => {
  return (
    <Fragment>
      <nav className="navigation-menu">
        <div>
          <p className="companyName">MLM Ecommerce</p>
        </div>
        <ul className="menu-items">
          <li>
            <NavLink to="/">
              <span>
                <LuLayoutDashboard />
              </span>{" "}
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/users">
              <span>
                <FiUsers />
              </span>{" "}
              App Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/userCoins">
              <span>
                <FiUsers />
              </span>{" "}
              User Coins
            </NavLink>
          </li>
          <li>
            <NavLink to="/geniusCoinRate">
              <span>
                <BsCashCoin />
              </span>
              Genius Coin Rate
            </NavLink>
          </li>
          <li>
            <NavLink to="/totalSellCoin">
              <span>
                <FaCoins />
              </span>{" "}
              Total Sell Coin
            </NavLink>
          </li>
          <li>
            <NavLink to="/registeredUsers">
              <span>
                <FaUserShield />
              </span>{" "}
              Total Registered Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/check-daily-genius-coin-rate">
              <span>
                <BsGraphUp />
              </span>
              Check Daily Genius Coin Rate
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload-banners">
              <span>
                <ImFolderUpload />
              </span>{" "}
              Upload Banners
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavigationMenu;
