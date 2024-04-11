import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Log from "./scenes/login/log/Log";
import Sign from "./scenes/login/sign/Sign";
import Reset from "./scenes/login/reset/Reset";
import Feed from "./scenes/feed/posts/Feed";
import Profile from "./scenes/feed/profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="sign" element={<Sign />} />
          <Route path="reset" element={<Reset />} />
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
