import React, { useContext } from "react";
import { UserContext } from "../hook/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
    </>
  );
};

export default UserProfile;
