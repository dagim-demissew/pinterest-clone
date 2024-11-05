import React from "react";
import { Home } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";
import "./lowbar.css";

const Lowbar = () => {
  return (
    <div className="lowbar-container">
      <div className="lowbar-icons">
        <div className="lowbar-icon-container">
          <Home className="navbar-icons" />
          <span className="notification-count">5</span>
        </div>
        <div className="lowbar-icon-container">
          <NotificationsIcon className="navbar-icons" />
          <span className="notification-count">5</span>
        </div>
        <div className="lowbar-icon-container">
          <TextsmsIcon className="navbar-icons" />
          <span className="notification-count">5</span>
        </div>
        <div className="lowbar-icon-container">
          <div className="username-container">
            <span>d</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lowbar;
