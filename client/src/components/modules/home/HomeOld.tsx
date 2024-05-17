import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import RoutingList from '../../../utils/RoutingList';
// import './homeStyles.module.scss'
import './style.css'

const Home = () => {
  const location = useLocation();

  return (
    <div className='home'>
      <div id="menu-btn" className="fas fa-bars"></div>

      <header className="header">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://metrouni.edu.bd/"
          className="logo"
        >
          <i className="fa-solid fa-graduation-cap"></i> MU Web-Mentor
        </a>

        <nav className="navbar">
          <a href="#home">
            <i className="fas fa-angle-right"></i>home
          </a>
          <a href="#statistics">
            <i className="fas fa-angle-right"></i>Statistics
          </a>
          <a href="#about">
            <i className="fas fa-angle-right"></i>about
          </a>
          <a href="#schoolsofstudies">
            <i className="fas fa-angle-right"></i>Schools of Studies
          </a>
          <a href="#departments">
            <i className="fas fa-angle-right"></i>Departments
          </a>
          <a href="#programmes">
            <i className="fas fa-angle-right"></i>programmes
          </a>
          <a href="#achievements">
            <i className="fas fa-angle-right"></i>achievements
          </a>
          <a href="#contact">
            <i className="fas fa-angle-right"></i>contact
          </a>
          <a href="#" id="chatButton">
            <i className="fas fa-angle-right"></i>mu chat bot
          </a>

          <div id="chatPopup" className="chat-popup">
            <div className="chat-header">
              <h2>Chat Bot</h2>
              <span id="closeChat" className="close">
                &times;
              </span>
            </div>
            <div className="chat-body">
              <div id="chatMessages" className="chat-messages"></div>
            </div>
            <div className="chat-footer">
              <input type="text" id="userInput" placeholder="Type a message..." />
              <button id="sendButton">Send</button>
            </div>
          </div>
        </nav>

        <div className="share">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/metropolitanuniversity/"
            className="fab fa-facebook"
          ></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/school/metropolitanuniversitysylhet/"
            className="fab fa-linkedin"
          ></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/metropolitanuniversity/?igsh=azNobDFrbGxrd2J6"
            className="fab fa-instagram"
          ></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="fab fa-twitter"
          ></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/MetropolitanUniversityBangladesh"
            className="fab fa-youtube"
          ></a>
        </div>
        <p className="credit">
          created by<span> Moon-Prokrity-Meem</span> || all rights reserved!
        </p>
      </header>

      <section className="home" id="home">
        <div className="image">
          <img src="img/home4.jpg" alt="" />
        </div>

        <div className="content">
          <span>MU WEB MENTOR</span>
          <h3>
            education, not just a degree. A better learning future starts here,{' '}
            <a href="#schoolsofstudies">Get started.</a>
          </h3>
          <p> Metropolitan University, Bangladesh</p>

          <a href="#" className="btn">
            Login
          </a>
        </div>
      </section>

      <section id="statistics">
        <div className="heading">
          <span>University Statistics at a Glance!</span>
          <h4>Top Ranked Private University in Bangladesh</h4>
        </div>

        <div className="info-container">
          <div className="box">
            <i className="fa-solid fa-trophy"></i>
            <div className="info">
              <h3>22+</h3>
              <p>Years of success</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-laptop-code"></i>
            <div className="info">
              <h3>5000+</h3>
              <p>Current Students</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-user-graduate"></i>
            <div className="info">
              <h3>3000+</h3>
              <p>Allumni</p>
            </div>
          </div>

          <div className="box">
            <i className="fa-solid fa-people-group"></i>
            <div className="info">
              <h3>200+</h3>
              <p>Faculty and Staff</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-grid">
          <div className="history">
            <div className="history-content">
              <h2>History</h2>
              <p>
                Toufique Rahman Chowdhury, a renowned banker and entrepreneur, and other
                educationists initiated the establishment of Metropolitan University in
                Bangladesh in 2003. The university aimed to provide quality tertiary
                education at an affordable cost, catering to the growing demand for
                skilled manpower in developing countries. The university began with 17
                students in Business Administration and Computer Science & Engineering
                departments, offering both undergraduate and Master's degrees. Over the
                years, the university has grown to over 3500 students pursuing
                undergraduate and Master's degrees in various subjects, demonstrating
                the university's commitment to providing quality education at an
                affordable cost.
              </p>
            </div>
            <div className="history-image">
              <img src="img/home4.jpg" alt="" />
            </div>
          </div>

          <div className="about-item">
            <div className="image">
              <img src="img/chairman.jpg" alt="" />
            </div>
            <div className="content">
              <span>The Founder & Chairman</span>
              <h3>Dr. Toufique Rahman Chowdhury</h3>
            </div>
          </div>

          <div className="about-item">
            <div className="image">
              <img src="img/vc.jpg" alt="" />
            </div>
            <div className="content">
              <span>The Vice-Chancellor</span>
              <h3>Professor Dr. Mohammad Jahirul Hoque</h3>
            </div>
          </div>

          <div className="history">
            <div className="history-image">
              <img src="img/campus.jpg" alt="" />
            </div>

            <div className="history-content">
              <h2>Campus</h2>
              <p>
                Initially, the university started its operation in its city campus located
                at the heart of Sylhet city. With a space of 50,000+ sft. the city campus
                at present houses six academic departments and eight undergraduate and
                Master’s programmes. However, in a bid to keep pace with the burgeoning
                numbers of students, the university’s permanent campus is being built on
                a land area of 8.5 acres. Situated outside the city, the permanent campus
                would be the most comprehensive and architecturally iconic campus in the
                region, and is expected to be operational by December 2018.
              </p>
            </div>
          </div>

          <div className="history">
            <div className="history-content">
              <h2>Vison & Mission</h2>
              <p>
                The university's vision is to become a globally recognized teaching and
                research institution, offering innovative education, knowledge creation,
                and community engagement. Its mission is to provide students with
                academic excellence in various subjects, focusing on moral values,
                ethics, self-respect, and patriotism, preparing them for academic,
                personal, and career goals.
              </p>
            </div>
            <div className="history-image">
              <img src="img/vision.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="schools" id="schoolsofstudies">
        <div className="heading">
          <span>Our University Has</span>
          <h3>Four Schools of Studies</h3>
        </div>

        <div className="box-container">
          <div className="box">
            <i className="fa-solid fa-gear"></i>
            <h3>SCHOOL OF SCIENCE & TECHNOLOGY</h3>
            <p>
              The School is a discipline devoted to the study and advancement of
              computational methods and data analysis techniques also provides computing
              resources for research.
            </p>
          </div>

          <div className="box">
            <i className="fa-solid fa-toolbox"></i>
            <h3>SCHOOL OF BUSINESS & ECONOMICS</h3>
            <p>
              The School was started in the year 2003 with 49 Students with the objective
              of giving quality education and to enable the student community.
            </p>
          </div>

          <div className="box">
            <i className="fa-solid fa-scale-balanced"></i>
            <h3>SCHOOL OF LAW</h3>
            <p>
              The School is focused on producing litigation specialists, corporate
              lawyers, mediation & arbitration experts, and professionals policy makers
            </p>
          </div>

          <div className="box">
            <i className="fa-solid fa-book"></i>
            <h3>SCHOOL OF HUMANITIES & SOCIAL SCIENCES</h3>
            <p>
              The School has been established to understand how societies function in
              local and global settings and learn about the forces and events shaping the
              world.
            </p>
          </div>
        </div>
      </section>

      <section className="schools" id="departments">
        <div className="heading">
          <h3>Departments</h3>
        </div>

        <div className="box-container">
          <div className="box">
            <i className="fa-solid fa-computer"></i>
            <h3>Computer science and Engineering</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-floppy-disk"></i>
            <h3>Software Engineering</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-robot"></i>
            <h3> Electrical & Electronic Engineering</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-business-time"></i>
            <h3>Business Administration</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-square-poll-vertical"></i>
            <h3> Economics</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-book-open-reader"></i>
            <h3>English</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-building-columns"></i>
            <h3> Law & Justice</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-newspaper"></i>
            <h3> Journalism and Media Studies (proposed) </h3>
          </div>
        </div>
      </section>

      <section className="programmes" id="programmes">
        <div className="heading">
          <h3>Programmes</h3>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="content">
              <h3>Honours Programmes</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="list">
                <p>
                  <i className="fas fa-check"></i>BSc. in Computer Science & Engineering
                </p>
                <p>
                  <i className="fas fa-check"></i>BSc. in Software Engineering
                </p>
                <p>
                  <i className="fas fa-check"></i>BSc. in EEE
                </p>
                <p>
                  <i className="fas fa-check"></i>B.Sc. Engg. in ETE*
                </p>
                <p>
                  <i className="fas fa-check"></i>B.A. (Hons.) in English
                </p>
                <p>
                  <i className="fas fa-check"></i>BBA
                </p>
                <p>
                  <i className="fas fa-check"></i>BSS in Economics
                </p>
                <p>
                  <i className="fas fa-check"></i>LL.B. (Hons.)
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://metrouni.edu.bd/sites/admission/undergraduate"
              >
                See Details
              </a>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <h3>Masters Programmes</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="list">
                <p>
                  <i className="fas fa-check"></i>MBA (Regular)
                </p>
                <p>
                  <i className="fas fa-check"></i>MBA (General)
                </p>
                <p>
                  <i className="fas fa-check"></i>M.A. in English (Preliminary & Final)
                </p>
                <p>
                  <i className="fas fa-check"></i>M.A. in English (Final)*
                </p>
                <p>
                  <i className="fas fa-check"></i>LL.M. (1 Year)
                </p>
                <p>
                  <i className="fas fa-check"></i>LL.M. (2 Year)
                </p>
                <p>
                  <i className="fas fa-check"></i>MSc. in MIS
                </p>
                <p>
                  <i className="fas fa-check"></i>MSS in Economics
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://metrouni.edu.bd/sites/admission/graduate"
              >
                See Details
              </a>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <h3>Short Programmes</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="list">
                <p>
                  <i className="fas fa-check"></i>Android Application Development
                </p>
                <p>
                  <i className="fas fa-check"></i>Microcontroller Programming
                </p>
                <p>
                  <i className="fas fa-check"></i>Journalism and Media Studies
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://metrouni.edu.bd/sites/admission/short-course"
              >
                See Details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="heading">
          <h3>Students achievements</h3>
        </div>

        <div className="achievements-container">
          <div className="box">
            <img src="img/adnan.jpg" alt="" />
            <div className="info">
              <h3>Nafiul Adnan Chowdhury</h3>
              <p>Site reliable engineer</p>
              <i className="fa-brands fa-google"></i>
            </div>
          </div>

          <div className="box">
            <img src="img/emrul.jpg" alt="" />
            <div className="info">
              <h3>Emrul Chowdhury</h3>
              <p>Software developer engineer</p>
              <i className="fa-brands fa-amazon"></i>
            </div>
          </div>

          <div className="box">
            <img src="img/rafat.jpg" alt="" />
            <div className="info">
              <h3>Majharul Islam Rafat</h3>
              <p>Software engineer</p>
              <i>agoda</i>
            </div>
          </div>

          <div className="box">
            <img src="img/amanur.jpg" alt="" />
            <div className="info">
              <h3>Amanur Rahman</h3>
              <p>Software engineer</p>
              <i className="fa-brands fa-google"></i>
            </div>
          </div>

          <div className="box">
            <img src="img/shuvo.jpg" alt="" />
            <div className="info">
              <h3>Foysol Ahmed Shuvo</h3>
              <p>Software engineer</p>
              <i>agoda</i>
            </div>
          </div>

          <div className="box">
            <img src="img/nintu.jpg" alt="" />
            <div className="info">
              <h3>Nintu Tarafder</h3>
              <p>Area manager of robotics operations</p>
              <i className="fa-brands fa-amazon"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="heading">
          <h3>contact</h3>
        </div>

        <div className="row">
          <div className="contact-info-container">
            <div className="box">
              <i className="fas fa-phone"></i>
              <div className="info">
                <h3>phone:</h3>
                <p>+88 01313 050044</p>
                <p>+88 01313 050066</p>
              </div>
            </div>

            <div className="box">
              <i className="fas fa-envelope"></i>
              <div className="info">
                <h3>email:</h3>
                <p>info@metrouni.edu.bd</p>
              </div>
            </div>

            <div className="box">
              <i className="fas fa-map"></i>
              <div className="info">
                <h3>address:</h3>
                <p>Bateshwar, Sylhet-3104, Bangladesh</p>
              </div>
            </div>

            <div className="box">
              <i className="fa-solid fa-globe"></i>
              <div className="info">
                <h3>Website:</h3>
                <p>metrouni.edu.bd</p>
              </div>
            </div>

            <div className="share">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/metropolitanuniversity/"
                className="fab fa-facebook"
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/school/metropolitanuniversitysylhet/"
                className="fab fa-linkedin"
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/metropolitanuniversity/?igsh=azNobDFrbGxrd2J6"
                className="fab fa-instagram"
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="fab fa-twitter"
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/MetropolitanUniversityBangladesh"
                className="fab fa-youtube"
              ></a>

              <p className="credit">
                © Metropolitan University 2024 || all rights reserved!
              </p>
            </div>
          </div>

          <div className="content">
            <span>MU WEB MENTOR</span>
            <h3>
              To get more details about{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://metrouni.edu.bd/"
              >
                <br />
                Metropolitan University, Bangladesh
              </a>
            </h3>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://metrouni.edu.bd/"
              className="btn"
            >
              Visit
            </a>

            <h3>
              For admission details{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://metrouni.edu.bd/sites/admission/online-admission-form"
              >
                <br />
                click here
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
