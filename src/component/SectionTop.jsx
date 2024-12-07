import React from "react";
import image from "../asset/image/avatar.jpg";

const SectionTop = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Phong</span>
        </h1>
        <h3>
          I'm <span>Frontend Developer</span>
        </h3>
        <p>
          I'm a passionate frontend developer specializing in creating
          responsive and user-friendly web applications using React, Tailwind
          CSS, and modern web technologies.
        </p>
        <div className="social-icons">
          <a href="https://github.com/hoangphong02">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/pham-hoang-phong-02617a340">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="#home">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="#home">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <div className="btn-group">
          {/* <a href="#home" className="btn">
            Hire
          </a> */}
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default SectionTop;
