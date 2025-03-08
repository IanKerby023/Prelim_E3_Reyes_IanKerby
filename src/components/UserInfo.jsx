import React from "react";

const UserInfo = ({ name }) => {
  return <h2 className="mt-3">🆔 User Name: {name || "No name set"}</h2>;
};

export default UserInfo;
