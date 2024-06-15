// REACT AND COMPONENTS
import React from "react";

// STYLING
import "../styles/Explore.css";

// COMPONENTS
import Carousel from "../componets/Carousel";

// THE EXPLORE PAGE FUNCTION
export default function Explore() {
    return (
        <div className="exploreScreen">
            <Carousel />
        </div>
    );
}
