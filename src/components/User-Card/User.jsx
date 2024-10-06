import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

const User = ({ pinterestItem }) => {
  return (
    <div className="card-user">
      <img className="user-image" src={pinterestItem.userImage} alt="" />
      <Link className="card-user-name">{pinterestItem.userName}</Link>
    </div>
  );
};

export default User;
