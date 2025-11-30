import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function BlogLogin() {
  const inputRef = useRef(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleLogin = () => {
    const username = inputRef.current?.value;
    if (username) {
      login();
      navigate("/blog/dashboard");
    } else {
      alert("Please enter a username");
    }
  };

  return (
    <div className="card">
      <h2>BlogDash - Login</h2>
      <div className="form-group">
        <label>Username</label>
        <input ref={inputRef} placeholder="Enter your username" />
      </div>
      <div className="flex-row" style={{ marginTop: "16px" }}>
        <button onClick={handleLogin} className="btn-primary">Log In</button>
      </div>
    </div>
  );
}