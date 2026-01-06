import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import wData from "@/tech-work-data/tech-work";
import aData from "@/experiences-data/awards-data";
import hData from "@/experiences-data/healthcare-data";
import rData from "@/experiences-data/research-data";

function Experiences(props) {

    // References to each section for smooth scrolling
    const resumeRef = React.useRef(null);
    const technicalSkillsRef = React.useRef(null);
    const workRef = React.useRef(null);
    const educationRef = React.useRef(null);
    const awardsRef = React.useRef(null);
    const healthcareRef = React.useRef(null);
    const researchRef = React.useRef(null);

    // Function to scroll to a specific section with an optional offset
    function scrollToSection(ref, offset = 100) {
        const topPosition = ref.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: topPosition - offset,
            behavior: 'smooth',
        });
    };

    // Reverse the work data array once during the initial state setup
    const [workData] = React.useState(() => wData.slice().reverse());

    // Reverse the awards data array once during the initial state setup
    const [awardsData] = React.useState(() => aData.slice().reverse());

    // Reverse the healthcare data array once during the initial state setup
    const [healthcareData] = React.useState(() => hData.slice().reverse());

    // Reverse the research data array once during the initial state setup
    const [researchData] = React.useState(() => rData.slice().reverse());

    // Map the work data to create the work elements
    const workDataElements = workData.map((experience, index) => {
        return (
            <div
                className="work-container"
                key={experience.title + index}
            >
                {/* Work text */}
                <div className="work-text">
                    <h2 className="work-subtitle">{experience.title}</h2>
                    <div className="work-location">
                        <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
                        {experience.location}
                    </div>
                    <p className="work-date">{experience.dates}</p>
                    <ul className="work-description">
                        {experience.description.map((point, index) => (
                            <li key={point + index} className="work-point">{point}</li>
                        ))}
                    </ul>
                    <p className="work-languages">
                            <strong>Languages: </strong>
                            {experience.languages}
                    </p>
                        <div>
                            <p className="work-tools1"><strong>Frameworks/Dependencies/Tools/Databases/APIs/Cloud Services: </strong></p>
                            <p className="work-tools2">{experience.tools}</p>
                        </div>
                </div>

                {/* Work image */}
                <img 
                    src={experience.image} 
                    alt={experience.name} 
                    className="work-image"
                />
        </div>
        );
    });

    // Map the awards data to create the awards elements
    const awardsDataElements = awardsData.map((award, index) => {
        return (
            <div
                className="awards-container"
                key={award.title + index}
            >
                <div className="awards-text">
                    <h2 className="awards-subtitle">{award.title}</h2>
                    <ul className="awards-description">
                        <li>{award.description}</li>
                    </ul>
                </div>
                <p className="awards-date">{award.dates}</p>
            </div>
        );
    });

    // Map the healthcare data to create the healthcare elements
    const healthcareDataElements = healthcareData.map((experience, index) => {
        const isLast = index === healthcareData.length - 1;

        return (
            <div
                className="experience-container"
                key={experience.title + index}
            >
                <div className="experience-text">
                    <h2 className="experience-subtitle">{experience.title}</h2>
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
                    {!isLast && <div className="separator-line2" aria-hidden="true"></div>}
                </div>
            </div>
        );
    });

    // Map the research data to create the research elements
    const researchDataElements = researchData.map((experience, index) => {
        const isLast = index === researchData.length - 1;

        return (
            <div
                className="experience-container"
                key={experience.title + index}
            >
                <div className="experience-text">
                    <h2 className="experience-subtitle">{experience.title}</h2>
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
                    {!isLast && <div className="separator-line2" aria-hidden="true"></div>}
                </div>
            </div>
        );
    });

    // Render the Experiences component
    return (
        <div className="experiences-page">
            <h1 className="experiences-title">Experiences</h1>

            {/* Navigation links */}
            <div className={props.darkMode ? "experiences-nav nav-dark" : "experiences-nav nav-light"}>
                <p onClick={() => scrollToSection(resumeRef)} className="nav-link experiences-nav-link">Resume</p>
                <p onClick={() => scrollToSection(technicalSkillsRef)} className="nav-link experiences-nav-link">Technical Skills</p>
                <p onClick={() => scrollToSection(workRef)} className="nav-link experiences-nav-link">Work Experience</p>
                <p onClick={() => scrollToSection(educationRef)} className="nav-link experiences-nav-link">Education & Awards</p>
                <p onClick={() => scrollToSection(healthcareRef)} className="nav-link experiences-nav-link">Healthcare</p>
                <p onClick={() => scrollToSection(researchRef)} className="nav-link experiences-nav-link">Research</p>
            </div>

            {/* Resume section */}
            <div 
                ref={resumeRef} 
                className={props.darkMode ? "resume experiences-container item-container-dark" : "resume experiences-container item-container-light"}
            >
                <h2 className="resume-title">
                    Resume
                    <FontAwesomeIcon className="skills-icon" icon={faFile} />
                </h2>
                <a 
                    href="/files/resume.pdf"
                    className="resume-text"
                >
                    Click here to view!
                </a>
            </div>

            {/* Technical skills section */}
            <div 
                ref={technicalSkillsRef} 
                className={props.darkMode ? "technical-skills experiences-container item-container-dark" : "technical-skills experiences-container item-container-light"}
            >
                <h2 className="technical-skills-title">
                    Technical Skills 
                    <FontAwesomeIcon className="skills-icon" icon={faComputer} />
                </h2>
                <div className="separator-line1"></div>
                <div className="skills-text">
                    <div className="skills-category skills-languages">
                        <h3 className="skills-category-title">Languages</h3>
                        <p className="skills-category-items">Java, Python, C++, C, JavaScript, TypeScript, XML, HTML5, CSS3</p>
                    </div>
                    <div className="skills-category skills-frontend">
                        <h3 className="skills-category-title">Frontend Technologies</h3>
                        <p className="skills-category-items">React.js, Vite, Bootstrap4, Java Swing</p>
                    </div>
                    <div className="skills-category skills-backend">
                        <h3 className="skills-category-title">Backend Technologies</h3>
                        <p className="skills-category-items">Node.js, Express,js, Django, Flask</p>
                    </div>
                    <div className="skills-category skills-mobile">
                        <h3 className="skills-category-title">Mobile Development</h3>
                        <p className="skills-category-items">React Native, Expo Go</p>
                    </div>
                    <div className="skills-category skills-storage">
                        <h3 className="skills-category-title">Database Technologies</h3>
                        <p className="skills-category-items">SQL (SQLite)</p>
                    </div>
                    <div className="skills-category skills-ci-cd">
                        <h3 className="skills-category-title">CI/CD Tools</h3>
                        <p className="skills-category-items">TeamCity</p>
                    </div>
                    <div className="skills-category skills-development">
                        <h3 className="skills-category-title">Development Tools</h3>
                        <p className="skills-category-items">Gradle, JUnit, Launch4j, Git, GitHub, Bitbucket, VS Code, IntelliJ IDEA, Arduino IDE, Bash/Shell, Windows Batch</p>
                    </div>
                    <div className="skills-category skills-practices">
                        <h3 className="skills-category-title">Programming Practices</h3>
                        <p className="skills-category-items">Object Oriented Programming, Data Structures & Algorithms, RESTful APIs, Unit Testing, Debugging, Multithreading, Agile Development</p>
                    </div>
                    <div className="skills-category skills-design">
                        <h3 className="skills-category-title">Design & Creative Tools</h3>
                        <p className="skills-category-items">Figma, Canva, Adobe Photoshop, Procreate, Aseprite</p>
                    </div>
                    <div className="skills-category skills-cloud">
                        <h3 className="skills-category-title">Cloud Deployment & Hosting</h3>
                        <p className="skills-category-items">Netlify, Render</p>
                    </div>
                </div>
            </div>

            {/* Work Experience section */}
            <div 
                ref={workRef} 
                className={props.darkMode ? "work experiences-container item-container-dark" : "work experiences-container item-container-light"}
            >
                <h2 className="work-title">
                    Work Experience
                    <FontAwesomeIcon className="skills-icon laptop-icon" icon={faLaptop} />
                </h2>
                <div className="separator-line1"></div>
                {workDataElements}
            </div>

            {/* Education section */}
            <div 
                ref={educationRef} 
                className={props.darkMode ? "education experiences-container item-container-dark" : "education experiences-container item-container-light"}
            >
                <h2 className="education-title">
                    Education
                    <FontAwesomeIcon className="skills-icon" icon={faUserGraduate} />
                </h2>
                <div className="separator-line1"></div>
                <div className="education-text">
                    <div className="education-university-title">
                        <h3 className="education-university-name">The University of British Columbia (UBC)</h3>
                        <p className="education-university-location">
                            <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
                            Vancouver, BC, Canada
                        </p>
                    </div>
                    <div className="education-section">
                        <div className="education-description">
                            <p className="education-subtitle">Bachelor of Computer Science (BCS) </p>
                            <ul>
                                <li className="education-info">Relevant coursework: Software Construction, Computer Systems, Data Structures & Algorithms, Models of Computation</li>
                                <li className="education-info">Organizations: UBC Science Co-op, UBC Tri-Mentorship Program</li>
                            </ul>
                        </div>
                        <p className="education-date">2024 - May 2027</p>
                    </div>
                    <div className="education-section">
                        <div className="education-description">
                            <p className="education-subtitle">Doctor of Pharmacy (PharmD) </p>
                            <ul>
                                <li className="education-info">Degree conferred in 2022</li>
                            </ul>
                        </div>
                        <p className="education-date">2018 - 2022</p>
                    </div>
                    <div className="education-section">
                        <div className="education-description">
                            <p className="education-subtitle">Bachelor of Science -  Microbiology & Immunology</p>
                            <ul>
                                <li className="education-info">Completed 2 years before entering the PharmD program</li>
                            </ul>
                        </div>
                        <p className="education-date">2016 - 2018</p>
                    </div>
                </div>
            </div>

            {/* Academic Awards section */}
            <div 
                ref={awardsRef} 
                className={props.darkMode ? "awards experiences-container item-container-dark" : "awards experiences-container item-container-light"}
            >
                <h2 className="awards-title">
                    Academic Awards
                    <FontAwesomeIcon className="skills-icon" icon={faAward} />
                </h2>
                <div className="separator-line1"></div>
                {awardsDataElements}
            </div>

            {/* Healthcare experiences section */}
            <div 
                ref={healthcareRef} 
                className={props.darkMode ? "healthcare experiences-container item-container-dark" : "healthcare experiences-container item-container-light"}
            >
                <h2 className="healthcare-title">
                    Healthcare Experience
                    <FontAwesomeIcon className="skills-icon health-icon" icon={faSuitcaseMedical} />
                </h2>
                <div className="separator-line1"></div>
                {healthcareDataElements}
            </div>

            {/* Research experiences section */}
            <div 
                ref={researchRef} 
                className={props.darkMode ? "research experiences-container item-container-dark" : "research experiences-container item-container-light"}
            >
                <h2 className="research-title">
                    Research Experience
                    <FontAwesomeIcon className="skills-icon" icon={faBookOpen} />
                </h2>
                <div className="separator-line1"></div>
                {researchDataElements}
            </div>
        </div>
    );
 }

export default Experiences;