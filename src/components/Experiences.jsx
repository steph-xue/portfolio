import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import hData from "../experiences-data/healthcare-data";
import rData from "../experiences-data/research-data";

function Experiences(props) {

    // Reverse the healthcare data array once during the initial state setup
    const [healthcareData] = React.useState(() => hData.slice().reverse());

    // Reverse the research data array once during the initial state setup
    const [researchData] = React.useState(() => rData.slice().reverse());

    // Map the healthcare data to create the healthcare elements
    const healthcareDataElements = healthcareData.map((experience, index) => {
        return (
            <div
                className="experience-container"
                key={experience.title + index}
            >
                <div className="experience-text">
                    <h2 className="experience-title">{experience.title}</h2>
                    <div className="experience-location">
                        <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
                        {experience.location}
                    </div>
                    <p className="experience-date">{experience.dates}</p>
                    <ul className="experience-description">
                        {experience.description.map((point, index) => (
                            <li key={point + index} className="experience-point">{point}</li>
                        ))}
                    </ul>
                    <div className="separator-line2"></div>
                </div>
            </div>
        );
    });

    // Map the research data to create the research elements
    const researchDataElements = researchData.map((experience, index) => {
        return (
            <div
                className="experience-container"
                key={experience.title + index}
            >
                <div className="experience-text">
                    <h2 className="experience-title">{experience.title}</h2>
                    <div className="experience-location">
                        <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
                        {experience.location}
                    </div>
                    <p className="experience-date">{experience.dates}</p>
                    <ul className="experience-description">
                        {experience.description.map((point, index) => (
                            <li key={point + index} className="experience-point">{point}</li>
                        ))}
                    </ul>
                    <div className="separator-line2"></div>
                </div>
            </div>
        );
    });

    // Render the Experiences component
    return (
        <div className="experiences-page">
            <h1 className="experiences-title">Experiences</h1>

            {/* Technical skills section */}
            <div className={props.darkMode ? "technical-skills experiences-container-dark" : "technical-skills experiences-container-light"}>
                <h2 className="technical-skills-title">
                    Technical Skills
                    <FontAwesomeIcon className="skills-icon" icon={faComputer} />
                </h2>
                <div className="skills-text">
                    <div className="skills-category skills-languages">
                        <h3 className="skills-category-title">Programming Languages</h3>
                        <p className="skills-category-items">JavaScript, Python, C</p>
                    </div>
                    <div className="skills-category skills-frontend">
                        <h3 className="skills-category-title">Frontend</h3>
                        <p className="skills-category-items">HTML5, CSS3, React, Bootstrap</p>
                    </div>
                    <div className="skills-category skills-backend">
                        <h3 className="skills-category-title">Backend</h3>
                        <p className="skills-category-items">Django, Flask</p>
                    </div>
                    <div className="skills-category skills-development">
                        <h3 className="skills-category-title">Development Practices/Tools</h3>
                        <p className="skills-category-items">Git, Vite</p>
                    </div>
                    <div className="skills-category skills-storage">
                        <h3 className="skills-category-title">Storage</h3>
                        <p className="skills-category-items">SQL (SQLite), Firebase, Dropbox, Google Drive</p>
                    </div>
                    <div className="skills-category skills-design">
                        <h3 className="skills-category-title">Design Tools</h3>
                        <p className="skills-category-items">Figma, Canva, Procreate</p>
                    </div>
                    <div className="skills-category skills-cloud">
                        <h3 className="skills-category-title">Cloud Hosting</h3>
                        <p className="skills-category-items">Netlify</p>
                    </div>
                    <div className="skills-category skills-collaboration">
                        <h3 className="skills-category-title">Collaboration</h3>
                        <p className="skills-category-items">Github, Trello, Google Drive, Dropbox</p>
                    </div>
                </div>
            </div>

            {/* Education section */}
            <div className={props.darkMode ? "education experiences-container-dark" : "education experiences-container-light"}>
                <h2 className="education-title">
                    Education
                    <FontAwesomeIcon className="skills-icon" icon={faUserGraduate} />
                </h2>
                <div className="education-text">
                    <div className="education-university-title">
                        <h3 className="education-university-name">The University of British Columbia (UBC)</h3>
                        <p className="education-university-location">
                            <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
                            Vancouver, BC, Canada
                        </p>
                    </div>
                    <div className="separator-line1"></div>
                    <div className="education-item-section">
                        <div className="education-item-description">
                            <p className="education-item-title">Bachelor of Computer Science (BCS) </p>
                            <ul>
                                <li className="education-item-info">Currently attending</li>
                            </ul>
                        </div>
                        <p className="education-item-date">2024 - Present</p>
                    </div>
                    <div className="education-item-section">
                        <div className="education-item-description">
                            <p className="education-item-title">Doctor of Pharmacy (PharmD) </p>
                            <ul>
                                <li className="education-item-info">Awards & Scholarships: </li>
                                <li className="awards">Dean’s Honours List (standing of at least 80%), Trek Excellence Scholarship (top 5% of the undergraduate year), London Drugs Limited 60th Anniversary Undergraduate Scholarship, Dean of Pharmaceutical Sciences Scholarship, Marion L. Pearson Scholarship in Pharmaceutical Sciences, James M. Orr Scholarship</li>
                            </ul>
                        </div>
                        <p className="education-item-date">2018 - 2022</p>
                    </div>
                    <div className="education-item-section">
                        <div className="education-item-description">
                            <p className="education-item-title">Bachelor of Science -  Microbiology & Immunology</p>
                            <ul>
                                <li className="education-item-info">Completed 2 years before entering the PharmD program</li>
                                <li className="education-item-info">Awards & Scholarships: </li>
                                <li className="awards">Dean’s Honours List (standing of at least 80%)</li>
                            </ul>
                        </div>
                        <p className="education-item-date">2016 - 2018</p>
                    </div>
                </div>
            </div>

            {/* Healthcare experiences section */}
            <div className={props.darkMode ? "healthcare experiences-container-dark" : "healthcare experiences-container-light"}>
                <h2 className="healthcare-title">
                    Healthcare Experience
                    <FontAwesomeIcon className="skills-icon" icon={faUserDoctor} />
                    <FontAwesomeIcon className="skills-icon health-icon" icon={faSuitcaseMedical} />
                </h2>
                {healthcareDataElements}
            </div>

            {/* Research experiences section */}
            <div className={props.darkMode ? "research experiences-container-dark" : "research experiences-container-light"}>
                <h2 className="research-title">
                    Research Experience
                    <FontAwesomeIcon className="skills-icon" icon={faBookOpen} />
                </h2>
                {researchDataElements}
            </div>
        </div>
    );
 }

export default Experiences;