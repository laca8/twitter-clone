import React, { useState, useEffect } from "react";
import "../StyleSheet/Form.css";
import axios from "axios";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/api/users/login", { username, password });
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("profile", res.data.profile);
      res.data && window.location.replace("/");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Form__container">
      <form className="Form" onSubmit={handleSubmit}>
        <label>username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <label>password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
export default SignIn;
