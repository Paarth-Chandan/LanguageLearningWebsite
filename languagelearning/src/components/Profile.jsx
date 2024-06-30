import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <div>
    <h1>{user.id}</h1>
  </div>;
};

export default Profile;
