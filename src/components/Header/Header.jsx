import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../assets/aboutme.jpg";
import "./Header.css";
import { TfiEmail } from "react-icons/tfi";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <div className="header-container">
            <img
                src={Avatar}
                id="header-avatar"
            />
            <h1>Jennifer Dinh</h1>
            <div className="header-links">
                <Link to="/">About</Link>
                <Link>Resume</Link>
                <Link>Experience</Link>
                <Link>Portfolio</Link>
            </div>
            <div className="header-socials">
                <TfiEmail />
                <SiLinkedin />
                <FaGithub />
            </div>
        </div>
    )
};

export default Header;