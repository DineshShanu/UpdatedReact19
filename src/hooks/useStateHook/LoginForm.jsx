import React, { useState } from "react";
import "./index.css";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      username,
      password,
    };
    console.log(loginData);
  };
  return (
    <>
      <div className="container" style={{ marginTop: "0%" }}>
        <div>
          <h1>Login Form</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="username"
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
