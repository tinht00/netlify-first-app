import Footer from "../../Footer/Footer"
import Sidebar from "../../Sidebar/Sidebar"
import "./Settings.css"

function Settings() {
  return (
    <>
    <div className="settings">
   <div className="settings__wrapper">
   <div className="settings__title">
     <span className="update__title">Update Your Account</span>
     <span className="delete__title">Delete Account</span>
   </div>
   <form  className="settings__form">
     <label htmlFor="">Profile Picture</label>
     <div className="settings__profile-picture">
       <img src="https://i.pinimg.com/564x/52/0f/94/520f94646aac0e9b9dc57c6b938cdfe9.jpg" alt="" />
       <label htmlFor="file__input">
       <i className="profile__icon far fa-user-circle"></i>
       </label>
       <input type="file" id="file__input" style={{display:"none"}} />
     </div>
     <label>Username</label>
     <input type="text" className="" placeholder="Arius" />
     <label>Email</label>
     <input type="email" className="" placeholder="arius00@gmail.com" />
     <label>Password</label>
     <input type="password" className="" placeholder="********" />
     <button className="settings__submit">Update</button>
   </form>
   </div>
   <Sidebar />
    </div>
    <Footer /></>
  )
}

export default Settings