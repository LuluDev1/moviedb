import React from "react";
import "../styles/Explore.css";
import Poster from "../componets/Poster";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
export default function Explore() {
    const onPressLeft = () => {
        const cont1 = document.getElementById("scrollContainer");
        cont1.scrollBy({ left: -300, behavior: "auto" });
    };

    const onPressRight = () => {
        const cont1 = document.getElementById("scrollContainer");
        cont1.scrollBy({ left: 420, behavior: "auto" });
    };

    return (
        <div className="exploreScreen">
            <div className="carouselContainer">1</div>
            <div className="cardContainer">
                <LeftCircleFilled
                    className="scrollLeftBtn"
                    onClick={onPressLeft}
                />
                <div className="scrollContainer" id="scrollContainer">
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                    <Poster />
                </div>
                <RightCircleFilled
                    className="scrollRightBtn"
                    onClick={onPressRight}
                />
            </div>
        </div>
    );
}
