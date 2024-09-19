import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import Avatar from "../../assets/aboutme.jpg";
import Project1 from "../../assets/fulltank.png";
import Project2 from "../../assets/healthshare.png";
import Project3 from "../../assets/resbot.png";
import Project4 from "../../assets/jas.png";
import { FiExternalLink } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Resume from "../../assets/Resume.pdf";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <img src={Avatar} id="header-avatar" alt="" />
        <h1>Jennifer Dinh</h1>
        <div className="header-links">
          <HashLink smooth to="#about-me">
            About
          </HashLink>
          <Link to={Resume} target="_blank">
            Resume
          </Link>
          <HashLink smooth to="#experience">
            Experience
          </HashLink>
          <HashLink smooth to="#project">
            Projects
          </HashLink>
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
        <h1 id="about-me">About Me</h1>
        <p>
          Back in 2020 I graduated UC San Diego and had to ask myself what I wanted
          to do with the rest of my life that would bring me both joy and
          satisfaction. Fast forward to today and I've had the privilege of
          building web and mobile applications in addition to many side projects of my own.
        </p>
        <p>
          The majority of my days are spent building and perfecting products,
          but when I'm not at the computer you can find me on a run or reading
          the latest thriller.
        </p>

        <h1 id="experience">Experience</h1>
        <table className="experience-container">
        <tr>
            <td id="experience-years">
              <p>Jul 2024 - Present</p>
            </td>
            <td id="experience-description">
              <p id="experience-role">Software Engineer</p>
              <p id="experience-company-name">Upgrade Consulting · Remote</p>
              <p>
              </p>
              <p>Projects:</p>
              <p>
                - GameOn: A sports betting app streaming real time game results using
                webhooks and third party APIs (Odds and Stats.inc). Integrated web3 wallet
                allowing users to deposite/withdraw Ethereum tokens.
              </p>
              <div id="experience-skills">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>AWS</span>
              </div>
            </td>
          </tr>
          <tr>
            <td id="experience-years">
              <p>Dec 2023 - Present</p>
            </td>
            <td id="experience-description">
              <p id="experience-role">Software Engineer</p>
              <p id="experience-company-name">Klotofy · Remote</p>
              <p>
                Klotofy is a fashion discovery app dedicated to help you find
                clothes that fit on your body, not the model on the screen.
              </p>
              <p>Notable projects:</p>
              <p>
                - Developed an algorithm to recommend users with the same body
                type and measurements
              </p>
              <p>- Created a rewards system to assist marketing efforts of recruiting 
                content creators by automating point distribution from in app activity
              </p>
              <div id="experience-skills">
                <span>Flutter</span>
                <span>FlutterFlow</span>
                <span>Dart</span>
                <span>Firebase</span>
                <span>Google Cloud Platform</span>
              </div>
            </td>
          </tr>
          <tr>
            <td id="experience-years">
              <p>Jun 2024 - Sep 2024</p>
            </td>
            <td id="experience-description">
              <p id="experience-role">Software Engineer</p>
              <p id="experience-company-name">Mentee · Remote</p>
              <p>
                Mentee is a service helping teenagers build habits and find
                intrinsic motivation through psychology, technology, and
                mentorship.
              </p>
              <div id="experience-skills">
                <span>Flutter</span>
                <span>FlutterFlow</span>
                <span>Dart</span>
                <span>Firebase</span>
                <span>Google Cloud Platform</span>
              </div>
            </td>
          </tr>
          <tr>
            <td id="experience-years">
              <p>Aug 2022 - Nov 2023</p>
            </td>
            <td id="experience-description">
              <p id="experience-role">Full Stack Software Engineer</p>
              <p id="experience-company-name">TomorrowDragon · Remote</p>
              <p>
                I worked with a team of 5 engineers to develop a food delivery
                service application from the ground up. In addition to managing
                the API documentation and assigning backlog tasks, I was heavily
                involved in the creation of the platform and produced over 70%
                of the company's codebase.
              </p>
              <p>Some of the projects that I've worked on include:</p>
              <p>
                - Custom algorithm to determine driver payments and delivery
                assignments based on geographical location and traffic
              </p>
              <p>
                - Integration of Stripe API for payment processing and credit
                card management
              </p>
              <p>- Google/Facebook Single Sign-On</p>
              <p>
                - End to end implementation of all main functionalities (account
                management, authentication, financial records, delivery order
                flow, custom menu creation)
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

        <h1 id="project">Projects</h1>
        <table className="projects-container">
          <tr id="project-section">
            <td id="projects-screenshot">
              <img
                src={Project4}
                id="project-photo"
                alt="ResBot Project Screenshot"
              />
            </td>
            <td>
              <p id="project-name">
                <Link
                  to="https://jaz-portfolio.vercel.app/"
                  target="_blank"
                  id="project-name"
                >
                  Jasmine Li &nbsp; <FiExternalLink />
                </Link>
              </p>
              <p>Custom portfolio website for project management client.</p>
              <div id="experience-skills">
                <span>React.js</span>
              </div>
            </td>
          </tr>
          <tr id="project-section">
            <td id="projects-screenshot">
              <img
                src={Project3}
                id="project-photo-3"
                alt="ResBot Project Screenshot"
              />
            </td>
            <td>
              <p id="project-name">
                <Link
                  to="https://github.com/jenniferdinh1997/reservation-bot"
                  target="_blank"
                  id="project-name"
                >
                  Res Bot &nbsp; <FiExternalLink />
                </Link>
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
            <td id="projects-screenshot">
              <img
                src={Project2}
                id="project-photo"
                alt="Healthshare Project Screenshot"
              />
            </td>
            <td>
              <p id="project-name">
                <Link
                  to="https://on-time-pink.vercel.app/login"
                  target="_blank"
                  id="project-name"
                >
                  Healthshare &nbsp; <FiExternalLink />
                </Link>
              </p>
              <p>
                Inspired by Uber Health, Healthshare is a patient centered
                rideshare application that aims to match patients and drivers
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
                  id="project-name"
                >
                  fullTank &nbsp; <FiExternalLink />
                </Link>
              </p>
              <p>
                A gas price tracking application that aims to give users
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
    </div>
  );
};

export default Home;
