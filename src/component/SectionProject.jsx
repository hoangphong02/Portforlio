import React, { useState } from "react";
import guest from "../asset/image/guest.png";
import app from "../asset/image/app-point.jpg";
import travel from "../asset/image/travel2.png";
import decor from "../asset/image/decor.png";
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
          <div className="projects-card">
            {show && type === "decor" ? (
              <div className="res-body">
                <div class="features">
                  <div>
                    <h3>Responsibilities</h3>
                  </div>
                  <div className="responsibility">
                    <p>Fullstack developer</p>
                    <p>Develop user-friendly interfaces and features</p>
                    <p>Develop backend APIs with Node.js.</p>
                    <p>
                      Develop a voice-based virtual assistant using React Speech
                      Recognition.
                    </p>
                    <p>Develop an AI chatbot with Dialogflow.</p>
                  </div>
                </div>

                <div className="btn btn-back" onClick={handleBack}>
                  Back
                </div>
              </div>
            ) : (
              <>
                <img src={decor} alt="" loading="lazy" />
                <h3>E-commerce Decoration</h3>
                <p>
                  A website for selling festive decoration items with a shopping
                  assistant..
                </p>
                <div className="list-language">
                  <span>ReactJs</span>
                  <span>Ant Design</span>
                  <span>Redux</span>
                  <span>Node Js</span>
                  <span>React Speech Recognition</span>
                </div>
                <div className="list-btn">
                  <a
                    className="btn"
                    href="https://ecommerce-decorarion.netlify.app"
                  >
                    Live Demo
                  </a>
                  <div className="btn" onClick={() => handleShow("decor")}>
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
