import {useContext} from 'react';
const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Mock Authentication</h1>
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
          ? "🎉 You are authenticated!"
          : "🚫 You are not authenticated."}
      </p>
    </div>
  );
};
