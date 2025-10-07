import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import aData from "../image-data/art-data.jsx"

function Art(props) {   

    // State variable to store whether the image is displayed in full
    const [showImage, setShowImage] = React.useState(false);
    
    // State variable to store the URL and title of the image to be displayed in full
    const [imageURL, setImageURL] = React.useState("");
    const [imageTitle, setImageTitle] = React.useState("");

    // Reverse the art data array once during the initial state setup
    const [artData] = React.useState(() => aData.slice().reverse());

    // Function to toggle the selected image (as open full image or close full image)
    function toggleImage(imageSource, imageTitle) {
        if (showImage) {
            setShowImage(false);
            setImageURL("");
            setImageTitle("");
        } else {
            setShowImage(true);
            setImageURL(imageSource);
            setImageTitle(imageTitle);
        }
    }

    // Map the art data to create the art elements
    const artDataElements = artData.map((art, index) => {
        return (
            <div 
                className="art-container" 
                key={art.title + index} 
            >

                <h2 className="art-image-title">{art.title}</h2>
                <img
                    className="art-image"
                    src={art.source}
                    alt={art.title}
                    onClick={() => toggleImage(art.source, art.title)}                     
                />
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

            {/* Full image display if image is clicked on */}
            {
                showImage &&
                <div className={props.darkMode ? "full-image-container dark-image-container" : "full-image-container light-image-container"}>
                    <FontAwesomeIcon className="close-icon" icon={faCircleXmark} onClick={toggleImage} />
                    <p className="full-image-title">{imageTitle}</p>
                    <img src={imageURL} alt="full-image-art" className="full-image-art" />
                </div>
            }

        </div>
    );
}

export default Art;