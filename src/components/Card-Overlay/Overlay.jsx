import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import UploadIcon from '@mui/icons-material/Upload';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./overlay.css";

const Overlay = () => {
  return (
    <div className="overlay">
      <div className="overlay-container">
        <div className="overlay-top">
          <span className="profile">
            Profile <KeyboardArrowDownIcon className="overlay-icon" />
          </span>
          <span>
            <button className="overlay-save">Save</button>
          </span>
        </div>
        <div className="overlay-bottom">
          <div className="overlay-buttons"><UploadIcon/></div>
          <div className="overlay-buttons"><MoreHorizIcon/></div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
