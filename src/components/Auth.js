import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Click on the checkbox to get authenticated</h1>
      <label>
        <input
          type="checkbox"
          onChange={toggleAuth}
          checked={isAuthenticated}
        />
        I am not a robot
      </label>
      <p>
        {isAuthenticated
          ? "You are now authenticated, you can proceed"
          : "You are not authenticated."}
      </p>
    </div>
  );
};

export default Auth;
