import React from "react"
import travelData from "./image-data/travel-data"
import foodData from "./image-data/food-data"
import catData from "./image-data/cat-data"

function Gallery() {

    // State variables to store each category of images (each storing 6 image objects)
    const [travelImages, setTravelImages] = React.useState(selectRandomImages(travelData));
    const [foodImages, setFoodImages] = React.useState(selectRandomImages(foodData));
    const [catImages, setCatImages] = React.useState(selectRandomImages(catData));

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

    const travelImagesElements = travelImages.map((image, index) => {
        return (
            <div className="travel-image">
                <img 
                    src={image.source} 
                    alt={image.name} 
                    className={`travel-image${index + 1}`} 
                    onClick={(event) => openFullscreen(event)}
                />
            </div>
        )
    })

    const foodImagesElements = foodImages.map((image, index) => {
        return (
            <div className="food-image">
                <img 
                    src={image.source} 
                    alt={image.name} 
                    className={`food-image${index + 1}`} 
                    onClick={(event) => openFullscreen(event)}
                />
            </div>
        )
    })

    const catImagesElements = catImages.map((image, index) => {
        return (
            <div className="cat-image">
                <img 
                    src={image.source} 
                    alt={image.name} 
                    className={`cat-image${index + 1}`} 
                    onClick={(event) => openFullscreen(event)}
                />
            </div>
        )
    })

    // Function to open the selected image in fullscreen
    function openFullscreen (event) {
        event.target.requestFullscreen();
    }

    // Render the image gallery
    return (
        <div className="gallery-section">

            {/* Travel image gallery */}
            <div className="travel-gallery">
                <h2 className="travel-title">Travel Photography</h2>
                <div className="travel-pics">
                    {travelImagesElements}
                </div>
            </div>

            {/* Food image gallery */}
            <div className="food-gallery">
                <h2 className="food-title">Good Eats</h2>
                <div className="food-pics">
                    {foodImagesElements}
                </div>
            </div>

            {/* Cat image gallery */}
            <div className="cat-gallery">
                <h2 className="cat-title">My Beloved Cat</h2>
                <div className="cat-pics">
                    {catImagesElements}
                </div>
            </div>

        
        </div>
    );
}

export default Gallery;