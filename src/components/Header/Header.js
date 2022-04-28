import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__titles">
        <span className="title-sm">Cats, Cats & More Cats</span>
        <span className="title-lg">Blog</span>
      </div>
      <img
        src={
          "https://images.alphacoders.com/107/thumb-1920-1073070.jpg" ||
          "https://images.wallpaperscraft.com/image/single/cat_grass_hide_144627_1920x1080.jpg" 
        }
        alt=""
        className="header__img"
      />
    </div>
  );
}

export default Header;
