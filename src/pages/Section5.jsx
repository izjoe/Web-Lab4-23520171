import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Section5() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState("");

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleUserNavigate = () => {
    if (userId) {
      alert(`Navigating to user profile: ${userId}`);
    }
  };

  return (
    <div className="card">
      <h2>🧭 React Router Demo</h2>
      
      <div className="router-demo">
        <div className="demo-section">
          <h3>Current Route</h3>
          <div className="route-display">{location.pathname}</div>
        </div>

        <div className="demo-section">
          <h3>Navigation Controls</h3>
          <div className="nav-buttons">
            <button onClick={() => handleNavigate("/")}>Go to Home</button>
            <button onClick={() => handleNavigate("/section1")}>Go to Section 1</button>
            <button onClick={() => handleNavigate("/section2")}>Go to Section 2</button>
            <button onClick={() => handleNavigate("/blog/login")}>Go to Blog</button>
          </div>
        </div>

        <div className="demo-section">
          <h3>Dynamic Routes</h3>
          <div className="flex-row">
            <input 
              type="text" 
              placeholder="Enter user ID" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleUserNavigate}>Visit User Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}
