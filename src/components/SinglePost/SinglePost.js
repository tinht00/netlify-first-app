import "./SinglePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePost__wrapper">
        <img
          src="https://www.clubcatusa.com/wp-content/uploads/2021/09/yerlin-matu-GtwiBmtJvaU-unsplash-980x653.jpg"
          alt=""
          className="singlePost__img"
        />
        <h1 className="singlePost__title">
          Lorem, ipsum dolor sit amet.
          <div className="singlePost__edit">
            <i className="far fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePost__info">
           <span className="singlePost__author">
              Author: <b>Yuucorner</b>
           </span>
           <span className="singlePost_date"> 1 hour ago</span>
        </div>
        <p className="singlePost__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo sint consequatur nam consequuntur. Cum sed eius omnis ullam repellat sequi, hic consequatur fugiat tempora nostrum ut quibusdam quidem minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo maxime hic dolores magni ipsam amet labore reprehenderit tenetur temporibus. Veniam vel repellat reiciendis non! Amet, dolor velit! Accusamus, doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi voluptatibus iste non cumque ratione minima quas sapiente! Eveniet sapiente, dolores at iste numquam ab velit quam voluptate aut minima! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente at vel eaque accusamus impedit saepe explicabo est obcaecati suscipit veritatis. Voluptate facilis vel fugit laborum perspiciatis ducimus asperiores, doloremque placeat?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
