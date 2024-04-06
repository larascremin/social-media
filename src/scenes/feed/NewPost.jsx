import "./NewPost.css";
import NewPostPic from "../../assets/profile.png";

function NewPost() {
  return (
    <div className="new-post">
      <div className="new-post-top">
        <img src={NewPostPic} />
        <form action="/" method="POST">
          <input
            type="text"
            id="newPost"
            name="newPost"
            className="input-post"
          ></input>
        </form>
      </div>
      <div className="new-post-bottom">
        <button>ADICIONAR IMAGEM</button>
        <button>POSTAR</button>
      </div>
    </div>
  );
}

export default NewPost;
