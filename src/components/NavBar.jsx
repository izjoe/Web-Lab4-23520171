import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/section1", label: "Section 1" },
  { path: "/section2", label: "Section 2" },
  { path: "/section3", label: "Section 3" },
  { path: "/section4", label: "Section 4" },
  { path: "/section5", label: "Section 5" },
  { path: "/section6", label: "Section 6" },
  { path: "/section7", label: "Section 7" },
  { path: "/section8", label: "Section 8" },
  { path: "/blog/login", label: "Dashboard" }
];

export default function NavBar() {
  return (
    <nav className="top-nav">
      <div className="nav-inner">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => "top-nav-link" + (isActive ? " active" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}