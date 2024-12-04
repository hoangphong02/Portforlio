import React, { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <header className="header">
      <a href="#home" className="logo">
        Hoang <span>Phong</span>
      </a>
      <i
        className={`bx ${show ? "bx-x" : "bx-menu"} menu-icon`}
        onClick={handleShow}
      ></i>

      <nav className={`navbar ${show ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="gradient-btn">
        <a href="#contact">Contact Me</a>
      </button>
    </header>
  );
};

export default Header;
