import React from "react"

function About() {

    // Render the About component
    return (
        <div className="about-page">

            {/* About main title */}
            <h1 className="about-title">I'm Stephanie.</h1>

            {/* About summary */}
            <div className="about-container-1">
                <img src="/images/profile-pic.png" alt="profile-pic" className="profile-image" />
                <div className="about-container-1-text">
                    <h2 className="about-subtitle">I'm an aspiring software developer based in Vancouver, Canada.</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            {/* About interests */}
            <div className="about-container-2">
                <img src="/images/profile-pic.png" alt="profile-pic" className="profile-image" />
                <div className="about-container-2-text">
                    <h2 className="about-subtitle">I'm an aspiring software developer based in Vancouver, Canada.</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            {/* About aspirations */}
            <div className="about-container-3">
                <img src="/images/profile-pic.png" alt="profile-pic" className="profile-image" />
                <div className="about-container-3-text">
                    <h2 className="about-subtitle">I'm an aspiring software developer based in Vancouver, Canada.</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;