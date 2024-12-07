import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#home">
          <i className="bx bxl-github"></i>
        </a>
        <a href="#home">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="#home">
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a href="#home">
          <i className="bx bxl-twitter"></i>
        </a>
      </div>
      <ul className="list">
        <li className="">
          <a href="#home">FAQ</a>
        </li>
        <li className="">
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="copyright">@ Hoang Phong | All Right Reserved</p>
    </footer>
  );
};

export default Footer;
