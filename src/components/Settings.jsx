import React from "react";

const Settings = ({ user, setUser }) => {
  const toggleDarkMode = () => {
    setUser({ ...user, settings: { darkMode: !user.settings.darkMode } });
  };

  return (
    <div className="container text-center mt-5">
      <h2>⚙️ Settings</h2>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkModeSwitch" className="ms-2 user-select-none">
          {user.settings.darkMode
            ? "🌙 Dark Mode Enabled"
            : "☀️ Light Mode Enabled"}
        </label>
      </div>
    </div>
  );
};

export default Settings;
