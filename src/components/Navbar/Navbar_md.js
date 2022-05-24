import "./Navbar_md.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function NavbarMobile() {
  const [isOpent, setIsOpent] = useState(true);

  function handleClickNavItem() {
    setIsOpent((p) => !p);
  }

  return (
    <div className="navbar__md">
      <div className="nav__toggle">
      <div className="nav__title">
      Cats Blog
      </div>
        <i
          onClick={handleClickNavItem}
          className="nav__responsive-icon fa-solid fa-bars"
        ></i>
      </div>

      <div
        className={`navbar__md__content ${isOpent ? "hideMenu" : "showMenu"} `}
      >
        <div className="navExit">
          <i
            onClick={handleClickNavItem}
            className="nav__exit-icon fa-solid fa-xmark"
          ></i>
        </div>

        <ul className="nav__list">
          <li onClick={handleClickNavItem} className="list__item">
            <Link to={"/profile"}>
              <img
                className="navbar__md__avatar"
                src="https://i.pinimg.com/564x/d3/27/bd/d327bdb052d4c756052882085ea13b50.jpg"
                alt="avatar"
              />
            </Link>
          </li>
          <li onClick={handleClickNavItem} className="list__item">
            <Link className="link" to={"/"}>
              HOME
            </Link>
          </li>
          <li onClick={handleClickNavItem} className="list__item">
            <Link className="link" to={"/"}>
              ABOUT
            </Link>
          </li>
          <li onClick={handleClickNavItem} className="list__item">
            <Link className="link" to={"/"}>
              CONTACT
            </Link>
          </li>
          <li onClick={handleClickNavItem} className="list__item">
            <Link className="link" to={"/write"}>
              WRITE
            </Link>
          </li>
          <li onClick={handleClickNavItem} className="list__item">
            <Link className="link" to={"/login"}>
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarMobile;
