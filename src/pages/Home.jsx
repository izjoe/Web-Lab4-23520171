import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to React Intermediate Lab</h1>
        <p className="home-description">
          This lab demonstrates intermediate React concepts including hooks (useEffect, useRef, 
          custom hooks), React Router, Context API, and a complete blog dashboard application 
          with authentication.
        </p>
        <p className="home-description">
          Navigate through sections using the menu above to explore different React patterns 
          and best practices. Each section provides hands-on interactive demonstrations.
        </p>
      </div>
    </div>
  );
}