import React from "react"
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import data from "@/project-data/project-data";

function Projects(props) {

    // Get all the project data (reverse the project data array once during the initial state setup)
    const [allProjectData] = React.useState(() => data.slice().reverse());

    // Set the current project data filtered based on the selected category (default is all projects)
    const [currentProjectData, setCurrentProjectData] = React.useState(allProjectData);

    // Display a specific section when the user clicks on a category link (default is all projects)
    const [projectCategory, setProjectCategory] = React.useState("all");

    // Function to update the project category based on the selected category link
    function updateProjectCategory(type) {
        if (type === "all") {
            setProjectCategory("all");
            setCurrentProjectData(allProjectData);
        } else if (type === "personal") {
            setProjectCategory("personal");
            const personalProjects = allProjectData.filter(project => project.category === "personal");
            setCurrentProjectData(personalProjects);
        } else if (type === "academic") {
            setProjectCategory("academic");
            const academicProjects = allProjectData.filter(project => project.category === "academic");
            setCurrentProjectData(academicProjects);
        } else {
            setProjectCategory("hackathon");
            const hackathonProjects = allProjectData.filter(project => project.category === "hackathon");
            setCurrentProjectData(hackathonProjects);
        }
    }

    // Map the project data to create the project elements
    const projectDataElements = currentProjectData.map((project, index) => {
        return (
            <div 
                className={props.darkMode ? "project-container item-container-dark" : "project-container item-container-light"} 
                key={project.title + index} 
            >

                {/* Project text */}
                <div className="project-text">
                    <a className="project-container-link" href={project.github}>
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-type">{project.type}</p>
                        <p className="project-description">{project.description}</p>
                        <p className="project-languages">
                            <strong>Languages: </strong>
                            {project.languages}
                        </p>
                        <div>
                            <p className="project-additional-info1"><strong>Frameworks/Dependencies/Tools/Databases/APIs/Cloud Services: </strong></p>
                            <p className="project-additional-info2">{project.additionalInfo}</p>
                        </div>
                        { project.github &&
                            <p className="project-github">
                                <strong>Github Link: </strong>
                                <a className={props.darkMode ? "github-active-link dark-link" : "github-active-link light-link"} href={project.github}>
                                    {project.github}
                                </a>
                            </p>
                        }
                        { project.activeLink &&
                            <p className="project-link">
                                <strong>Try It Out Here: </strong>
                                <a className={props.darkMode ? "project-active-link dark-link" : "project-active-link light-link"} href={project.activeLink}>
                                    {project.activeLink}
                                </a>
                            </p>
                        }
                        { project.devpostLink &&
                            <p className="devpost-link">
                                <strong>Devpost: </strong>
                                <a className={props.darkMode ? "project-active-link dark-link" : "project-active-link light-link"} href={project.devpostLink}>
                                    {project.devpostLink}
                                </a>
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

            {/* Category links */}
            <div className={props.darkMode ? "projects-nav nav-dark" : "projects-nav nav-light"}>
                <p className={projectCategory === "all" ? "nav-link projects-nav-link project-active" : "nav-link projects-nav-link"} 
                    onClick={() => updateProjectCategory("all")}>
                        All Projects
                </p>
                <p className={projectCategory === "personal" ? "nav-link projects-nav-link project-active" : "nav-link projects-nav-link"} 
                   onClick={() => updateProjectCategory("personal")}>
                    Personal Projects
                </p>
                <p className={projectCategory === "academic" ? "nav-link projects-nav-link project-active" : "nav-link projects-nav-link"} 
                   onClick={() => updateProjectCategory("academic")}>
                    Academic Projects
                </p>
                <p className={projectCategory === "hackathon" ? "nav-link projects-nav-link project-active" : "nav-link projects-nav-link"} 
                   onClick={() => updateProjectCategory("hackathon")}>
                    Hackathon Projects
                </p>
            </div>

            {/* Project section */}
            {projectDataElements}
        </div>
    );
}

// Prop validation for Projects component.
 // Ensures `darkMode` is provided as a boolean
 Projects.propTypes = {
   darkMode: PropTypes.bool.isRequired,
 };

export default Projects;