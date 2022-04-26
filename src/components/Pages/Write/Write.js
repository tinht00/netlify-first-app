import Footer from "../../Footer/Footer";
import "./Write.css";

function Write() {
  return (
    <> 
    <div className="write">
    <img src="https://www.clubcatusa.com/wp-content/uploads/2022/01/pexels-arina-krasnikova-7725998-980x654.jpg" alt="" className="write__img" />
      <form className="write__form">
        <div className="form__group">
          <label htmlFor="file">
            <i className="write__icon fa-solid fa-square-plus"></i>
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
          />
          <input
            type="text"
            placeholder="Title"
            className="write__input"
            autoFocus={true}
          />
        </div>
        <div className="form__group">
          <textarea
            type="text"
            className="write__input write__text"
            placeholder="Tell your story..."
            // cols="50"
            rows="5"
          ></textarea>
        </div>
        <button className="write__submit">Publish</button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default Write;
