import React from "react";
import "./NavBar.css";
import SideDrawer from "./SideDrawer";
import MySvg from '../images/all-news-1.svg';

const NavBar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <SideDrawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src={"https://upload.wikimedia.org/wikipedia/commons/9/95/New_logo.svg"}
        //src={MySvg}
        //width="100%"
        height="70%"
        alt="logo"
      />
    </div>
  );
};

export default NavBar;