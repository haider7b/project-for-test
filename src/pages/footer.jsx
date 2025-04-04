import React from "react";
import"./css/footer.css"
import codingHubLogo from "../assets/imgs/CodingHub.png"
import igIcon from "../assets/imgs/ig-instagram-icon.svg"
import linkedinIcon from "../assets/imgs/linkedin-app-icon.svg"
import githubIcon from "../assets/imgs/github-icon.svg"
import gmailIcon from "../assets/imgs/gmail-icon.svg"

const Footer = () => {
    return (
        <footer>
        <div className="social-links" id="Contact">

            <a href="https://www.instagram.com/coding._hub7" target="_blank"><img
                    src={codingHubLogo}></img>
                Coding
                Hub</a>
            <a href="https://www.instagram.com/haider_cr07" target="_blank"><img
                    src={igIcon}></img>
                الحساب
                الشخصي</a>
            <a href="https://www.linkedin.com/in/haider-bassem-al-asadi-2471a728b" target="_blank">
                <img src={linkedinIcon}></img> LinkedIn</a>
            <a href="https://github.com/haider7b" target="_blank"><img src={githubIcon}></img> GitHub</a>
            <a href="mailto:alasadyhydr413@gmail.com" target="_blank"><img src={gmailIcon}></img> Email</a>
        </div>
        <p>&copy; 2025 CodingHub. جميع الحقوق محفوظة.</p>
    </footer>
    )
}

export default Footer;