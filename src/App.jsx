import React, { useState } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";
import "./index.css";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    settings: { darkMode: false },
  });

  return (
    <div className={user.settings.darkMode ? "dark-mode" : ""}>
      <nav className="navbar navbar-expand-lg navbar-light mb-4">
        <a className="navbar-brand" href="#">
          My App
        </a>
      </nav>
      <Home />
      <Profile user={user} setUser={setUser} />
      <Settings user={user} setUser={setUser} />
    </div>
  );
};
