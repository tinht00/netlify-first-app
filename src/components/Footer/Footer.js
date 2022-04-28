import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__img">
        <img
          src={
            "https://images6.alphacoders.com/581/thumb-1920-581083.jpg" ||
            "https://images.wallpaperscraft.com/image/single/cat_eyes_blue_143433_1600x900.jpg"
          }
          alt=""
        />
      </div>
      <div className="footer__contacts">
        <div className="group__social">
          <i className="nav__icon fa-brands fa-facebook-square"></i>
          <i className="nav__icon fa-brands fa-linkedin"></i>
          <i className="nav__icon fa-brands fa-pinterest-square"></i>
          <i className="nav__icon fa-brands fa-youtube-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
