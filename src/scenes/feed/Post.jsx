import "./Post.css";
import { Publicacoes } from "./Data";
import React, { useState } from "react";
import LikeIcon from "../../assets/like-icon.svg";

function Post(props) {
  const [clicado, setClicado] = useState(false);

  const toggleClicado = () => {
    setClicado(!clicado);
  };

  return (
    <div className="post-map">
      {Publicacoes.map((publicacao, index) => (
        <div className="post" key={index}>
          <div className="post-header">
            <img src={publicacao.userPic} alt={publicacao.userName} />
            <p>
              {publicacao.userName}
              <br />
              <span>{publicacao.date}</span>
            </p>
          </div>
          <p className="post-comment">{publicacao.content}</p>
          <div className="post-picture-container">
            <img
              src={publicacao.imagePost}
              className="post-picture"
              alt="Post"
            />
          </div>
          <div className="post-comment">
            <button
              onClick={toggleClicado}
              className={clicado ? "like-clicado" : "like-icon"}
              alt="Like"
            >
              <img src={LikeIcon} className="like-image" />
            </button>
            <form>
              <input
                className="input-comment"
                placeholder="Comentar sobre a publicação..."
              />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
