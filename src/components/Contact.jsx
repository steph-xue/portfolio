import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Contact(props) {   

    // Render the Contact component
    return (
        <div className="contact-page">

            {/* Contact title and description */}
            <h1 className="contact-title">Contact Me.</h1>
            <p className="contact-description">
                If you'd like to get in touch, feel free to send me an email or connect with me on LinkedIn, Github, or Instagram. I'm always open to discussing new projects and networking with like-minded individuals.
            </p>

            {/* Contact buttons and image */}
            <div className="contact-image-button-container">
                <img className="contact-image" src="/images/contact.png" alt="contact" />
                <div className="contact-buttons">
                    <a className="contact-button" href="mailto:stephaniexue3@gmail.com">
                        <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                        <span className="head-contact-label"><strong>Email </strong></span> 
                        <span className="sm-contact-label">- stephaniexue3@gmail.com</span>
                    </a>
                    <a className="contact-button" href="https://github.com/steph-xue">
                        <FontAwesomeIcon className="contact-icon" icon={faGithub} />
                        <span className="head-contact-label"><strong>Github </strong></span>
                        <span className="sm-contact-label">- www.github.com/steph-xue</span>
                    </a>
                    <a className="contact-button" href="https://www.linkedin.com/in/stephanie-x-639182188/">
                        <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
                        <span className="head-contact-label"><strong>Linkedin </strong></span>
                        <span className="sm-contact-label">- www.linkedin.com/in/stephanie-x-639182188</span>
                    </a>
                    <a className="contact-button" href="https://www.instagram.com/stephxue_">
                        <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
                        <span className="head-contact-label"><strong>Instagram </strong></span>
                        <span className="sm-contact-label">- www.instagram.com/stephxue_</span>
                    </a>
                </div>
            </div>

            {/* Contact form */}
            <div className="contact-form-container">
                <h2 className="contact-form-title">Send Me A Message</h2>
                <div className="contact-line"></div>
                <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="7622f452-4a96-4968-b3dc-5d901386877e" />
                    <div className="contact-form-input-container">
                        <label className="contact-form-label" htmlFor="contact-name">Name:</label>
                        <input className="contact-form-input" type="text" name="name" id="contact-name" placeholder="Name" required />
                    </div>

                    <div className="contact-form-input-container">
                        <label className="contact-form-label" htmlFor="contact-email">Email:</label>
                        <input className="contact-form-input" type="email" name="email" id="contact-email" placeholder="Email" required />
                    </div>

                    <div className="contact-form-input-container">
                        <label className="contact-form-label" htmlFor="contact-message">Message:</label>
                        <textarea className="contact-form-input textarea" name="message" id="contact-message" placeholder="Message" required />
                    </div>

                    <button className="contact-form-button" type="submit">
                        Submit
                        <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;