import React from "react";
import image from "../asset/image/avatar.jpg";
import guest from "../asset/image/guest.png";
import recruiter from "../asset/image/recruiter.png";
import admin from "../asset/image/admin.png";
import app from "../asset/image/app.png";

const SectionProject = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-box">
        <div className="projects-card">
          <img src={guest} alt="" />
          <h3>Hiring platform</h3>
          <p>
            A job platform where candidates can explore opportunities, apply
            easily, and create professional CVs to showcase their potential,
            connecting talent with the right employers.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="projects-card">
          <img src={recruiter} alt="" />
          <h3>Recruitment Platform</h3>
          <p>
            A platform for businesses to manage company info, post jobs, and
            track candidate applications efficiently.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="projects-card">
          <img src={admin} alt="" />
          <h3>Admin Management Platform</h3>
          <p>
            An admin platform to monitor and manage all activities on the job
            portal, from posting job listings to managing candidates and
            optimizing the recruitment process.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="projects-card">
          <img src={app} alt="" />
          <h3>Loyalty Program App</h3>
          <p>
            Developed a mobile app that allows customers to place orders, earn
            loyalty points with each purchase, and redeem points for vouchers.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="projects-card">
          <img src={image} alt="" />
          <h3>F&B</h3>
          <p>
            Developed a web platform for managing F&B processes, optimizing
            order management, inventory, staff, and service workflows to enhance
            operational efficiency and customer experience.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="projects-card">
          <img src={image} alt="" />
          <h3>Travel Booking Platform</h3>
          <p>
            A platform for customers to book tours and businesses to promote
            tours, while managing itineraries and tour guides.
          </p>
          <div className="btn">Review Project</div>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
