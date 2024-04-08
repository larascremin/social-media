import ProfilePic from "../../assets/profile.png";
import FeedIcon from "../../assets/feed-icon.svg";
import ProfileIcon from "../../assets/profile-icon.svg";
import SupportIcon from "../../assets/support-icon.svg";
import LogoutIcon from "../../assets/logout-icon.svg";

import "./SideBar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="header-side-bar">
        <h2>TechWave</h2>
        <img src={ProfilePic} className="profile-pic" />
        <p>@laraScremin</p>
      </div>
      <div className="line"></div>
      <a href="/" className="bar-buttons ">
        <img src={FeedIcon} />
        <p>Feed</p>
      </a>
      <a href="/profile" className="bar-buttons">
        <img src={ProfileIcon} />
        <p>Perfil</p>
      </a>
      <a href="/" className="bar-buttons">
        <img src={SupportIcon} />
        <p>Suporte</p>
      </a>
      <div className="line"></div>
      <a href="/" className="bar-buttons">
        <img src={LogoutIcon} />
        <p>Sair</p>
      </a>
    </div>
  );
}

export default SideBar;
