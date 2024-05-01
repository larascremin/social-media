import "./Profile.css";
import Inputs from "./Inputs";
import SideBar from "../SideBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import UserImage from "../../../components/UserImage";

// eslint-disable-next-line react/prop-types
const Profile = () => {
  const [setUser] = useState(null);
  const [newUsername, setNewUsername] = useState("");

  const { _id, picturePath } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);


  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newUsername }), 
      });
  
      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        setNewUsername(""); 
      } else {
        console.error("Erro ao atualizar nome de usuário");
      }
    } catch (error) {
      console.error("Erro de rede:", error);
    }
  };

  return (
    <>
      <SideBar userId={_id} picturePath={picturePath} />

      <div className="feed-top"></div>
      <div className="feed">
        <h2 className="profile-title">Atualize seu perfil</h2>
        <div className="profile">
          <div className="picture-container">
            <UserImage image={picturePath} />
            <p>Trocar foto de perfil:</p>
          </div>
          <div className="input-container">
            <form className="profile-form">
              <Inputs
                label="Alterar nome de usuário:"
                value={newUsername} 
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <Inputs label="Alterar e-mail cadastrado:" />
              <Inputs label="Alterar senha:" />
            </form>
            <button className="atualizar" onClick={handleUpdateProfile}>ATUALIZAR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
