import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FeedIcon from "../../assets/feed-icon.svg";
import ProfileIcon from "../../assets/profile-icon.svg";
import SupportIcon from "../../assets/support-icon.svg";
import LogoutIcon from "../../assets/logout-icon.svg";
import UserImage from "../../components/UserImage";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideBar = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!user) {
    return null;
  }

  const { username } = user;
  return (
    <div className="side-bar">
      <div className="header-side-bar">
        <h2>TechWave</h2>
        <UserImage image={picturePath} />
        <p> @{username}</p>
      </div>
      <div className="line"></div>
      <div>
        <a href="home" className="bar-buttons ">
          <img src={FeedIcon} alt="Feed" />
          <p>Feed</p>
        </a>
        <a href="/profile" className="bar-buttons" onClick={() => navigate(`/profile/${userId}`)}>
          <img src={ProfileIcon} alt="Perfil" />
          <p>Perfil</p>
        </a>
        <a href="/suport" className="bar-buttons" onClick={() => navigate("/suport")}>
          <img src={SupportIcon} alt="Suporte" />
          <p>Suporte</p>
        </a>
      </div>
      <div className="line"></div>
      <a href="/" className="bar-buttons" onClick={handleLogout}>
        <img src={LogoutIcon} alt="Sair" />
        <p>Sair</p>
      </a>
    </div>
  );
};

export default SideBar;
