import React from "react";
import image from "../asset/image/avatar.jpg";

const SectionAbout = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={image} alt="" />
      </div>
      <div className="about-content">
        <h2>
          About <span>Me</span>
        </h2>
        <p>
          I am a Frontend Developer with 1 year of experience in designing and
          developing user interfaces and experiences for both websites and
          mobile applications.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};

export default SectionAbout;
