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
          mobile applications. I have contributed to projects across diverse
          domains, including CRM systems, F&B, fashion, e-commerce, and
          recruitment platforms. My strengths lie in optimizing user experiences
          and leveraging modern technologies to deliver products that are both
          visually appealing and highly functional.
        </p>
        <button className="btn">Read More</button>
      </div>
    </section>
  );
};

export default SectionAbout;
