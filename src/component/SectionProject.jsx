import React from "react";
import image from "../asset/image/avatar.jpg";

const SectionProject = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-box">
        <div className="projects-card">
          <img src={image} alt="" />
          <h3>Project 1</h3>
          <p>
            I am a Frontend Developer with 1 year of experience in designing and
            developing user interfaces and experiences for both websites and
            mobile applications.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="projects-card">
          <img src={image} alt="" />
          <h3>Project 1</h3>
          <p>
            I am a Frontend Developer with 1 year of experience in designing and
            developing user interfaces and experiences for both websites and
            mobile applications.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="projects-card">
          <img src={image} alt="" />
          <h3>Project 1</h3>
          <p>
            I am a Frontend Developer with 1 year of experience in designing and
            developing user interfaces and experiences for both websites and
            mobile applications.
          </p>
          <div className="btn">Review Project</div>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
