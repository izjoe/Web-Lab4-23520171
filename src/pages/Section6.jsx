import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

// Deeply nested component structure: Section6 > Dashboard > Toolbar > ThemedButton
function ThemedButton() {
  // Consume: Use useContext to read theme from Context
  const theme = useContext(ThemeContext);
  
  return (
    <button className={`button-${theme}`}>
      {theme === 'light' ? '☀️ Light Button' : '🌙 Dark Button'}
    </button>
  );
}

function Toolbar() {
  return (
    <div className="toolbar">
      <h4>Toolbar Component</h4>
      <ThemedButton />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h3>Dashboard Component</h3>
      <Toolbar />
    </div>
  );
}

export default function Section6() {
  // Consume: Use useContext hook at top level to read and control theme
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="card">
      <h2>🎨 Context API</h2>

      <div className="theme-demo">
        <div className="theme-display">
          <div className="theme-indicator" style={{
            background: theme === 'light' ? '#f0f0f0' : '#2d2d2d',
            color: theme === 'light' ? '#000' : '#fff',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <h3>Current Theme: {theme}</h3>
            <p>{theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}</p>
          </div>
          
          <button onClick={toggleTheme} className="btn-primary">
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
}
