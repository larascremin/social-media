import "./Profile.css";
import ProfilePic from "../../../assets/profile.png";
import Inputs from "./Inputs";
import SideBar from "../SideBar";

function Profile() {
  return (
    <>
      <div className="feed-top"></div>
      <SideBar />
      <div className="feed">
        <h2 className="profile-title">Atualize seu perfil</h2>
        <div className="profile">
          <div className="picture-container">
            <img src={ProfilePic} />
            <p>Trocar foto de perfil:</p>
          </div>
          <div className="input-container">
            <form className="profile-form">
              <Inputs label="Alterar nome de usuário:" />
              <Inputs label="Alterar e-mail cadastrado:" />
              <Inputs label="Alterar senha:" />
            </form>
            <button className="atualizar">ATUALIZAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
