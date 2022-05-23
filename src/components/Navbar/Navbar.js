import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  
  return (
    <div className="nav">
      <div className="nav__left">
        <i className="nav__icon fa-brands fa-facebook-square"></i>
        <i className="nav__icon fa-brands fa-linkedin"></i>
        <i className="nav__icon fa-brands fa-pinterest-square"></i>
        <i className="nav__icon fa-brands fa-youtube-square"></i>
      </div>
      <div className="nav__center">
        <ul className="nav__list">
          <li className="list__item">
            <Link className="link" to={"/"}>HOME</Link>
          </li>
          <li className="list__item">
            <Link className="link" to={"/"}>ABOUT</Link>
          </li>
          <li className="list__item">
            <Link className="link" to={"/"}>CONTACT</Link>
          </li>
          <li className="list__item">
            <Link className="link" to={"/write"}>WRITE</Link>
          </li>
          <li className="list__item">
            <Link className="link" to={"/login"}>LOGOUT</Link>
          </li>
        </ul>
      </div>
      <div className="nav__right">
      <Link to={"/profile"}><img
            className="nav__img"
            src="https://i.pinimg.com/564x/d3/27/bd/d327bdb052d4c756052882085ea13b50.jpg"
            alt="avatar"
          /></Link>
        

        <i className="nav__searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Navbar;
