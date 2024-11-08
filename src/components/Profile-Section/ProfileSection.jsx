import React from "react";
import "./profileSection.css";

const ProfileSection = (props) => {
  return (
    <div
      className="profile-section"
      style={{ top: props.top, left: props.left }}>
      <div className="profile-header">
        <span className="profile-search-title">save</span>
        <input className="profile-search-input" type="text" />
      </div>
      <div className="profile-section-top"></div>
      <div className="profile-section-middle"></div>
      <div className="profile-section-bottom"></div>
      <div className="profile-section-footer"></div>
    </div>
  );
};

export default ProfileSection;
