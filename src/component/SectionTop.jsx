import React from "react";
import image from "../asset/image/avatar.jpg";

const SectionTop = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, It's <span>Phong</span>
        </h1>
        <h3>
          I'm <span>Web Developer</span>
        </h3>
        <p>
          I am a Frontend Developer with 1 year of experience in designing and
          developing user interfaces and experiences for both websites and
          mobile applications.
        </p>
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
        <div className="btn-group">
          <a href="#home" className="btn">
            Hire
          </a>
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
