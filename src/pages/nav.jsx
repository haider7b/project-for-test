import React from "react";
import "./css/nav.css";
import codingHubLogo from "../assets/imgs/CodingHub.png"
import menuIcon from "../assets/imgs/icons8-menu.svg";
//import closeIcon from "../assets/imgs/icons8-close.svg";
function Nav() {
    return (
        <nav className="nav text-white" id="home">
            <div className="flex items-center">
                <a href="#home">
                    <img src={codingHubLogo} alt="CodingHub Logo" className="logo" /> CodingHub
                </a>
                <button className="menu"
                    onClick={() => {}}
                >
                    <img src={menuIcon} alt="Menu Icon" />
                </button>
            </div>      
            <ul className="list flex gap-4">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
