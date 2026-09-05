import React from "react"
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import travelData from "@/image-data/travel-data"
import foodData from "@/image-data/food-data"
import catData from "@/image-data/cat-data"
import Gallery from "@/components/Gallery"

function About(props) {

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

    // Function to refresh the images in the gallery (randomize the images)
    function refreshImages(dataType) {

        if (dataType === "travel") {
            setTravelImages(selectRandomImages(travelData));
        } else if (dataType === "food") {
            setFoodImages(selectRandomImages(foodData));
        } else if (dataType === "cat") {
            setCatImages(selectRandomImages(catData));
        }
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
            <h1 className="about-title">I&apos;m Stephanie</h1>

            {/* About summary */}
            <div className="about-container-1">
                <img className="profile-image" src="/images/profile-pic.png" alt="profile-pic" />
                <div className="about-container-1-text">
                    <h2 className="about-subtitle">I&apos;m currently a UBC Bachelor of Computer Science (BCS) student based in Vancouver, BC, Canada.</h2>
                    <p className="about-description">
                        Before pursuing computer science, I graduated from UBC with a Doctor of Pharmacy (PharmD) in 2022 and worked as a pharmacist
                        across various healthcare settings. These experiences gave me firsthand insight into how fragmented systems and manual processes 
                        can impact patient care, which sparked my interest in building software that can solve practical problems. Over time, that interest 
                        grew into a genuine passion for software development and led me to pursue it as a career. Most recently, I have worked at Kardium as
                        a Software Developer Intern on the Globe Pulsed Field System, an advanced medical device designed to treat atrial fibrillation through
                        high-definition cardiac mapping and pulsed field ablation. In this role, I developed a software tool to streamline configuration 
                        management and feature development for the Globe System. I also helped refactor the host interface to centralize styling and reduce 
                        duplication across shared components, improving consistency, modularity, and maintainability across the production codebase.
                    </p>
                </div>
            </div>

            {/* About interests */}
            <div className="about-container-2">
                <img className="profile-cat-image" src="/images/profile-cat.png" alt="profile-cat" />
                <p className="about-container-2-text">
                        My technical interests include full-stack development, software architecture, cloud infrastructure, and agentic AI systems. I enjoy 
                        creative problem-solving, turning innovative ideas into practical solutions, and building software that is purposeful, intuitive to
                        use, and thoughtfully designed. In my downtime, you&apos;ll often find me making a cup of coffee or a matcha latte, unwinding with 
                        a cozy video game, or spending quality time with my loved ones. I also enjoy exploring new coffee shops, traveling, and uncovering 
                        hidden gems in and out of the city, always in search of inspiration. My creativity also finds its expression in photography, design, 
                        and digital art. I love capturing memories in photos, whether that be food, scenery, or cherished moments with loved ones. I also 
                        enjoy art and design as a medium for bringing my ideas to life and have been trying to learn new digital art styles and techniques.
                        Additionally, I have an adorable cat named Rhea who loves cozy naps, warm blankets, and cuddles.
                      
                </p>
            </div>

            <h2 className="photography-gallery-title">Photography Gallery</h2>
            <p className="gallery-description">(Click to view more details!)</p>

            {/* Image gallery */}
            <Gallery 
                travelImages={travelImages} 
                foodImages={foodImages} 
                catImages={catImages}
                toggleImage={toggleImage}
                darkMode={props.darkMode}
                refreshImages={refreshImages}
            /> 

            {/* Full image display if image is clicked on */}
            <div
                className={[
                 "full-image-overlay",
                 props.darkMode ? "dark-image-container" : "light-image-container",
                 showImage && imageURL && "is-open"
                 ].filter(Boolean).join(" ")}
            >
                <div className="full-image-modal" onClick={e => e.stopPropagation()}>
                    <FontAwesomeIcon className="close-icon" icon={faCircleXmark} onClick={toggleImage} />
                    <p className="full-image-title-photos">{imageTitle}</p>
                    {imageURL && (
                        <img src={imageURL} alt="full-image-photo" className="full-image-photo" />
                    )}
                </div>
            </div>
        </div>
    );
}

// Prop validation for About component.
// Ensures `darkMode` is provided as a boolean
About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default About;