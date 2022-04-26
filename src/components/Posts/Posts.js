import Post from "../Post/Post";
import "./Posts.css";

function Posts() {
  return (
    <div className="posts">
      
      <Post
        image={
          "https://i.pinimg.com/564x/74/df/79/74df7940e2cf735ad355b337286f8856.jpg"
        }
        tag={"British"}
        title={"Porro alias debitis dolorum sapiente"}
        desc={
          "Dolor sit amet consectetur adipisicing elit. Molestias at sint voluptates architecto? Porro alias debitis dolorum sapiente cumque nobis beatae esse explicabo. Sint, voluptatum hic eaque sed molestias architecto."
        }
      />
      <Post
        image={
          "https://i.pinimg.com/564x/0c/6a/c6/0c6ac6203cb14981a95a81d573348cb0.jpg"
        }
        tag={"Scottish"}
        title={"Ex voluptatem cupiditate suscipit provident"}
        desc={"Blanditiis, quas. Ex voluptatem cupiditate suscipit provident, eius quidem alias rem molestias obcaecati culpa voluptate nesciunt dolor facilis vitae repellat eligendi consequuntur?"}
      />
      
      <Post
        image={
          "https://i.pinimg.com/564x/50/52/fd/5052fdf81b35e50915b239b9f2c861af.jpg"
        }
        tag={"Polydactyl"}
        title={"Praesentium iste ad fugit mollitia"}
        desc={"Praesentium iste ad fugit mollitia minus necessitatibus maiores in pariatur eum, dolorem repellat aperiam blanditiis id reprehenderit, dolorum magnam dicta animi assumenda."}
      />
      
      <Post
        image={
          "https://i.pinimg.com/564x/17/61/cb/1761cbcffc03a7c887dc37bd58c58690.jpg"
        }
        tag={"Persian"}
        title={"Numquam facere cumque perspiciatis"}
        desc={"Numquam facere cumque perspiciatis. Voluptatum, ea pariatur? Maiores accusamus maxime molestiae libero. Repellendus, in alias ab corporis suscipit soluta repudiandae accusamus molestiae."}
      />
      
      <Post
        image={
          "https://i.pinimg.com/564x/eb/72/50/eb725066cb1a01be5e6aabaf88ac8775.jpg"
        }
        tag={"Snowshoe"}
        title={"Id ipsa fuga aperiam voluptates dolor quidem"}
        desc={"Id ipsa fuga aperiam voluptates dolor quidem, necessitatibus odio quae earum dolore dicta neque exercitationem iusto ipsum similique voluptas eius atque nihil?"}
      />
      
      <Post
        image={
          "https://i.pinimg.com/564x/05/cc/c3/05ccc3f1053723914313fe237da2b23d.jpg"
        }
        tag={"Siamese"}
        title={"Enim aperiam distinctio laborum"}
        desc={"Enim aperiam distinctio laborum unde maiores eligendi minima quod adipisci, deleniti, voluptate pariatur iste velit rerum fugiat eos vitae optio illo sequi!"}
      />
    </div>
  );
}

export default Posts;
