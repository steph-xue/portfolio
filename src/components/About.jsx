import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import travelData from "../image-data/travel-data.jsx"
import foodData from "../image-data/food-data.jsx"
import catData from "../image-data/cat-data.jsx"
import Gallery from "./Gallery.jsx"

function About() {

    // State variables to store each category of images (each storing 6 image objects)
    const [travelImages, setTravelImages] = React.useState(selectRandomImages(travelData));
    const [foodImages, setFoodImages] = React.useState(selectRandomImages(foodData));
    const [catImages, setCatImages] = React.useState(selectRandomImages(catData));

    // State variable to store whether the image is displayed in full
    const [showImage, setShowImage] = React.useState(false);

    // State variable to store the URL and title of the image to be displayed in full
    const [imageURL, setImageURL] = React.useState("");
    const [imageTitle, setImageTitle] = React.useState("");

    // Function to select 6 random image objects from the images database
    function selectRandomImages(data) {
        
        const imagesArray = [];
        while (imagesArray.length < 6) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomImage = data[randomIndex];
            if (!imagesArray.includes(randomImage)) {
                imagesArray.push(randomImage);
            }
        }
        return imagesArray;
    }

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            {/* About more info */}
            <div className="about-container-2">
                <p className="about-more-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            {/* About interests */}
            <div className="about-container-3">
                <img src="/images/profile-cat.png" alt="profile-cat" className="profile-cat-image" />
                <div className="about-container-3-text">
                    <p className="about-interests">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            {/* Image gallery */}
            <Gallery 
                travelImages={travelImages} 
                foodImages={foodImages} 
                catImages={catImages}
                toggleImage={toggleImage}
            /> 

            {/* Full image display if image is clicked on */}
            {
                showImage &&
                <div className="full-image-container">
                    <FontAwesomeIcon className="close-icon" icon={faCircleXmark} onClick={toggleImage} />
                    <img src={imageURL} alt="full-image" className="full-image" />
                    <p className="full-image-title">{imageTitle}</p>
                </div>
            }
        </div>
    );
}

export default About;