import React from "react"

function Projects() {

    // Render the Projects component
    return (
        <div className="projects-page">

            {/* Projects main title */}
            <h1 className="projects-title">Projects</h1>

            {/* Projects subtitle */}
            <h2 className="projects-subtitle">Here are some of the projects I have been working on: </h2>

            {/* Project section */}
            <div className="project-container">
                <img src="/images/profile-pic.png" alt="profile-pic" className="profile-image" />
                <div className="about-container-1-text">
                    <h2 className="about-subtitle">I'm an aspiring software developer based in Vancouver, Canada.</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;