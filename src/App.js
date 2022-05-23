import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Settings from "./components/Pages/Settings/Settings";
import Single from "./components/Pages/Single/Single";
import Write from "./components/Pages/Write/Write";
import Home from "./components/Pages/Home/Home";
import NavbarMobile from "./components/Navbar/Navbar_md";


function App() {
  let user = true;
  return (
    <div className="App">
      <Navbar />
      <NavbarMobile />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/profile" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:postid" element={<Single />} />
      </Routes>
     
    </div>
  );
}
export default App;
