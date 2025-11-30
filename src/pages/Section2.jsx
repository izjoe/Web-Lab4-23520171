import React, { useEffect, useRef, useState } from "react";

export default function Section2() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Auto-focus username input on mount
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    if (username && password) {
      setMessage(`✅ Login successful! Welcome, ${username}`);
    } else {
      setMessage("❌ Please fill in all fields");
    }
  };

  return (
    <div className="card">
      <h2>🔐 Login Form (Uncontrolled)</h2>
      <form onSubmit={handleSubmit} className="demo-form">
        <div className="form-group">
          <label>Username</label>
          <input ref={usernameRef} type="text" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input ref={passwordRef} type="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
      {message && <div className="message-box">{message}</div>}
    </div>
  );
}
