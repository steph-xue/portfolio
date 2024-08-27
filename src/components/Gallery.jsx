import React from "react"

function Gallery() {

    // Render the image gallery
    return (
        <div className="gallery-section">

            {/* Travel image gallery */}
            <div className="travel-gallery">
                <h2 className="travel-title">Travel Photography</h2>
                <div className="travel-pics">
                    <img src="/images/travel/arashiyama.jpg" alt="arashiyama" className="travel-image" />
                    <img src="/images/travel/cabo.jpg" alt="cabo" className="travel-image" />
                    <img src="/images/travel/english-bay.jpg" alt="english-bay" className="travel-image" />
                    <img src="/images/travel/halcyon.jpg" alt="halcyon" className="travel-image" />
                    <img src="/images/travel/osaka-castle.jpg" alt="osaka-castle" className="travel-image" />
                    <img src="/images/travel/seattle-market.jpg" alt="seattle-market" className="travel-image" />
                </div>
            </div>

            {/* Food image gallery */}
            <div className="food-gallery">
                <h2 className="food-title">Good Eats</h2>
                <div className="food-pics">
                    <img src="/images/food/ask-for-luigi.jpg" alt="ask-for-luigi" className="food-image" />
                    <img src="/images/food/lanzhou.jpg" alt="lanzhou" className="food-image" />
                    <img src="/images/food/mello.jpg" alt="mello" className="food-image" />
                    <img src="/images/food/zoomak.jpg" alt="zoomak" className="food-image" />
                    <img src="/images/food/new-fuji.jpg" alt="new-fuji" className="food-image" />
                    <img src="/images/food/little-pieces.jpg" alt="little-pieces" className="food-image" />
                </div>
            </div>

            {/* Cat image gallery */}
            <div className="cat-gallery">
                <h2 className="cat-title">My Beloved Cat</h2>
                <div className="cat-pics">
                    <img src="/images/cat/cat1.jpg" alt="cat1" className="cat-image" />
                    <img src="/images/cat/cat2.jpg" alt="cat2" className="cat-image" />
                    <img src="/images/cat/cat3.jpg" alt="cat3" className="cat-image" />
                    <img src="/images/cat/cat4.jpg" alt="cat4" className="cat-image" />
                    <img src="/images/cat/cat5.jpg" alt="cat5" className="cat-image" />
                    <img src="/images/cat/cat6.jpg" alt="cat6" className="cat-image" />
                </div>
            </div>

        
        </div>
    );
}

export default Gallery;