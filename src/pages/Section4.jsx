import React, { useState } from "react";

export default function Section4() {
  const [formData, setFormData] = useState({ 
    username: "", 
    email: "", 
    password: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }
    // Check all fields are filled
    if (formData.username && formData.email && formData.password) {
      setMessage(`✅ Account created for ${formData.email}!`);
    } else {
      setMessage("❌ Please fill in all fields");
    }
  };

  return (
    <div className="card">
      <h2>📋 Signup Form (Controlled)</h2>
      <form onSubmit={handleSubmit} className="demo-form">
        <div className="form-group">
          <label>Username</label>
          <input name="username" value={formData.username} onChange={handleChange} placeholder="Choose a username" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
        </div>
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
      {message && <div className="message-box">{message}</div>}
    </div>
  );
}
