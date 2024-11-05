import React from "react";
import { ReactComponent as PinterestLogo } from "../../assets/pinterest-svgrepo-com.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-items">
        <div className="logo-container">
          <div className="logo">
            <PinterestLogo />
          </div>
        </div>
        <div className="option inverted">
          <span>Home
          </span>
        </div>
        <div className="option">Create</div>
        <div className="search-box">
          <SearchIcon className="search-icon" />
          <input type="text" className="search-input" placeholder="Search" />
        </div>
        <div className="navbar-icon-container">
          <NotificationsIcon className="navbar-icons" />
          <span className="notification-count">5</span>
        </div>
        <div className="navbar-icon-container">
          <TextsmsIcon className="navbar-icons" />
          <span className="notification-count">5</span>
        </div>
        <div className="navbar-icon-container">
          <div className="username-container">
            <span>d</span>
          </div>
        </div>
        <div className="dropdown-container">
          <KeyboardArrowDownIcon className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
