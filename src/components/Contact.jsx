import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {   
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me.</h1>
      <p className="contact-description">
        If you'd like to get in touch, feel free to send me an email or connect with me on LinkedIn, Github, or Instagram. I'm always open to discussing new projects and networking with like-minded individuals.
      </p>
      <div className="contact-image-button-container">
        <img className="contact-image" src="/images/contact.png" alt="contact" />
        <div className="contact-buttons">
            <a className="contact-button" href="mailto:stephaniexue3@gmail.com">
                <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                <span><strong>Email </strong></span> 
                <span className="sm-contact-label">- stephaniexue3@gmail.com</span>
            </a>
            <a className="contact-button" href="https://github.com/steph-xue">
                <FontAwesomeIcon className="contact-icon" icon={faGithub} />
                <span><strong>Github </strong></span>
                <span className="sm-contact-label">- www.github.com/steph-xue</span>
            </a>
            <a className="contact-button" href="https://www.linkedin.com/in/stephanie-x-639182188/">
                <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
                <span><strong>Linkedin </strong></span>
                <span className="sm-contact-label">- www.linkedin.com/in/stephanie-x-639182188</span>
            </a>
            <a className="contact-button" href="https://www.instagram.com/stephxue_">
                <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
                <span><strong>Instagram </strong></span>
                <span className="sm-contact-label">- www.instagram.com/stephxue_</span>
            </a>
        </div>
      </div>
    </div>
    );
}

export default Contact;