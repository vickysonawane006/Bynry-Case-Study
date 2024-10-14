import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate();

  const handleHomeClick=()=>{
    navigate("/");
  };

  const handleLoginClick=()=>{
    navigate("/Login");
  }

  return (
    <header>
      <h1>ProfilePeek</h1>
      <p className="project-title">Discover and explore personal profiles with engaging summaries for meaningful connections.</p>
      <div className="button-container">
        <button className="Header-button" onClick={handleLoginClick}>Login</button>
        <button className="Header-button" onClick={handleHomeClick}>Home</button>
        <button className="Header-button">Connections</button>
        <button className="Header-button">Notifications</button>
      </div>
    </header>
  );
}

export default Header; 



