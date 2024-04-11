import "./Feed.css";
import NewPostPic from "../../../assets/profile.png";
import UploadIcon from "../../../assets/upload-icon.svg";
import Post from "./Post";
import Forms from "../../login/Forms";
import SideBar from "../SideBar";
import "../SideBar.css";

function Feed() {
  return (
    <>
      <div className="feed-top"></div>
      <SideBar />
      <div className="feed">
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
      </div>
    </>
  );
}

export default Feed;
