import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import AOS from 'aos'
import data from "../project-data/project-data";

function Projects(props) {

    // Reverse the project data array once during the initial state setup
    const [projectData] = React.useState(() => data.slice().reverse());

    // Initialize AOS (Animate on Scroll) library
    React.useEffect(() => {
        AOS.init();
    }, []);

    // Map the project data to create the project elements
    const projectDataElements = projectData.map((project, index) => {
        return (
            <div className="project-container" key={project.title + index} data-aos="zoom-in">

                {/* Project text */}
                <div className="project-text">
                    <a className="project-container-link" href="https://github.com/steph-xue/tenzies-game">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <p className="project-languages">
                            <strong>Languages: </strong>
                            {project.languages}
                        </p>
                        <div>
                            <p className="project-additional-info1"><strong>Frameworks/Dependencies/Databases/APIs/Cloud Services: </strong></p>
                            <p className="project-additional-info2">{project.additionalInfo}</p>
                        </div>
                        <p className="project-github">
                            <strong>Github Link: </strong>
                            <a className="github-active-link" href={project.github}>{project.github}</a>
                        </p>
                        { project.activeLink &&
                            <p className="project-link">
                                <strong>Try It Out Here: </strong>
                                <a className="project-active-link" href={project.activeLink}>{project.activeLink}</a>
                            </p>
                        }
                    </a>
                </div>

                {/* Project image gallery */}
                <div className="gallery">
                        <ImageGallery 
                            items={project.images} 
                            originalTitle={project.title}
                            thumbnailPosition="left"
                            slideInterval={4000}
                        />
                </div>
            </div>
        );
    })

    // Render the Projects component
    return (
        <div className="projects-page">

            {/* Projects main title */}
            <h1 className="projects-title">Projects</h1>

            {/* Projects subtitle */}
            <h2 className="projects-subtitle">Here are some of the projects I have been working on: </h2>

            {/* Project section */}
            {projectDataElements}
        </div>
    );
}

export default Projects;