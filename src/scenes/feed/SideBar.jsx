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
      <div className="bar-buttons ">
        <img src={FeedIcon} />
        <p>Feed</p>
      </div>
      <div className="bar-buttons">
        <img src={ProfileIcon} />
        <p>Profile</p>
      </div>
      <div className="bar-buttons">
        <img src={SupportIcon} />
        <p>Support</p>
      </div>
      <div className="line"></div>
      <div className="bar-buttons">
        <img src={LogoutIcon} />
        <p>Log Out</p>
      </div>
    </div>
  );
}

export default SideBar;
