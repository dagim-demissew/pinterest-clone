import React from "react";
import { ReactComponent as PinterestLogo } from "../../assets/pinterest-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { displaySearch } from "../../redux/searchbar/search-actions";
import SearchIcon from "@mui/icons-material/Search";
import { CloseOutlined } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.search.displaySearch);
  return (
    <div className="navbar-container">
      <div className="navbar-items">
        <div className="logo-container">
          <div className="logo">
            <PinterestLogo />
          </div>
        </div>
        <div className="option inverted">
          <span>Home</span>
        </div>
        <div className="option">Create</div>
        <div className={`search-box ${display ? "search-box-active" : ""}`}>
          <SearchIcon className="search-icon" />
          <input
            type="text"
            className="search-input"
            onFocus={() => {
              dispatch(displaySearch());
            }}
            placeholder="Search"
          />
          {display ? (
            <div
              className="icon-search"
              onClick={() => {
                dispatch(displaySearch());
              }}>
              <CloseOutlined />
            </div>
          ) : (
            <></>
          )}
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
