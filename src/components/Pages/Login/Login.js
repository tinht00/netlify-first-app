import { Link } from "react-router-dom"
import "./Login.css"

function Login() {

  return (
    <div className='login'>
    <span className="login__title">Login</span>
       <form className="login__form">
          <label>Email</label>
          <input className="login__input" type="email" placeholder="Enter your email..."  required/>
          <label>Password</label>
          <input className="login__input" type="password" placeholder="Enter yor password..." required/>
         <Link  className="login__btn" to={"/"}>Login</Link>
          
       </form>
      <Link className="login__register__btn" to={"/register"}>Register</Link>
    </div>
  )
}

export default Login