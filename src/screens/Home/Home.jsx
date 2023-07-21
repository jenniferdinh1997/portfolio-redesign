import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import Avatar from "../../assets/aboutme.jpg";
import Project1 from "../../assets/fulltank.png";
import { FiExternalLink } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <img src={Avatar} id="header-avatar" alt="" />
        <h1>Jennifer Dinh</h1>
        <div className="header-links">
          <HashLink smooth to="#about-me-hashlink">About</HashLink>
          <Link>Resume</Link>
          <HashLink smooth to="#experience-hashlink">Experience</HashLink>
          <HashLink smooth to="#project-hashlink">Projects</HashLink>
        </div>
        <div className="header-socials">
          <Link to="mailto:jenniferdinh1997@gmail.com">
            <TfiEmail />
          </Link>
          <Link to="https://www.linkedin.com/in/dinh-jennifer/" target="_blank">
            <SiLinkedin />
          </Link>
          <Link to="https://github.com/jenniferdinh1997" target="_blank">
            <FaGithub />
          </Link>
        </div>
      </div>

      <div className="about-container">
        <h1 id="about-me-hashlink">About Me</h1>
        <p>
          Back in 2020 I graduated college and had to ask myself what I wanted
          to do with the rest of my life that would bring me both joy and
          satisfaction. Fast forward to today and I've had the privilege of
          building software for a start-up and many side projects of my own.
        </p>
        <p>
          The majority of my days are spent building and perfecting products,
          but when I'm not at the computer you can find me on a run or reading
          the latest thriller.
        </p>

        <h1 id="experience-hashlink">Experience</h1>
        <table className="experience-container">
          <tr>
            <td id="experience-years">
              <p>Aug 2022 - Present</p>
            </td>
            <td id="experience-description">
              <p id="experience-company-name">TomorrowDragon</p>
              <p id="experience-role">Full Stack Engineer</p>
              <p>
                Delivered high-quality production code and spearheaded
                end-to-end software development life cycle with a strong focus
                on quality and efficiency. Ensured the successful implementation
                of all main functionalities (account management, authentication, 
                financial records, delivery order flow) and orchestrated the seamless
                integration of individual components.
              </p>
              <div id="experience-skills">
                <span>React</span>
                <span>Typescript</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>Jooq</span>
              </div>
            </td>
          </tr>
        </table>

        <h1 id="project-hashlink">Projects</h1>
        <table className="projects-container">
          <tr id="project-section">
            <td id="projects-screenshot"></td>
            <td>
              <p id="project-name">
                TBD &nbsp; <FiExternalLink />
              </p>
              <p>
                Web scraping application to automate restaurant reservations
                based on a user's Yelp collection.
              </p>
              <div id="experience-skills">
                <span>Django</span>
                <span>Selenium</span>
              </div>
            </td>
          </tr>
          <tr id="project-section">
            <td id="projects-screenshot"></td>
            <td>
              <p id="project-name">
                <Link
                  to="https://on-time-pink.vercel.app/login"
                  target="_blank"
                >
                  Healthshare &nbsp; <FiExternalLink />
                </Link>
              </p>
              <p>
                Inspired by Uber Health, Healthshare is a patient centered
                rideshare application that aims too match patients and drivers
                based on language preferences and accessibility to prevent
                communication barriers and ease transporation obstacles.
              </p>
              <div id="experience-skills">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>AWS</span>
              </div>
            </td>
          </tr>
          <tr id="project-section">
            <td id="projects-screenshot">
              <img
                src={Project1}
                id="project-photo"
                alt="fullTank Project Screenshot"
              />
            </td>
            <td>
              <p id="project-name">
                <Link
                  to="https://github.com/jenniferdinh1997/fullTank"
                  target="_blank"
                >
                  fullTank &nbsp; <FiExternalLink />
                </Link>
              </p>
              <p>
                A gas price tracking applicaiton that aims to give users
                up-to-date pricing information across a network of user-added
                gas stations across the United States.
              </p>
              <div id="experience-skills">
                <span>Django</span>
                <span>PostgreSQL</span>
                <span>Google Maps API</span>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div className="footer-container">
        <p>Built with React.js and deployed on Vercel</p>
      </div>
    </div>
  );
};

export default Home;
