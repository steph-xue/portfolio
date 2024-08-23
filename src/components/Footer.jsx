import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="footer">
            <p className="copyright">© 2024 - Stephanie Xue</p>
            <div className="icons">
                <a className="icon-link" href="https://github.com/steph-xue">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
                <a className="icon-link" href="https://www.linkedin.com/in/stephanie-x-639182188/">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
                <a className="icon-link" href="https://www.instagram.com/stephxue_">
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
                <a className="icon-link" href="mailto:stephaniexue3@gmail.com">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </a>
            </div>
            
        </footer>
    );
}

export default Footer;