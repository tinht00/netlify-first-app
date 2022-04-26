import "./Post.css";

function Post({image,title,desc,tag}) {
  return (
    <div className="post">
      <img
        src={image}
        alt=""
        className="post__img"
      />
      <div className="post__info">
        <div className="post__categs">
          <span className="post__categ">{tag}</span>
         
        </div>
        <span className="post__title">
          {title}
        </span>
        <hr />
        <span className="post__date">1 hour ago</span>
      </div>
      <p className="post__desc">
       {desc}
      </p>
    </div>
  );
}

export default Post;
