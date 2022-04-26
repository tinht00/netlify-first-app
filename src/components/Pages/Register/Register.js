import { Link } from "react-router-dom"
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form">
        <label>Usename</label>
        <input
          className="register__input"
          type="text"
          placeholder="Enter your username..."
          required
        />
        <label>Email</label>
        <input
          className="register__input"
          type="email"
          placeholder="Enter your email..."
          required
        />
        <label>Password</label>
        <input
          className="register__input"
          type="password"
          placeholder="Enter yor password..."
          required
        />
        <label>Re-enter password</label>
        <input
          className="register__input"
          type="password"
          placeholder="Re-enter yor password..."
          required
        />
        <Link to={"/"} className="register__btn">Register</Link>
      </form>
      <Link to={"/Login"} className="register__login__btn">Login</Link>
    </div>
  );
}

export default Register;
