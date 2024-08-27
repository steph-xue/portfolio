import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

function Projects() {

    const images = [
        {
            original: "/images/projects/tenzies-game/game.png",
            thumbnail: "/images/projects/tenzies-game/game.png",
        },
        {
            original: "/images/projects/tenzies-game/tenzies-win.png",
            thumbnail: "/images/projects/tenzies-game/tenzies-win.png",
        },
        {
            original: "/images/projects/tenzies-game/start-game.png",
            thumbnail: "/images/projects/tenzies-game/start-game.png",
        },
    ];

    // Render the Projects component
    return (
        <div className="projects-page">

            {/* Projects main title */}
            <h1 className="projects-title">Projects</h1>

            {/* Projects subtitle */}
            <h2 className="projects-subtitle">Here are some of the projects I have been working on: </h2>

            {/* Project section */}
            {/*<a className="project-container-link" href="https://github.com/steph-xue/tenzies-game"> */}
                <div className="project-container">
                    <div className="project-text">
                        <h2 className="project-title">Tenzies Game</h2>
                        <p className="project-description">
                            The tenzies game is a dynamic web application where the objective of the game is to roll the dice as fast as 
                            possible until all dice are the same. The player who gets all dice on the same number and yells "Tenzi!" the fastest 
                            is the winner. You can play against other people or play against yourself and try to beat your best time. The user
                            can click each die to freeze it at its current value between rolls. The user can then click on the roll button to 
                            re-roll the unheld dice.  
                        </p>
                        <p className="project-languages">
                            <strong>Languages: </strong>
                            JavaScript, JSX, HTML, CSS
                        </p>
                        <p className="project-additional-info">
                            <strong>Frameworks & Dependencies: </strong>
                            React, Vite, NanoID, React-confetti 
                        </p>
                        <p className="project-github">
                            <strong>Github Link: </strong>
                            <a className="github-active-link"href="https://github.com/steph-xue/tenzies-game">https://github.com/steph-xue/tenzies-game</a>
                        </p>
                        <p className="project-link">
                            <strong>Try It Out Here: </strong>
                            <a className="project-active-link" href="https://main--tenzies-game-sx.netlify.app/">https://main--tenzies-game-sx.netlify.app</a>
                        </p>
                    </div>

                    {/* Image gallery for project*/}
                    <div className="gallery">
                        <ImageGallery 
                            items={images} 
                            originalHeight={500}
                            originalWidth={500}
                            thumbnailWidth={500}
                            thumbnailHeight={500}
                            originalTitle="tenzies-game"
                            thumbnailPosition="left"
                            slideInterval={4000}
                        />
                    </div>
                </div>
            {/*</a> */}
        </div>
    );
}

export default Projects;