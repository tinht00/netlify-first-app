import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__titles">
        <span className="title-sm">Cats, Cats & More Cats</span>
        <span className="title-lg">Blog</span>
      </div>
      <img src="https://initiate.alphacoders.com/images/107/cropped-1600-900-1073070.jpg?3768" alt="" className="header__img" />
    </div>
  );
}

export default Header;
