import React from "react"

function Contact() {   
  return (
    <div classname="contact-page">
      <h1 className="contact-title">Contact Me.</h1>
      <p className="contact-description">
        If you'd like to get in touch, feel free to send me an email or connect with me on LinkedIn, Github, or Instagram. I'm always open to discussing new projects and networking with like-minded individuals.
      </p>
      <img className="contact-image" src="/images/contact.png" alt="contact" />
      <div className="contact-buttons">
        <button className="contact-button">Email: stephaniexue3@gmail.com</button>
        <button className="contact-button">Github</button>
        <button className="contact-button">Linkedin</button>
        <button className="contact-button">Instagram</button>
      </div>
    </div>
    );
}

export default Contact;