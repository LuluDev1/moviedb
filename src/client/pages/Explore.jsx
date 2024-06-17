// REACT AND COMPONENTS
import React from "react";

// STYLING
import "../styles/Explore.css";

// COMPONENTS
import Carousel from "../componets/Carousel";
import logo from "../assets/logo.png";
// THE EXPLORE PAGE FUNCTION
export default function Explore() {
    return (
        <div className="exploreScreen">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <Carousel />
        </div>
    );
}
