import React, { useState, useEffect } from "react";
import "../StyleSheet/Form.css";
import axios from "axios";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]; //because upload single image
    const formData = new FormData();
    formData.append("profile", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setProfile(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const handleSubmit = async (e) => {
    try {
      const res = await axios.post("/api/users/register", {
        username,
        password,
        profile,
      });
      window.location.replace("/login");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Form__container">
      <form className="Form">
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
        <label>Profile</label>
        <div className="profile">
          <input
            onChange={(e) => setProfile(e.target.value)}
            type="text"
            value={profile}
            id="image"
          />
          <input
            id="image"
            label="choose file"
            type="file"
            custom
            onChange={uploadFileHandler}
          ></input>
        </div>

        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
