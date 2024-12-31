import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

function Gallery(props) {

    const travelImagesElements = props.travelImages.map((image, index) => {
        return (
            <div className="travel-image" key={image.name + index}>
                <img 
                    src={image.source} 
                    alt={image.name} 
                    className={`travel-image${index + 1}`} 
                    onClick={() => props.toggleImage(image.source, image.title)}
                />
            </div>
        )
    })

    const foodImagesElements = props.foodImages.map((image, index) => {
        return (
            <div className="food-image" key={image.name + index}>
                <img 
                    src={image.source} 
                    alt={image.name} 
                    className={`food-image${index + 1}`} 
                    onClick={() => props.toggleImage(image.source, image.title)}
                />
            </div>
        )
    })

    const catImagesElements = props.catImages.map((image, index) => {
        return (
            <div className="cat-image" key={image.name + index}>
                <img 
                    src={image.source} 
                    alt={image.name} 
                    className={`cat-image${index + 1}`} 
                    onClick={() => props.toggleImage(image.source, image.title)}
                />
            </div>
        )
    })

    // Render the image gallery
    return (
        <div className="gallery-section">

            {/* Travel image gallery */}
            <div className="travel-gallery">
                <div className="travel-info">
                    <h2 className="travel-title">Travel Photography</h2>
                    <div className="travel-pics">
                        {travelImagesElements}
                    </div>
                </div>
                <button 
                    className={props.darkMode ? "refresh-button dark-button" : "refresh-button light-button"}
                    onClick={() => props.refreshImages("travel")}
                >
                    <FontAwesomeIcon className="refresh-icon" icon={faArrowsRotate} />
                    Refresh
                </button>
            </div>

            {/* Food image gallery */}
            <div className="food-gallery">
                <div className="food-info">
                    <h2 className="food-title">Good Eats</h2>
                    <div className="food-pics">
                        {foodImagesElements}
                    </div>
                </div>
                <button 
                    className={props.darkMode ? "refresh-button dark-button" : "refresh-button light-button"}
                    onClick={() => props.refreshImages("food")}
                >
                    <FontAwesomeIcon className="refresh-icon" icon={faArrowsRotate} />
                    Refresh
                </button>
            </div>

            {/* Cat image gallery */}
            <div className="cat-gallery">
                <div className="cat-info">
                    <h2 className="cat-title">My Beloved Cat</h2>
                    <div className="cat-pics">
                        {catImagesElements}
                    </div> 
                    </div>
                <button 
                    className={props.darkMode ? "refresh-button dark-button" : "refresh-button light-button"}
                    onClick={() => props.refreshImages("cat")}
                >
                    <FontAwesomeIcon className="refresh-icon" icon={faArrowsRotate} />
                    Refresh
                </button>
            </div>

        </div>
    );
}

export default Gallery;