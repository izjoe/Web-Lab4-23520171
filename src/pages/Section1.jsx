import React, { useEffect, useState } from "react";

export default function Section1() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add event listener for mouse movement
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);

    // Cleanup: remove event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="card">
      <h2>🖱️ Mouse Tracker</h2>
      <p>Move your mouse to see coordinates update in real-time</p>
      <div className="mouse-display">
        <div className="coordinate-box">
          <span className="coord-label">X Position</span>
          <span className="coord-value">{mousePos.x}px</span>
        </div>
        <div className="coordinate-box">
          <span className="coord-label">Y Position</span>
          <span className="coord-value">{mousePos.y}px</span>
        </div>
      </div>
    </div>
  );
}
