import React, { useState } from "react";
import guest from "../asset/image/guest.png";
import recruiter from "../asset/image/recruiter.png";
import admin from "../asset/image/admin2.png";
import app from "../asset/image/app-point.jpg";
import fnb from "../asset/image/fnb.jpg";
import travel from "../asset/image/travel2.png";
import { ModalRecruiter } from "./ModalRecruiter";
import { ModalApp } from "./ModalApp";

const SectionProject = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const handleShow = (value) => {
    setShow(true);
    setType(value);
  };
  const handleBack = () => {
    setShow(false);
    setType("");
  };
  return (
    <>
      {show && type === "view-recruiter" && (
        <ModalRecruiter open handleClose={handleBack} />
      )}
      {show && type === "mobile-app" && (
        <ModalApp open handleClose={handleBack} />
      )}
      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="projects-box">
          <div className="projects-card">
            {show && type === "member" ? (
              <div className="res-body">
                <div class="features">
                  <div>
                    <h3>Responsibilities</h3>
                  </div>
                  <div className="responsibility">
                    <p>
                      Implemented core features such as user authentication
                      (login, registration, and user verification)
                    </p>
                    <p>Candidate profile management</p>
                    <p>CV template creation</p>
                    <p>
                      Developed additional features to enhance the user
                      experience for job seekers
                    </p>
                  </div>
                </div>

                <div className="btn btn-back" onClick={handleBack}>
                  Back
                </div>
              </div>
            ) : (
              <>
                <img src={guest} alt="" loading="lazy" />
                <h3>Hiring platform</h3>
                <p>
                  A job platform where candidates can explore opportunities,
                  apply effortlessly, and create professional CVs to connect
                  with the right employers.
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
                  <div className="btn" onClick={() => handleShow("member")}>
                    Features
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="projects-card">
            {show && type === "recruiter" ? (
              <div className="res-body">
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
                <img src={recruiter} alt="" loading="lazy" />
                <h3>Recruitment Platform</h3>
                <p>
                  A platform for businesses to manage company info, post jobs,
                  and track candidate applications efficiently.
                </p>
                <div className="list-language">
                  <span>NextJs</span>
                  <span>Tailwindcss</span>
                  <span>Redux</span>
                </div>
                <div className="list-btn">
                  <div
                    className="btn"
                    onClick={() => handleShow("view-recruiter")}
                  >
                    View Demo
                  </div>
                  <div className="btn" onClick={() => handleShow("recruiter")}>
                    Features
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="projects-card">
            {show && type === "admin" ? (
              <div className="res-body">
                <div class="features">
                  <div>
                    <h3>Responsibilities</h3>
                  </div>
                  <div className="responsibility">
                    <p>
                      Developed most of the comprehensive management features
                      for the admin, including:
                      <ul>
                        <li>
                          Management of companies, job postings, CVs,
                          candidates, and employees.
                        </li>
                        <li>
                          Management of subscription packages, posts,
                          transactions, requests, and statistics.
                        </li>
                        <li>
                          Built an admin statistics page that provides key
                          metrics and insights for administrators.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div className="btn btn-back" onClick={handleBack}>
                  Back
                </div>
              </div>
            ) : (
              <>
                <img src={admin} alt="" loading="lazy" />
                <h3>Admin Management Platform</h3>
                <p>
                  An admin platform to monitor and manage all activities on the
                  job portal, from posting job listings to managing candidates
                  and optimizing the recruitment process.
                </p>
                <div className="list-language">
                  <span>ReactJs</span>
                  <span>Sass</span>
                  <span>Redux</span>
                  <span>Bootstrap</span>
                </div>
                <div className="list-btn">
                  <div className="btn">View Demo</div>
                  <div className="btn" onClick={() => handleShow("admin")}>
                    Features
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="projects-card">
            {show && type === "app" ? (
              <div className="res-body">
                <div class="features">
                  <div>
                    <h3>Responsibilities</h3>
                  </div>
                  <div className="responsibility">
                    <p>
                      Fully responsible for designing the user interface and
                      implementing core app functionalities.
                    </p>
                    <p>
                      Developed user-friendly interfaces and features, including
                      order placement, points redemption for vouchers, and
                      voucher management.
                    </p>
                    <p>
                      Ensured a seamless user experience through intuitive
                      design and smooth functionality integration.
                    </p>
                  </div>
                </div>

                <div className="btn btn-back" onClick={handleBack}>
                  Back
                </div>
              </div>
            ) : (
              <>
                <img src={app} alt="" loading="lazy" />
                <h3>Loyalty Program App</h3>
                <p>
                  Developed a mobile app that allows customers to place orders,
                  earn loyalty points with each purchase, and redeem points for
                  vouchers.
                </p>
                <div className="list-language">
                  <span>ReactJs</span>
                  <span>Sass</span>
                  <span>Redux</span>
                  <span>Bootstrap</span>
                </div>
                <div className="list-btn">
                  <div className="btn" onClick={() => handleShow("mobile-app")}>
                    View Demo
                  </div>
                  <div className="btn" onClick={() => handleShow("app")}>
                    Features
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="projects-card">
            {show && type === "fnb" ? (
              <div className="res-body">
                <div class="features">
                  <div>
                    <h3>Responsibilities</h3>
                  </div>
                  <div className="responsibility">
                    <p>
                      Responsible for managing various tasks on the admin panel,
                      ensuring smooth system operations.
                    </p>
                    <p>
                      Developed the order placement and payment processes on the
                      sales platform, optimizing user experience and transaction
                      efficiency.
                    </p>
                  </div>
                </div>

                <div className="btn btn-back" onClick={handleBack}>
                  Back
                </div>
              </div>
            ) : (
              <>
                <img src={fnb} alt="" loading="lazy" />
                <h3>F&B</h3>
                <p>
                  Developed a web platform for managing F&B processes,
                  optimizing order management, inventory, staff, and service
                  workflows to enhance operational efficiency and customer
                  experience.
                </p>
                <div className="list-language">
                  <span>ReactJs</span>
                  <span>Sass</span>
                  <span>Redux</span>
                  <span>Bootstrap</span>
                </div>
                <div className="list-btn">
                  <div className="btn">View Demo</div>
                  <div className="btn" onClick={() => handleShow("fnb")}>
                    Features
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="projects-card">
            {show && type === "travel" ? (
              <div className="res-body">
                <div class="features">
                  <div>
                    <h3>Responsibilities</h3>
                  </div>
                  <div className="responsibility">
                    <p>
                      Fully responsible for designing the user interface and
                      implementing core functionalities of the website.
                    </p>
                    <p>
                      Develop user-friendly interfaces and features, including
                      tour booking, tour management, tour details, article
                      details, tour reviews and sections used to manage tour
                      activities.
                    </p>
                  </div>
                </div>

                <div className="btn btn-back" onClick={handleBack}>
                  Back
                </div>
              </div>
            ) : (
              <>
                <img src={travel} alt="" loading="lazy" />
                <h3>Travel Booking Platform</h3>
                <p>
                  A platform for customers to book tours and businesses to
                  promote tours, while managing itineraries and tour guides.
                </p>
                <div className="list-language">
                  <span>ReactJs</span>
                  <span>Sass</span>
                  <span>Redux</span>
                  <span>Bootstrap</span>
                </div>
                <div className="list-btn">
                  <a
                    className="btn"
                    href="https://travel-mekong-delta.netlify.app/"
                  >
                    Live Demo
                  </a>
                  <div className="btn" onClick={() => handleShow("travel")}>
                    Features
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionProject;
