import React from "react"
import aData from "../image-data/art-data.jsx"

function Art(props) {   

    // Reverse the art data array once during the initial state setup
    const [artData] = React.useState(() => aData.slice().reverse());

    // Map the art data to create the art elements
    const artDataElements = artData.map((art, index) => {
        return (
            <div 
                className="art-container" 
                key={art.title + index} 
            >

                <h2 className="art-image-title">{art.title}</h2>
                <img className="art-image" src={art.source} alt={art.title} />
            </div>
        );
    });
   

    // Render the Art component
    return (
        <div className="art-page">

            {/* Art page title and description */}
            <h1 className="art-title">Digital Art</h1>
            <p className="art-description">
                More coming soon!
            </p>

            {/* Art gallery */}
            <div className={props.darkMode ? "art-gallery art-dark" : "art-gallery art-light"}>
                {artDataElements}
            </div>

        </div>
    );
}

export default Art;