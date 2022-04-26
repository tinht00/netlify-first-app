import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import "./Home.css";
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default Home;
