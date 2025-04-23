import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import travelData from "../image-data/travel-data.jsx"
import foodData from "../image-data/food-data.jsx"
import catData from "../image-data/cat-data.jsx"
import Gallery from "./Gallery.jsx"

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
            <h1 className="about-title">I'm Stephanie</h1>

            {/* About summary */}
            <div className="about-container-1">
                <img src="/images/profile-pic.png" alt="profile-pic" className="profile-image" />
                <div className="about-container-1-text">
                    <h2 className="about-subtitle">I'm a currently a UBC Bachelor of Computer Science (BCS) student based in Vancouver, BC, Canada.</h2>
                    <p className="about-description">
                        As a UBC Bachelor of Computer Science (BCS) student with a background in healthcare as a pharmacist,
                        I have a strong enthusiasm for technology, software development, UX/UI design, artificial intelligence,
                        healthcare innovation, and creative problem solving. I am passionate about leveraging technology to help streamline processes,
                        automate tasks, bridge gaps, and develop innovative solutions to address real-world problems. As a life-long learner, 
                        I am always excited to explore new ideas, expand my skillset, and push the boundaries of my knowledge. I thrive on
                        challenging myself through pursing new projects and collaborating with like-minded individuals to foster both personal
                        and professional growth.
                    </p>
                </div>
            </div>

            {/* About more info */}
            <div className="about-container-2">
                <p className="about-container-2-text">
                    Given my healthcare background, I have had various experiences in community, hospital, ambulatory care, and research
                    settings across multiple therapeutic areas such as cardiology, neurology, mental health, and diabetes. These experiences have
                    equipped me with valuable direct patient care experiences and have allowed me to gain a comprehensive understanding of different
                    healthcare software and emerging technologies. My previous experiences have provided me with a unique perspective on how 
                    technology can be harnessed to enhance patient care and improve operational efficiency. This perspective fuels my commitment
                    to leverage technology in ways that can help address real-world challenges and make a meaningful impact in our society. I am
                    motivated by the idea that thoughtful innovation can empower individuals and communities to achieve more and overcome existing
                    barriers. By blending my past experiences, problem-solving skills, technical expertise, and creativity, I hope to create systems
                    that inspire meaningful change, enhance efficiency, and contribute to a more collaborative future.
                </p>
            </div>

            {/* About interests */}
            <div className="about-container-3">
                <img src="/images/profile-cat.png" alt="profile-cat" className="profile-cat-image" />
                <div className="about-container-3-text">
                    <p className="about-interests">
                        In my downtime, you will often find me trying to craft the perfect glass of iced coffee or a matcha  
                        latte, listening to and playing music, immersing myself in a cozy video game, and spending quality time 
                        with my loved ones. I also enjoy visiting new coffee shops, traveling, and uncovering hidden gems 
                        both in and out of the city, always in search of inspiration and new experiences. My creativity also 
                        finds its expression in photography, design, and digital art. I love capturing memories and the beauty 
                        of the world around me in photos, whether that be food, scenery, or cherished moments with loved ones. 
                        I also enjoy art and design as a medium for bringing my ideas to life, and have been trying to learn and 
                        experiment with new digital art styles and techniques. Additionally, I have an adorable cat named Rhea who is 
                        an American Shorthair and Maine Coon mix. She has an endearing and loving personality, who loves to spending
                        her time cuddling, taking naps, snacking on yummy treats, and basking in the sun.
                    </p>
                </div>
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
            {
                showImage &&
                <div className={props.darkMode ? "full-image-container dark-container" : "full-image-container light-container"}>
                    <FontAwesomeIcon className="close-icon" icon={faCircleXmark} onClick={toggleImage} />
                    <p className="full-image-title">{imageTitle}</p>
                    <img src={imageURL} alt="full-image" className="full-image" />
                </div>
            }
        </div>
    );
}

export default About;