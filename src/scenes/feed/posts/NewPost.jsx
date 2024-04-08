import "./NewPost.css";
import NewPostPic from "../../../assets/profile.png";
import UploadIcon from "../../../assets/upload-icon.svg";
import Post from "./Post";
import Forms from "../../login/Forms";

function NewPost() {
  return (
    <>
      <div className="new-post">
        <div className="new-post-top">
          <img src={NewPostPic} />
          <form>
            <input
              className="input-post"
              placeholder="Compartilhe algo legal..."
            />
          </form>
        </div>
        <div className="new-post-bottom">
          <button className="adicionar">
            <img src={UploadIcon} />
            Adicionar Imagem
          </button>
          <button className="postar">POSTAR</button>
        </div>
      </div>
      <Post />
    </>
  );
}

export default NewPost;
