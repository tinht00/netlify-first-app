import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/564x/e2/fa/4f/e2fa4f522ba08153f4ab25b33e97b1dc.jpg"
          className="sidebar__img"
          alt=""
        />
        <p>
          Welcome to Cats, Cats & More Cats Blog! Here you’ll find the
          paw-sibilities are endless furr cat lovers who want paw-some content
          that is relevant and meaningful. We paw-sitively hope our blog leaves
          you feline great!
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">CATEGORIES</span>
        <ul className="sidebar__list">
          <li className="list__item">Persian</li>
          <li className="list__item">Polydactyl</li>
          <li className="list__item">British</li>
          <li className="list__item">Scottish</li>
          <li className="list__item">Siamese</li>
          <li className="list__item">Snowshoe</li>
        </ul>
      </div>

      <div className="sidebar__item">
        <span className="sidebar__title">FOLLOW US</span>
        <div className="sidebar__social">
          <i className="sidebar__icon fa-brands fa-facebook-square"></i>
          <i className="sidebar__icon fa-brands fa-linkedin"></i>
          <i className="sidebar__icon fa-brands fa-pinterest-square"></i>
          <i className="sidebar__icon fa-brands fa-youtube-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
