import React from "react";
const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Hoang <span>Phong</span>
      </a>
      <i className="bx bx-menu menu-icon"></i>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="gradient-btn">Contact me</button>
    </header>
  );
};

export default Header;
