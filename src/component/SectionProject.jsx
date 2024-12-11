import React, { useState } from "react";
import guest from "../asset/image/guest.png";
import recruiter from "../asset/image/recruiter.png";
import admin from "../asset/image/admin2.png";
import app from "../asset/image/app-point.jpg";
import fnb from "../asset/image/fnb.jpg";
import travel from "../asset/image/travel2.png";

const SectionProject = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleBack = () => {
    setShow(false);
  };
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-box">
        <div className="projects-card">
          <img src={guest} alt="" />
          <h3>Hiring platform</h3>
          <p>
            A job platform where candidates can explore opportunities, apply
            effortlessly, and create professional CVs to connect with the right
            employers.
          </p>
          <div className="list-language">
            <span>NextJs</span>
            <span>Tailwindcss</span>
            <span>Redux</span>
          </div>
          <div className="list-btn">
            <a className="btn" href="https://vjobs.vn/">
              Live Demo
            </a>
            <div className="btn">Features</div>
          </div>
        </div>
        <div className="projects-card">
          {show ? (
            <div>
              <div class="features">
                <div>
                  <h3>Responsibilities</h3>
                </div>
                <div className="responsibility">
                  <p>
                    Designed and built features for company authentication,
                    including company registration and verification.
                  </p>
                  <p>Implemented tools for managing job postings</p>
                  <p>Tracking applicants</p>
                  <p>Creating an interactive dashboard for employers</p>
                  <p>Report candidates, share candidates</p>
                </div>
              </div>

              <div className="btn btn-back" onClick={handleBack}>
                Back
              </div>
            </div>
          ) : (
            <>
              <img src={recruiter} alt="" />
              <h3>Recruitment Platform</h3>
              <p>
                A platform for businesses to manage company info, post jobs, and
                track candidate applications efficiently.
              </p>
              <div className="list-language">
                <span>NextJs</span>
                <span>Tailwindcss</span>
                <span>Redux</span>
              </div>
              <div className="list-btn">
                <div className="btn">View Demo</div>
                <div className="btn" onClick={handleShow}>
                  Features
                </div>
              </div>
            </>
          )}
        </div>
        <div className="projects-card">
          <img src={admin} alt="" />
          <h3>Admin Management Platform</h3>
          <p>
            An admin platform to monitor and manage all activities on the job
            portal, from posting job listings to managing candidates and
            optimizing the recruitment process.
          </p>
          <div className="list-language">
            <span>ReactJs</span>
            <span>Sass</span>
            <span>Redux</span>
            <span>Bootstrap</span>
          </div>
          <div className="list-btn">
            <div className="btn">View Demo</div>
            <div className="btn">Features</div>
          </div>
        </div>
        <div className="projects-card">
          <img src={app} alt="" />
          <h3>Loyalty Program App</h3>
          <p>
            Developed a mobile app that allows customers to place orders, earn
            loyalty points with each purchase, and redeem points for vouchers.
          </p>
          <div className="list-language">
            <span>ReactJs</span>
            <span>Sass</span>
            <span>Redux</span>
            <span>Bootstrap</span>
          </div>
          <div className="list-btn">
            <div className="btn">View Demo</div>
            <div className="btn">Features</div>
          </div>
        </div>
        <div className="projects-card">
          <img src={fnb} alt="" />
          <h3>F&B</h3>
          <p>
            Developed a web platform for managing F&B processes, optimizing
            order management, inventory, staff, and service workflows to enhance
            operational efficiency and customer experience.
          </p>
          <div className="list-language">
            <span>ReactJs</span>
            <span>Sass</span>
            <span>Redux</span>
            <span>Bootstrap</span>
          </div>
          <div className="list-btn">
            <div className="btn">View Demo</div>
            <div className="btn">Features</div>
          </div>
        </div>
        <div className="projects-card">
          <img src={travel} alt="" />
          <h3>Travel Booking Platform</h3>
          <p>
            A platform for customers to book tours and businesses to promote
            tours, while managing itineraries and tour guides.
          </p>
          <div className="list-language">
            <span>ReactJs</span>
            <span>Sass</span>
            <span>Redux</span>
            <span>Bootstrap</span>
          </div>
          <div className="list-btn">
            <a className="btn" href="https://travel-mekong-delta.netlify.app/">
              Live Demo
            </a>
            <div className="btn">Features</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
