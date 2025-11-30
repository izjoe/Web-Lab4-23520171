import React from "react";
import NavBar from "./NavBar.jsx";

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="top-header">
        <div className="container-inner">
          <h1>LAB 4</h1>
        </div>
      </header>

      <NavBar />

      <div className="container">
        <div className="content-grid">
          <main className="main-col">{children}</main>
          <aside className="sidebar">
            <div className="card sidebar-card">
              <h3>Topics Covered</h3>
              <div className="sidebar-list">
                <div className="sidebar-item card">Loading States</div>
                <div className="sidebar-item card">Error Handling</div>
                <div className="sidebar-item card">LocalStorage</div>
                <div className="sidebar-item card">Custom Hooks</div>
                <div className="sidebar-item card">Context API</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}