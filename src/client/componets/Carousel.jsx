import React from "react";

export default function Carousel() {
    const cont1 = document.getElementById("carousel");
    
    const onPressLeft = () => {
        cont1.scrollBy({ left: -705, behavior: "smooth" });
    };

    const onPressRight = () => {
        cont1.scrollBy({ left: 705, behavior: "smooth" });
    };
    return (
        <div className="carouselContainer" id="carousel">
            <div className="page"></div>
            <div className="page"></div>
        </div>
    );
}
