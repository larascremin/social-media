import { BrowserRouter } from "react-router-dom";
import SideBar from "./SideBar";
import NewPost from "./posts/NewPost";
import Profile from "./profile/Profile";
import Log from "../login/log/Log";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function FeedScenes() {
  return (
    <BrowserRouter>
      <div className="feed-top"></div>
      <SideBar />
      <div className="feed">
        <Routes>
          <Route path="/" element={<NewPost />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default FeedScenes;
