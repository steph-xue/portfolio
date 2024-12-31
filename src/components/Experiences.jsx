import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import hData from "../experiences-data/healthcare-data";
import rData from "../experiences-data/research-data";
import aData from "../experiences-data/awards-data";

function Experiences(props) {

    // Reverse the healthcare data array once during the initial state setup
    const [healthcareData] = React.useState(() => hData.slice().reverse());

    // Reverse the research data array once during the initial state setup
    const [researchData] = React.useState(() => rData.slice().reverse());

    // Reverse the awards data array once during the initial state setup
    const [awardsData] = React.useState(() => aData.slice().reverse());

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

    const awardsDataElements = awardsData.map((award, index) => {
        return (
            <div
                className="awards-item-container"
                key={award.title + index}
            >
                <div className="awards-item-text">
                    <h2 className="awards-item-title">{award.title}</h2>
                    <ul className="awards-item-description">
                        <li>{award.description}</li>
                    </ul>
                </div>
                <p className="awards-item-date">{award.dates}</p>
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
                        <p className="skills-category-items">React.js, Vite, Bootstrap4, HTML5, CSS3</p>
                    </div>
                    <div className="skills-category skills-backend">
                        <h3 className="skills-category-title">Backend</h3>
                        <p className="skills-category-items">Django, Flask</p>
                    </div>
                    <div className="skills-category skills-development">
                        <h3 className="skills-category-title">Development Practices/Tools</h3>
                        <p className="skills-category-items">RESTful APIs, Git, Github Copilot, VS Code</p>
                    </div>
                    <div className="skills-category skills-storage">
                        <h3 className="skills-category-title">Databases</h3>
                        <p className="skills-category-items">SQL (SQLite)</p>
                    </div>
                    <div className="skills-category skills-design">
                        <h3 className="skills-category-title">Design Tools</h3>
                        <p className="skills-category-items">Figma, Canva, Procreate</p>
                    </div>
                    <div className="skills-category skills-cloud">
                        <h3 className="skills-category-title">Cloud Hosting</h3>
                        <p className="skills-category-items">Netlify, Render</p>
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
                                <li className="education-item-info">Currently attending (expected graduation in 2027)</li>
                            </ul>
                        </div>
                        <p className="education-item-date">2024 - Present</p>
                    </div>
                    <div className="education-item-section">
                        <div className="education-item-description">
                            <p className="education-item-title">Doctor of Pharmacy (PharmD) </p>
                            <ul>
                                <li className="education-item-info">Degree conferred in 2022</li>
                            </ul>
                        </div>
                        <p className="education-item-date">2018 - 2022</p>
                    </div>
                    <div className="education-item-section">
                        <div className="education-item-description">
                            <p className="education-item-title">Bachelor of Science -  Microbiology & Immunology</p>
                            <ul>
                                <li className="education-item-info">Completed 2 years before entering the PharmD program</li>
                            </ul>
                        </div>
                        <p className="education-item-date">2016 - 2018</p>
                    </div>
                </div>
            </div>

            {/* Academic Awards section */}
            <div className={props.darkMode ? "awards experiences-container-dark" : "awards experiences-container-light"}>
                <h2 className="awards-title">
                    Academic Awards
                    <FontAwesomeIcon className="skills-icon" icon={faAward} />
                </h2>
                {awardsDataElements}
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