import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__img">
        <img
          src="https://initiate.alphacoders.com/images/581/cropped-1500-500-581083.jpg?7633"
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
